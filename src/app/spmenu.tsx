"use client";

import { Box, IconButton, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function SpMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <IconButton
        icon={<GiHamburgerMenu size={30} />}
        aria-label="Open Menu"
        color={"#e88700"}
        position="fixed"
        right="30px"
        bottom="30px"
        zIndex={100}
        onClick={toggleMenu}
      />
      {isMenuOpen && (
        <Box
          position="fixed"
          top={0}
          left={0}
          width="100%"
          height="100%"
          bg="rgba(0, 0, 0, 0.5)"
          zIndex={1}
        >
          <VStack
            fontSize="2xl"
            fontWeight="bold"
            color="white"
            spacing={7}
            className="menu-item"
            textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)"
            fontFamily={"english"}
            height="100%"
            display="flex"
            justifyContent="center"
          >
            <Link href="/">
              <Text _hover={{ color: "#e88700" }}>Home</Text>
            </Link>
            <Link href="/About">
              <Text _hover={{ color: "#e88700" }}>About</Text>
            </Link>
            <Link href="/Discography">
              <Text _hover={{ color: "#e88700" }}>Discography</Text>
            </Link>
            <Link href="/Live">
              <Text _hover={{ color: "#e88700" }}>Live</Text>
            </Link>
            <Link href="https://www.youtube.com/@user-qi9nl3ru1l/videos">
              <Text _hover={{ color: "#e88700" }}>Movie</Text>
            </Link>
            <Link href="https://mizuirazuband.stores.jp/">
              <Text _hover={{ color: "#e88700" }}>Store</Text>
            </Link>
          </VStack>
        </Box>
      )}
    </>
  );
}
