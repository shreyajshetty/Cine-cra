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

interface ExModalProps {
  isOpen: boolean;
  selectedShow: Movielist | null;
  onClose: () => void;
}

const ShowModals: React.FC<ExModalProps> = ({
  isOpen,
  selectedShow,
  onClose,
}) => {
  const toast = useToast();
  const showToast = () => {
    toast({
      title: "Added to Watchlist",
      duration: 3000,
      status: "success",
      position: "bottom",
    });
  };
  if (!selectedShow) return null;

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
                src={selectedShow.Poster}
                alt={selectedShow.Title}
                width="100px"
                height="100px"
              />
              <Flex direction="column">
                <Text fontSize="x-large" fontWeight="bold" color="white">
                  {selectedShow.Title}
                  {""} {""} {""}
                  <Icon as={ArrowRightIcon} />
                </Text>

                <HStack>
                  <Text fontSize="sm" color="gray.500">
                    {selectedShow.Year}
                  </Text>
                  <Text fontSize="sm" color="gray.500">
                    {selectedShow.Episodes} eps
                  </Text>
                  <Text fontSize="sm" color="gray.500">
                    {selectedShow.Rated}
                  </Text>
                </HStack>
                <HStack>
                  <Icon as={StarIcon} color="yellow.300" boxSize={3} />
                  <Text fontSize="sm" color="gray.500">
                    {selectedShow.imdbRating}/10
                  </Text>
                </HStack>
              </Flex>
            </HStack>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction="column">
              <Text fontSize="sm">{selectedShow.Plot}</Text>
              <HStack>
                <Text fontSize="sm">Staring</Text>
                <Text fontSize="sm" color="blue.300">
                  {selectedShow.Actors}
                </Text>
              </HStack>
              <HStack>
                <Text fontSize="sm">Language </Text>
                <Text fontSize="sm" color="blue.300">
                  {selectedShow.Language}{" "}
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
                onClick={() => window.open(selectedShow.Trailer, "_blank")}
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

export default ShowModals;
