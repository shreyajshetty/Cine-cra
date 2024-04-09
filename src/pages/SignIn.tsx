import React from "react";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  FormLabel,
  HStack,
  Heading,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import { Form, NavLink, useNavigate } from "react-router-dom";

const SignIn = () => {
  const history = useNavigate();
  const toast = useToast();
  const showToast = () => {
    toast({
      title: "Signed In Successfully",
      duration: 3000,
      status: "success",
      position: "bottom",
    });
    history("dashboard");
  };
  return (
    <Flex>
      <Box
        pos="fixed"
        flexDirection="column"
        justifyContent="center"
        left="600px"
        top="25px"
      >
        <Heading as="h3" color="purple.400">
          CINE
        </Heading>
      </Box>
      <Card left="450px" top="100px" width="400px">
        <CardHeader>
          <Text fontSize="xx-large">Log In</Text>
        </CardHeader>
        <CardBody>
          <Form>
            <FormLabel>Email</FormLabel>
            <Input type="email" name="text" />
            <FormLabel>Password</FormLabel>
            <Input type="text" name="text" />
          </Form>
          <Button
            bg="purple.400"
            pr="80px"
            pl="12px"
            top={2}
            textAlign="center"
            _hover={{ bg: "purple.500" }}
            onClick={showToast}
            left={14}
          >
            <Text pl="85px">
              <NavLink to="dashboard">Sign In</NavLink>
            </Text>
          </Button>
        </CardBody>
        <Divider color="whitesmoke" />
        <CardFooter>
          <HStack>
            <Text color="blue.300" _hover={{ textDecor: "underline" }}>
              Forgot Password?
            </Text>
          </HStack>
        </CardFooter>
      </Card>
    </Flex>
  );
};

export default SignIn
