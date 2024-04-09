import React from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Flex,
  HStack,
  Text,
  useToast,
} from "@chakra-ui/react";

import { AddIcon, ArrowRightIcon, Icon, StarIcon } from "@chakra-ui/icons";

import { PlayIcon } from "@heroicons/react/16/solid";
import { Movielist } from "../pages/Dashboard";

interface MovModalsProps {
  isOpen: boolean;
  selectedCinema: Movielist | null;
  onClose: () => void;
}

const MovModals: React.FC<MovModalsProps> = ({
  isOpen,
  selectedCinema,
  onClose,
}) => {
  const toast = useToast();
  if (!selectedCinema) return null;
  const showToast = () => {
    toast({
      title: "Added to Watchlist",
      duration: 3000,
      status: "success",
      position: "bottom",
    });
  };
  if (!selectedCinema) return null;

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          bg="black"
          color="white"
          pos="absolute"
          right="50px"
          top="50px"
        >
          <ModalHeader>
            <HStack>
              <img
                src={selectedCinema.Poster}
                alt={selectedCinema.Title}
                width="50px"
                height="50px"
              />
              <Flex direction="column">
                <Text fontSize="x-large" fontWeight="bold" color="white">
                  {selectedCinema.Title}
                  {""} {""} {""}
                  <Icon as={ArrowRightIcon} />
                </Text>

                <HStack>
                  <Text fontSize="sm" color="gray.500">
                    {selectedCinema.Year}
                  </Text>
                  <Text fontSize="sm" color="gray.500">
                    {selectedCinema.Runtime}
                  </Text>
                  <Text fontSize="sm" color="gray.500">
                    {selectedCinema.Rated}
                  </Text>
                </HStack>
                <HStack>
                  <Icon as={StarIcon} color="yellow.300" boxSize={3} />
                  <Text fontSize="sm" color="gray.500">
                    {selectedCinema.imdbRating}/10
                  </Text>
                </HStack>
              </Flex>
            </HStack>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction="column">
              <Text fontSize="sm">{selectedCinema.Plot}</Text>
              <HStack>
                <Text fontSize="sm">Staring</Text>
                <Text fontSize="sm" color="blue.300">
                  {selectedCinema.Actors}
                </Text>
              </HStack>
              <HStack>
                <Text fontSize="sm">Language </Text>
                <Text fontSize="sm" color="blue.300">
                  {selectedCinema.Language}{" "}
                </Text>
              </HStack>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Flex gap={2} justifyContent="flex-start">
              <Button
                pr={14}
                pl={14}
                bg="transparent"
                color="blue.400"
                leftIcon={<Icon as={PlayIcon} ml="35px" />}
                onClick={() => window.open(selectedCinema.Trailer, "_blank")}
              >
                Trailer
              </Button>
              <Button
                pr={12}
                pl={12}
                bg="transparent"
                color="blue.400"
                variant="ghost"
                leftIcon={<AddIcon />}
                onClick={showToast}
              >
                Watchlist
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MovModals;
