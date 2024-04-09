import React from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Flex, IconButton } from "@chakra-ui/react";
import { FilmIcon, HomeIcon, TvIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import NavItem from "./NavItem";

const Sidebar = () => {
  const [navSize, changeNavSize] = useState("large");
  return (
    <Flex
      pos="sticky"
      left="5"
      h="fixed"
      marginTop="2.5vh"
      boxShadow="0 4px 12px 0 rgba(0,0,0, 0.05)"
      borderRadius={navSize == "small" ? "15px" : "30px"}
      w={navSize == "small" ? "75px" : "200px"}
      flexDir="column"
      justifyContent="space-between"
      bg="blackAlpha.200"
    >
      <Flex p="5%" flexDir="column" alignItems="flex-start" as="nav">
        <IconButton
          background="none"
          mt={5}
          aria-label="More Information"
          ml={3}
          _hover={{ background: "purple.400" }}
          icon={<HamburgerIcon />}
          onClick={() => {
            if (navSize == "small") changeNavSize("large");
            else changeNavSize("small");
          }}
        />
        <NavItem
          navSize={navSize}
          icon={HomeIcon}
          title="Dashboard"
          to=""
          active={true}
        />
        <NavItem
          navSize={navSize}
          icon={FilmIcon}
          title="Movies"
          to="movies"
          active={false}
        />
        <NavItem
          navSize={navSize}
          icon={TvIcon}
          title="TV Shows"
          to="shows"
          active={false}
        />
      </Flex>
    </Flex>
  );
};

export default Sidebar;
