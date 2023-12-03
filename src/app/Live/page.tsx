/* eslint no-irregular-whitespace: "off" */
"use client";

import {
  AspectRatio,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Center,
  Flex,
  Grid,
  GridItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import Footer from "../Footer";
import "../style.css";

export default function Live() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Flex
        direction="column"
        background="linear-gradient(to bottom, #55499b 30%, #dce0f2 30%, #e8e8e8)"
        minH="100vh"
      >
        <VStack
          position="absolute"
          alignItems="flex-start"
          m={3}
          color="#e8e8e8"
        >
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
              <Link href="/About">
                <Text _hover={{ color: "#e88700" }}>About</Text>
              </Link>
              <Link href="/Discography">
                <Text _hover={{ color: "#e88700" }}>Discography</Text>
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
        <Box ml={300} mt={55} color="#e8e8e8" fontFamily="english">
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" _hover={{ color: "#e88700" }}>
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">Live</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Box height="1px" backgroundColor="gray.200" width="90%" mt={3} />
        </Box>
        <Center>
          <Box
            width="70%"
            minH="70vh"
            backgroundColor="#f4f4ed"
            mt={"10vh"}
            mb={10}
          >
            <Grid templateColumns="repeat(12, 1fr)" gap={10} m={20}>
              <GridItem colSpan={12}>
                <AspectRatio ratio={3 / 2}>
                  <Box
                    backgroundImage="url('/20230617.jpeg')"
                    backgroundRepeat="no-repeat"
                    backgroundSize="cover"
                    boxShadow="0px 0px 10px 0px rgba(0,0,0,0.5)"
                  />
                </AspectRatio>
              </GridItem>

              <GridItem colSpan={6}>
                <Text fontSize="30px" fontWeight="bold" fontFamily="english">
                  Wordplay vol.137
                </Text>
                <Box mt={2}>
                  <Text fontSize="16px">奇妙礼太郎 / 水いらず</Text>
                </Box>
                <Box mt={10}>
                  <Text
                    fontSize="16px"
                    fontWeight="bold"
                    fontFamily="english"
                    as="u"
                  >
                    2023.06.17
                  </Text>
                </Box>
                <Box mt={2}>
                  <Text fontSize="14px" fontWeight="bold" fontFamily="japanese">
                    OPEN/START 17:00/17:30
                  </Text>
                </Box>
                <Box mt={2}>
                  <Text fontSize="14px" fontWeight="bold" fontFamily="japanese">
                    ADV ¥3,500+D
                  </Text>
                </Box>
                <Box mt={2}>
                  <Text fontSize="14px" fontWeight="bold" fontFamily="japanese">
                    渋谷La.mama
                  </Text>
                </Box>
              </GridItem>
            </Grid>
          </Box>
        </Center>
      </Flex>
      <Footer></Footer>
    </>
  );
}
