import React from "react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, HStack, Icon, Img, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <Flex direction="column" bg="blackAlpha.200">
      <Flex justify="center" align="center" height="50px">
        <Button color="white" colorScheme="purple">
          <NavLink to="signin">Sign In For more Access</NavLink>
        </Button>
      </Flex>

      <HStack mt="10px" justify="center" align="center" gap="10px">
        <Img
          src="/img/twitter.png"
          width="50px"
          height="50px"
          borderRadius="50%"
        />
        <Img src="/img/fb.png" width="50px" height="50px" borderRadius="50%" />
        <Img
          src="/img/tiktok.png"
          width="50px"
          height="50px"
          borderRadius="30%"
        />
        <Img src="/img/ig.png" width="50px" height="50px" borderRadius="50%" />
        <Img src="/img/yt.png" width="50px" height="50px" borderRadius="50%" />
      </HStack>
      <HStack justify="center" gap="20px">
        <Text>
          Book Tickets Now
          <Icon as={ExternalLinkIcon} mb="5px" />
        </Text>
        <Text>
          Help
          <Icon as={ExternalLinkIcon} mb="5px" />
        </Text>
        <Text>
          Privacy Policy
          <Icon as={ExternalLinkIcon} mb="5px" />
        </Text>
      </HStack>
      <Box
        w="full"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        <Text fontWeight="xs">© New App 2024 by CINE.com, Inc.</Text>
      </Box>
    </Flex>
  );
};

export default Footer;
