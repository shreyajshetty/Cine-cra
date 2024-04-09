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

import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import MovModals from "../components/MovModals";
import { Movielist } from "./Dashboard";

const Movies = () => {
  const Cinemas: Movielist[] = useLoaderData() as Movielist[];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCinema, setSelectedCinema] = useState<Movielist | null>(null);

  const handleOpenModal: (Cinema: Movielist) => void = (Cinema) => {
    setSelectedCinema(Cinema);
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
        {Cinemas &&
          Cinemas.map((Cinema, index) => (
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
                    src={Cinema.Poster}
                    alt={Cinema.Title}
                    width="120px"
                    height="180px"
                  />
                </Box>
                <Box p="4">
                  <Text fontSize="lg" fontWeight="bold">
                    {Cinema.Title}
                  </Text>
                  <Text fontSize="sm" color="gray.500" mt={1}>
                    {Cinema.Genre}
                  </Text>
                  <HStack>
                    <Text fontSize="sm" mt={2} color="gray.500">
                      {Cinema.Year}
                    </Text>
                    <Text fontSize="sm" mt={2} color="gray.500">
                      {Cinema.Runtime}
                    </Text>
                    <Text fontSize="sm" mt={2} color="gray.500">
                      {Cinema.Rated}
                    </Text>
                  </HStack>
                  <HStack>
                    <Icon as={StarIcon} color="yellow.300" />
                    <Text fontSize="sm" color="gray.500">
                      {Cinema.imdbRating} ({Cinema.imdbVotes})
                    </Text>
                  </HStack>
                  <Box mt={3}>
                    <Tooltip
                      label={`See more information about ${Cinema.Title}`}
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
                        onClick={() => handleOpenModal(Cinema)}
                      />
                    </Tooltip>
                  </Box>
                </Box>
              </Flex>
            </Card>
          ))}
      </SimpleGrid>
      <MovModals
        isOpen={isModalOpen}
        selectedCinema={selectedCinema}
        onClose={() => setIsModalOpen(false)}
      />
    </Flex>
  );
};

export const MovieLoader = async () => {
  const res = await fetch("http://localhost:3000/Cinemas");
  return res.json();
};

export default Movies;
