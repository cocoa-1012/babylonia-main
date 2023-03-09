import { Box } from "@chakra-ui/react";
import { useState } from "react";

import EmailForm from "src/components/common/EmailForm";
import Header from "src/components/common/Header";
import Menu from "src/components/common/Menu/MobileMenu";

const MobileEmailForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen((state) => !state);
  };

  return (
    <Box position="relative" bg="brand.300" padding="103px 0 350px">
      <Header handleMenuClick={handleMenuClick} />
      <Box padding="0 18px">
        <Menu isOpen={isOpen} />
        <EmailForm />
      </Box>
      <Box h="300px" />
    </Box>
  );
};

export default MobileEmailForm;
