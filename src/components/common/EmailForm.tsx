import HCaptcha from "@hcaptcha/react-hcaptcha";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  CloseButton,
  FormControl,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React, { createRef, FormEventHandler, LegacyRef, useCallback, useRef, useState } from "react";

import ReCAPTCHA from "react-google-recaptcha";
import Select from "./Select";
const alertMessage = {
  success: "Message was sent!",
  error: "Something went wrong",
};

const subjectOptions = {
  Partnering: "Partnering",
  Investment: "Investment",
  Complaint: "Complaint",
  Suggestion: "Suggestion",
  "Report Problem / Bug": "Report Problem / Bug",
  "Hiring / Jobs": "Hiring / Jobs",
  Others: "Others",
};

const GOOGLE_RECAPTCHA_SITE_KEY = (process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY) as string;

// console.log("GOOGLE_RECAPTCHA_SITE_KEY = ", GOOGLE_RECAPTCHA_SITE_KEY);
const EmailForm = () => {
  const [verified, setVerified] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [selectedOption, setSelectedOption] = useState({
    value: subjectOptions.Partnering,
    label: subjectOptions.Partnering,
  });
  const timerId = useRef<NodeJS.Timeout | null>(null);
  const recaptchaRef = React.createRef();
  const reRef = useRef<ReCAPTCHA>(null);


  const reset = () => {
    setShowSuccess(false);
    setShowError(false);
  };

  const sendEmail: FormEventHandler = async (e) => {
    e.preventDefault();
    const token = await reRef.current?.executeAsync();

    setIsSending(true);

    if (timerId.current) {
      clearTimeout(timerId.current);
    }

    reset();

    const { name, email, subject, customSubject, message } = (e.target as any).elements ?? {};
    const currentSubject = selectedOption.value === subjectOptions.Others ? customSubject : subject;

    try {
      await fetch("/api/sendmail", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          email: email.value,
          subject: `${currentSubject.value} from ${name.value}`,
          message: message.value,
          token
        }),
      }).then(
        (response) => {
          // return response.json();
          if (response.status === 200) {
            setShowSuccess(true);
            reRef.current?.reset();
            timerId.current = setTimeout(() => {
              setIsSent(true);
              setShowSuccess(false);
            }, 5000);
          }

          if (response.status < 400) {
            setShowSuccess(true);
          } else {
            setShowError(true);
          }
        }
      );

    } catch (error) {
      setShowError(true);
    }
    setIsSending(false);
    timerId.current = setTimeout(() => {
      reset();
    }, 5000);
  };

  const handleSelect = (newValue: unknown) => {
    setSelectedOption(newValue as typeof selectedOption);
  };


  const handleVerification = (token: string) => {
    alert("sss")
    if (token) {
      setVerified(true);
    }
  };

  const commonInputStyles = {
    bg: "brand.100",
    color: "white",
    borderColor: "brand.600",
    borderRadius: "0px 15px 0px 15px",
    padding: "25px 15px",
  };


  return (
    <>
      <FormControl
        as="form"
        padding={25}
        onSubmit={sendEmail}
        bg="brand.300"
        // height="100%"
        isRequired
        zIndex={"66400!important"}
        >
        <Box
          display="flex"
          justifyContent="space-between"
          flexDirection={{ lg: "row", sm: "column" }}
          w="100%"
          mb={25}
        >
          <Input
            type="text"
            name="name"
            placeholder="Name"
            w={{ lg: "49%", sm: "100%" }}
            mb={{ lg: "0px", sm: "25px" }}
            {...commonInputStyles}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            w={{ lg: "49%", sm: "100%" }}
            {...commonInputStyles}
            required
          />
        </Box>
        <Select
          options={Object.entries(subjectOptions).map(([key, value]) => ({
            value,
            label: key,
          }))}
          type="text"
          name="subject"
          placeholder="Subject"
          value={selectedOption}
          w="100%"
          mb="25px"
          {...commonInputStyles}
          padding={0}
          onChange={handleSelect}
          required
        />
        {selectedOption.value === subjectOptions.Others && (
          <Input
            type="text"
            name="customSubject"
            placeholder="Type a subject here"
            w="100%"
            mb="25px"
            {...commonInputStyles}
            required
          />
        )}
        <Textarea
          name="message"
          placeholder="Message"
          height="200px"
          mb="10px"
          {...commonInputStyles}
          required
        />
        <Box display="flex" justifyContent="center" marginBottom="25px">
          {/* <HCaptcha
            sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_KEY || ""}
            onVerify={handleVerification}
            // ref={recaptchaRef}
          /> */}
          {/* <div className="g-recaptcha" data-sitekey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY}></div> */}
          <ReCAPTCHA
            sitekey={GOOGLE_RECAPTCHA_SITE_KEY}
            size="invisible"
            ref={reRef}
              // onChange={onReCAPTCHAChange}
          />
        </Box>
        <Button
          // disabled={!verified || isSending}
          disabled={isSent}
          display="block"
          type="submit"
          fontSize={18}
          h="40px"
          w="150px"
          color="white"
          bg="brand.100"
          _hover={{
            bg: "gray.300",
            color: "gray.900",
          }}    
          m="0 auto"
        >
          Send
        </Button>
      </FormControl>
      {(showSuccess || showError) && (
        <Alert
          position="fixed"
          bottom="0px"
          left="0px"
          status={showSuccess ? "success" : "error"}
          zIndex={20}
        >
          <AlertIcon />
          <AlertTitle mr={2}>
            {showSuccess ? alertMessage.success : alertMessage.error}
          </AlertTitle>
          <CloseButton position="absolute" right="8px" top="8px" />
        </Alert>
      )}
      <Box h={300}></Box>
    </>
  );
};

export default EmailForm;
