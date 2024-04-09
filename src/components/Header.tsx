import React from "react";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSearch } from "../Context/SearchContext";

const Header = () => {
  const { movieName, setMovieName, SearchNow } = useSearch();
  const navigate = useNavigate();
  const handleSearch = () => {
    SearchNow();
    navigate("/search");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMovieName(e.target.value);
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div>
      <Flex minWidth="100%">
        <Box
          w="250px"
          h="20px"
          p="10px"
          alignContent="center"
          justifyContent="space-around"
        >
          <Heading
            as="h3"
            fontSize="x-large"
            fontWeight="bold"
            mt="50px"
            p="10px"
            ml="30px"
            justifyContent="center"
            color="purple.400"
            fontFamily="Kalam"
          >
            CINE
          </Heading>
        </Box>

        <HStack p="20px">
          <InputGroup alignItems="center" _hover={{ transform: "scale(1.1)" }}>
            <Input
              type="text"
              name="Search"
              placeholder="Type here"
              w="700px"
              p="10px"
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              boxShadow="1px 2px 1px 2px rgba(0,0,0,0.5)"
              _focus={{
                borderColor: "black",
                boxShadow: "1px 2px 1px 2px rgba(0,0,0,0.5)",
              }}
            />
            <InputRightElement mt="0" p="20px" w="5px">
              <SearchIcon
                color="gray.400"
                onClick={handleSearch}
                _hover={{ transform: "scale(1.1)", color: "gray.600" }}
              />
            </InputRightElement>
          </InputGroup>
        </HStack>
        <Spacer />
        <HStack pl="30px" w="300px" mt="20px" mb="20px" gap="10px">
          <Text as="h3" color="black" _hover={{ color: "purple.400" }}>
            <NavLink to="signin">Sign In</NavLink>
          </Text>
          <Button colorScheme="purple">
            <NavLink to="signup">Sign Up</NavLink>
          </Button>
        </HStack>
      </Flex>
    </div>
  );
};

export default Header;
