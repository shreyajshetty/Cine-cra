import React, { useEffect } from "react";
import {
  AddIcon,
  ArrowRightIcon,
  Icon,
  InfoOutlineIcon,
  SmallAddIcon,
  StarIcon,
} from "@chakra-ui/icons";
import DashModals from "../components/DashModals";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  HStack,
  IconButton,
  SimpleGrid,
  Text,
  Tooltip,
  useToast,
} from "@chakra-ui/react";

import { PlayIcon } from "@heroicons/react/16/solid";

import { useLoaderData } from "react-router-dom";
import { useState } from "react";

export interface Movielist {
  Title: string;
  Year: string;
  Genre: string;
  Poster: string;
  imdbRating: string;
  Trailer: string;
  Rated: string;
  Runtime: string;
  Actors: string;
  Language: string;
  Plot: string;
  imdbVotes: string;
  Episodes: string;
  Type: string;
}
interface DBData {
  movies: Movielist[];
}
const Dashboard = () => {
  const Dmovies: Movielist[] = useLoaderData() as Movielist[];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDash, setSelectedDash] = useState<Movielist | null>(null);
  const [movies, setMovies] = useState<Movielist[]>([]);

  const handleOpenModal: (Dmovie: Movielist) => void = (Dmovie) => {
    setSelectedDash(Dmovie);
    setIsModalOpen(true);
  };
  const toast = useToast();
  const showToast = () => {
    toast({
      title: "Added to Watchlist",
      duration: 3000,
      status: "success",
      position: "bottom",
    });
  };
  return (
    <Flex direction="column" mt={7} ml={5}>
      <HStack>
        <Text ml="20px" mb="5px" fontSize="x-large" fontWeight="bold">
          Fan favorites
        </Text>
        <Icon as={ArrowRightIcon} />
      </HStack>
      <SimpleGrid spacing="10px" minChildWidth="250px" mt="2px" ml="5px">
        {Dmovies &&
          Dmovies.map((Dmovie, index) => (
            <Card key={index} w="250px" ml={5}>
              <CardHeader pos="relative">
                <Box position="absolute" top="3" left="3">
                  <SmallAddIcon color="white" />
                </Box>
                <img
                  src={Dmovie.Poster}
                  alt={Dmovie.Title}
                  width="250px"
                  height="350px"
                />
              </CardHeader>
              <CardBody p={1} ml="4">
                <Text
                  fontSize="lg"
                  fontWeight="bold"
                  _hover={{ textDecoration: "underline" }}
                >
                  {Dmovie.Title}
                </Text>
                <Text fontSize="sm" color="gray.500" mt={1}>
                  {Dmovie.Genre}
                </Text>
                <Text fontSize="sm" mt={2}>
                  {Dmovie.Year}
                </Text>
                <HStack>
                  <Icon as={StarIcon} color="yellow.300" />
                  <Text>{Dmovie.imdbRating}</Text>
                </HStack>
              </CardBody>
              <CardFooter mt={0}>
                <Flex
                  flexDir="column"
                  w="100%"
                  justifyContent="space-between"
                  gap={5}
                >
                  <Button
                    color="blue.500"
                    leftIcon={<AddIcon />}
                    onClick={showToast}
                  >
                    Watch List
                  </Button>
                  <HStack gap={10}>
                    <Button
                      variant="ghost"
                      leftIcon={<Icon as={PlayIcon} ml="35px" />}
                      onClick={() => window.open(Dmovie.Trailer, "_blank")}
                    >
                      Trailer
                    </Button>
                    <Tooltip label="More Information">
                      <IconButton
                        icon={<InfoOutlineIcon />}
                        bg="none"
                        onClick={() => handleOpenModal(Dmovie)}
                        aria-label="More Information"
                      />
                    </Tooltip>
                  </HStack>
                </Flex>
              </CardFooter>
            </Card>
          ))}
      </SimpleGrid>
      <DashModals
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
        selectedDash={selectedDash}
      />
    </Flex>
  );
};

export default Dashboard;

export const TaskLoader = async () => {
  const res = await fetch("http://localhost:3000/Dmovies");
  return res.json();
};
