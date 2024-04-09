import React from "react";
import { Icon, InfoOutlineIcon, StarIcon } from "@chakra-ui/icons";
import {
  Box,
  Card,
  Flex,
  HStack,
  IconButton,
  SimpleGrid,
  Text,
  Tooltip,
} from "@chakra-ui/react";

import { useLoaderData } from "react-router-dom";
import ShowModals from "../components/ShowModals";
import { useState } from "react";
import { Movielist } from "./Dashboard";

const Shows = () => {
  const Series: Movielist[] = useLoaderData() as Movielist[];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedShow, setSelectedShow] = useState<Movielist | null>(null);

  const handleOpenModal: (show: Movielist) => void = (show) => {
    setSelectedShow(show);
    setIsModalOpen(true);
  };
  return (
    <Flex direction="column" mt={7} ml={5}>
      <Text fontSize="lg" fontWeight="bold">
        IMDb Charts
      </Text>
      <Text fontSize={"xx-large"} fontWeight="bold">
        Users Favorite
      </Text>
      <SimpleGrid spacing="10px" mt="2px" ml="5px">
        {Series &&
          Series.map((Show, index) => (
            <Card
              key={index}
              w="750px"
              h="130px"
              borderWidth="1px"
              borderColor="gray.200"
              borderRadius="lg"
              overflow="hidden"
            >
              <Flex>
                <Box flexShrink={0}>
                  <img
                    src={Show.Poster}
                    alt={Show.Title}
                    width="120px"
                    height="100px"
                  />
                </Box>
                <Box p="4">
                  <Text fontSize="lg" fontWeight="bold">
                    {Show.Title}
                  </Text>
                  <Text fontSize="sm" color="gray.500" mt={1}>
                    {Show.Genre}
                  </Text>
                  <HStack>
                    <Text fontSize="sm" mt={2} color="gray.500">
                      {Show.Year}
                    </Text>
                    <Text fontSize="sm" mt={2} color="gray.500">
                      {Show.Episodes} eps
                    </Text>
                    <Text fontSize="sm" mt={2} color="gray.500">
                      {Show.Rated}
                    </Text>
                  </HStack>
                  <HStack>
                    <Icon as={StarIcon} color="yellow.300" />
                    <Text fontSize="sm" color="gray.500">
                      {Show.imdbRating} ({Show.imdbVotes})
                    </Text>
                    <Text fontSize="sm" color="gray.500" ml="20px">
                      {Show.Type}
                    </Text>
                  </HStack>
                  <Box mt={3}>
                    <Tooltip
                      label={`See more information about ${Show.Title}`}
                      bg="white"
                      color="black"
                    >
                      <IconButton
                        position="absolute"
                        right="0"
                        mt="4"
                        mr="4"
                        bottom={10}
                        variant="ghost"
                        color="blue.300"
                        aria-label="Some information about"
                        icon={<InfoOutlineIcon />}
                        onClick={() => handleOpenModal(Show)}
                      />
                    </Tooltip>
                  </Box>
                </Box>
              </Flex>
            </Card>
          ))}
      </SimpleGrid>
      <ShowModals
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedShow={selectedShow}
      />
    </Flex>
  );
};

export const ShowLoader = async () => {
  const res = await fetch("http://localhost:3000/Series");
  return res.json();
};

export default Shows;
