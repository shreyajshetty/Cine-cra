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
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Heading,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import { Form, NavLink } from "react-router-dom";

const SignUp = () => {
  const toast = useToast();
  const showToast = () => {
    toast({
      title: "Congratulations for being a part of CINE",
      duration: 3000,
      status: "success",
      position: "bottom",
    });
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
          <Text fontSize="xx-large">Create account</Text>
        </CardHeader>
        <CardBody>
          <Form>
            <FormControl>
              <FormLabel>Your name</FormLabel>
              <Input
                type="text"
                name="text"
                placeholder="First and last name"
              />
              <FormLabel>Email</FormLabel>
              <Input type="email" name="text" />
              <FormLabel>Password</FormLabel>
              <Input
                type="text"
                name="text"
                placeholder="atleast 8 characters"
              />
              <FormHelperText color="black" left="10px">
                Passwords must be atleast 8 characters
              </FormHelperText>
              <FormLabel>Re-enter Password</FormLabel>
              <Input type="password" name="text" />
            </FormControl>
          </Form>
          <Button
            bg="purple.400"
            pr="80px"
            pl="12px"
            top={2}
            textAlign="center"
            _hover={{ bg: "purple.500" }}
            onClick={showToast}
          >
            <Text pl="85px">
              <NavLink to="dashboard">Create your CINE account </NavLink>
            </Text>
          </Button>
        </CardBody>
        <Divider color="whitesmoke" />
        <CardFooter>
          <HStack>
            <Text>Already have an account?</Text>
            <Text
              color="blue.300"
              _hover={{ textDecor: "underline", color: "orange.400" }}
            >
              <NavLink to="signin/">Sign in</NavLink>
            </Text>
          </HStack>
        </CardFooter>
      </Card>
    </Flex>
  );
};

export default SignUp;
