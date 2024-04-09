import React from "react";
import {
  Button,
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
  IconButton,
  Modal,
} from "@chakra-ui/react";

import { AddIcon, ArrowRightIcon, Icon, StarIcon } from "@chakra-ui/icons";

import { HandThumbUpIcon } from "@heroicons/react/16/solid";
import { Movielist } from "../pages/Dashboard";

interface DashModalsProps {
  isOpen: boolean;
  selectedDash: Movielist | null;
  onClose: () => void;
}

const DashModals: React.FC<DashModalsProps> = ({
  isOpen,
  selectedDash,
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
  if (!selectedDash) return null;

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="black" color="white">
          <ModalHeader>
            <HStack>
              <img
                src={selectedDash.Poster}
                alt={selectedDash.Title}
                width="50px"
                height="150px"
              />
              <Flex direction="column">
                <Text fontSize="x-large" fontWeight="bold" color="white">
                  {selectedDash.Title}
                  {""} {""} {""}
                  <Icon as={ArrowRightIcon} />
                </Text>

                <HStack>
                  <Text fontSize="sm" color="gray.500">
                    {selectedDash.Year}
                  </Text>
                  <Text fontSize="sm" color="gray.500">
                    {selectedDash.Runtime}
                  </Text>
                  <Text fontSize="sm" color="gray.500">
                    {selectedDash.Rated}
                  </Text>
                </HStack>
                <Text fontSize="sm" color="gray.500">
                  {selectedDash.Genre}
                </Text>
                <HStack>
                  <Icon as={StarIcon} color="yellow.300" boxSize={3} />
                  <Text fontSize="sm" color="gray.500">
                    {selectedDash.imdbRating}/10
                  </Text>
                </HStack>
              </Flex>
            </HStack>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction="column">
              <Text fontSize="sm">{selectedDash.Plot}</Text>
              <HStack>
                <Text fontSize="sm">Staring</Text>
                <Text fontSize="sm" color="blue.300">
                  {selectedDash.Actors}
                </Text>
              </HStack>
              <HStack>
                <Text fontSize="sm">Language </Text>
                <Text fontSize="sm" color="blue.300">
                  {selectedDash.Language}{" "}
                </Text>
              </HStack>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Flex gap={2} direction="column" alignItems="flex-start">
              <HStack ml="0px" pl="0px">
                <Button
                  pr={12}
                  pl={12}
                  bg="transparent"
                  color="blue.400"
                  variant="ghost"
                  leftIcon={<AddIcon />}
                  onClick={showToast}
                  float="left"
                  ml={0}
                >
                  Watchlist
                </Button>
                <IconButton
                  icon={<HandThumbUpIcon />}
                  size="sm"
                  bg="none"
                  _hover={{ color: "blue" }}
                  mb={2}
                  aria-label="thumbs up"
                />
              </HStack>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DashModals;
