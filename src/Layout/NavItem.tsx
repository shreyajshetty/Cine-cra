import React from "react";
import { Flex, Icon, Link, Menu, MenuButton, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function NavItem({
  navSize,
  title,
  icon,
  active,
  to,
}: {
  navSize: string;
  title: string;
  icon: any;
  active: boolean;
  to: string;
}) {
  return (
    <Flex
      mt={30}
      flexDir="column"
      w="100%"
      alignItems={navSize == "small" ? "center" : "flex-start"}
    >
      <Menu placement="right">
        <Link
          p={3}
          borderRadius={8}
          _hover={{ textDecor: "none", bg: "purple.400" }}
        >
          <NavLink to={to}>
            <MenuButton>
              <Flex>
                <Icon
                  as={icon}
                  fontSize="xl"
                  color={active ? "purple.400" : "gray.500"}
                />
                <Text ml={5} display={navSize == "small" ? "none" : "flex"}>
                  {title}
                </Text>
              </Flex>
            </MenuButton>
          </NavLink>
        </Link>
      </Menu>
    </Flex>
  );
}
