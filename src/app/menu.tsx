"use client";

import { Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <VStack position="absolute" alignItems="flex-start" m={3} color="#e8e8e8">
      <Text
        fontFamily="japanese3"
        fontSize="3xl"
        cursor="pointer"
        fontWeight="bold"
        textShadow="2px 2px 4px rgba(0, 0, 0, 1)"
        className="shake-on-hover"
        ml={68}
        mt={8}
        mb={3}
        onClick={toggleMenu}
        _hover={{ color: "#e88700" }}
      >
        水いらず
      </Text>

      {isMenuOpen && (
        <VStack
          width="10%"
          color="e8e8e8"
          bg="transparent"
          fontSize="2xl"
          fontWeight="bold"
          textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)"
          ml={115}
          spacing={7}
          zIndex={10}
          className="menu-item"
          fontFamily="english"
        >
          <Link href="/">
            <Text _hover={{ color: "#e88700" }}>Home</Text>
          </Link>
          <Link href="/UturuTemp">
            <Text
              fontFamily="japanese1"
              whiteSpace="nowrap"
              _hover={{ color: "#e88700" }}
            >
              特設ページ - uturu
            </Text>
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
      )}
    </VStack>
  );
}
