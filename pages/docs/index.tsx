import Head from 'next/head';
import Layout from '@components/Docs/Layout';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import {
  addKebabIdToHTags,
  AddTitleCssToH1,
  addTitleOfImageFromAlt,
  ChangeLinks,
  getTOCList,
  loadGitbookAssets
} from '@components/Docs/Helpers/functions';
import { Container } from '@chakra-ui/react';
import { githubURL } from '@components/Docs/Helpers/GlobalVariables';
import { setContent, setCurrentUrl } from '@store/bodySlice';
import { setTOC, setTOCHtml } from '@store/tocSlice';
import { unified } from 'unified';
import { useAppDispatch } from '@hooks';
import { useEffect } from 'react';
import type { NextPage, NextPageContext } from 'next'
// import Head from 'next/head'

export async function getServerSideProps({ req }: NextPageContext) {
  let githubMarkDownContent = await (await fetch(`${githubURL}SUMMARY.md`)).text()
  var toc_html: string = ""
  await unified()
    .use(remarkParse)
    // add any remark plugins here
    .use(remarkRehype, { allowDangerousHtml: true })
    // add any rehype plugins here
    .use(rehypeRaw)
    .use(rehypeSanitize)
    .use(rehypeStringify)
    .process(githubMarkDownContent)
    .then(
      (htmlfile) => {
        toc_html = AddTitleCssToH1(ChangeLinks(htmlfile.value.toString()));
        // tocList = htmlfile.value.toString();
      }
    )
    .catch((err) => { });

  const bodyUrl = `https://raw.githubusercontent.com/babyloniaapp/docs/main/README.md`;
  let bodyContentMd = await (await fetch(`${bodyUrl}`)).text()
  let bodyContent = ""
  await unified()
    .use(remarkParse)
    // add any remark plugins here
    .use(remarkRehype, { allowDangerousHtml: true })
    // add any rehype plugins here
    .use(rehypeRaw)
    .use(rehypeSanitize)
    .use(rehypeStringify)
    .process(bodyContentMd)
    .then(
      (htmlfile: any) => {
        bodyContent = addKebabIdToHTags(addTitleOfImageFromAlt(loadGitbookAssets(htmlfile.value.toString())));
      }
    )
    .catch((err: any) => {
      console.log(err)
    });
  return {
    props: {
      toc: getTOCList(toc_html),// AddTitleCssToH1(ChangeLinks(tocList)),
      tocHtml: toc_html,
      body: bodyContent,
      currentUrl: ""
    },
  }
}

type TProps = {
  toc: [],
  tocHtml: string,
  body: string,
  currentUrl: string
};

type TTocItem = {
  address: string,
  title: string
}

const Home: NextPage<TProps> = ({ toc, tocHtml, body, currentUrl }) => {
  const dispatch = useAppDispatch()
  // const toclist = useAppSelector((state: any) => state.toc.items);
  useEffect(() => {
    dispatch(setTOC(toc))
    dispatch(setTOCHtml(tocHtml))
    dispatch(setContent(body))
    dispatch(setCurrentUrl(currentUrl))

  }, [])

  return (

    <Container
      maxW=".xl"
      bg="black.900"
      pt="0"
      pb="0"
      pl="0"
      pr="0"
      w="100vw"
      h="100vh"
    >
      <Head>
        <title>Docs</title>
        <meta name="description" content="Documentation of Babylonia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout />

    </Container>
  )
}

export default Home