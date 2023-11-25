"use client";

import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Grid,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import "../style.css";

export default function Discography() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Flex
      direction="column"
      background="linear-gradient(to bottom, #582fb7 30%, #dce0f2 30%, #e8e8e8)"
      overflow="hidden"
      maxH={"100%"}
    >
      <VStack position="absolute" alignItems="flex-start" m={4}>
        <Text
          fontSize="4xl"
          fontWeight="extrabold"
          color="#e8e8e8"
          cursor="pointer"
          ml={68}
          mt={10}
          fontFamily="Zen Kaku Gothic New, sans-serif"
          onClick={toggleMenu}
          textShadow="2px 2px 4px rgba(0, 0, 0, 1)"
        >
          水いらず
        </Text>

        {isMenuOpen && (
          <VStack
            bg="transparent"
            width="10%"
            ml={125}
            spacing={2}
            zIndex={10}
            className="menu-item"
          >
            <Link href="/">
              <Text
                p={4}
                fontSize="3xl"
                fontWeight="bold"
                color="e8e8e8"
                _hover={{ color: "#e5a734" }}
                textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)"
              >
                Home
              </Text>
            </Link>
            <Link href="/About">
              <Text
                p={4}
                fontSize="3xl"
                fontWeight="bold"
                color="white"
                _hover={{ color: "#e5a734" }}
                textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)"
              >
                About
              </Text>
            </Link>
            <Text
              p={4}
              fontSize="3xl"
              fontWeight="bold"
              color="e8e8e8"
              _hover={{ color: "#e5a734" }}
              textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)"
            >
              Live
            </Text>
            <Link href="https://www.youtube.com/@user-qi9nl3ru1l/videos">
              <Text
                p={4}
                fontSize="3xl"
                fontWeight="bold"
                color="e8e8e8"
                _hover={{ color: "#e5a734" }}
                textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)"
              >
                Videos
              </Text>
            </Link>
            <Link href="https://mizuirazuband.stores.jp/">
              <Text
                p={4}
                fontSize="3xl"
                fontWeight="bold"
                color="e8e8e8"
                _hover={{ color: "#e5a734" }}
                textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)"
              >
                Store
              </Text>
            </Link>
          </VStack>
        )}
      </VStack>
      <Box ml={300} mt={55}>
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">Discography</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Box height="1px" backgroundColor="gray.200" width="90%" mt={5} />
      </Box>
      <VStack mt={150}>
        <Grid
          templateColumns="repeat(8, 1fr)"
          gap={10}
          p={10}
          width="80%"
          height="40vh"
          justifyContent="center"
          cursor="pointer"
        >
          <Box
            gridColumn="1 / span 2"
            gridRow="1 / span 1"
            backgroundImage="url('/uturu.png')"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            boxShadow="0px 0px 10px 0px rgba(0,0,0,0.5)"
          ></Box>

          <Box
            gridColumn="3 / span 2"
            gridRow="1 / span 1"
            backgroundImage="url('/20210828_28.jpg')"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            boxShadow="0px 0px 10px 0px rgba(0,0,0,0.5)"
          ></Box>

          <Box
            gridColumn="5 / span 2"
            gridRow="1 / span 1"
            backgroundImage="url('/su-mu_single.png')"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            boxShadow="0px 0px 10px 0px rgba(0,0,0,0.5)"
          ></Box>
          <Box
            gridColumn="7 / span 2"
            gridRow="1 / span 1"
            backgroundImage="url('/hotonndokara_jacket.jpeg')"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            boxShadow="0px 0px 10px 0px rgba(0,0,0,0.5)"
          ></Box>
        </Grid>
        <Grid
          templateColumns="repeat(8, 1fr)"
          gap={10}
          p={10}
          width="80%"
          height="40vh"
          justifyContent="center"
          cursor="pointer"
        >
          <Box
            gridColumn="1 / span 2"
            gridRow="1 / span 1"
            backgroundImage="url('/almostEmpty_single.png')"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            boxShadow="0px 0px 10px 0px rgba(0,0,0,0.5)"
          ></Box>

          <Box
            gridColumn="3 / span 2"
            gridRow="1 / span 1"
            backgroundImage="url('/5dgt_B3I-1.jpeg')"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            boxShadow="0px 0px 10px 0px rgba(0,0,0,0.5)"
          ></Box>

          <Box
            gridColumn="5 / span 2"
            gridRow="1 / span 1"
            backgroundImage="url('afternoon-night.jpeg')"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            boxShadow="0px 0px 10px 0px rgba(0,0,0,0.5)"
          ></Box>

          <Box
            gridColumn="7 / span 2"
            gridRow="1 / span 1"
            backgroundImage="url('/monochrome.jpeg')"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            boxShadow="0px 0px 10px 0px rgba(0,0,0,0.5)"
          ></Box>
        </Grid>
      </VStack>
    </Flex>
  );
}
