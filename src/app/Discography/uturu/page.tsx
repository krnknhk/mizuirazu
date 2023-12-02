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
  HStack,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import "../../style.css";

export default function Discography() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Flex
      direction="column"
      background="linear-gradient(to bottom, #55499b 30%, #dce0f2 30%, #e8e8e8)"
      minH="100vh"
    >
      <VStack position="absolute" alignItems="flex-start" m={3} color="#e8e8e8">
        <Text
          fontSize="3xl"
          cursor="pointer"
          fontWeight="bold"
          fontFamily="japanese"
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
            <Text _hover={{ color: "#e88700" }}>Live</Text>
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
          <BreadcrumbItem>
            <BreadcrumbLink href="/Discography" _hover={{ color: "#e88700" }}>
              Discography
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">uturu</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Box height="1px" backgroundColor="gray.200" width="90%" mt={3} />
      </Box>
      <Center>
        <Box width="80%" minH="70vh" backgroundColor="#f4f4ed" mt={"10vh"}>
          <Grid templateColumns="repeat(12, 1fr)" gap={20} m={10}>
            <GridItem colSpan={6}>
              <AspectRatio ratio={1}>
                <Box
                  backgroundImage="url('/uturu.png')"
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                  boxShadow="0px 0px 10px 0px rgba(0,0,0,0.5)"
                />
              </AspectRatio>
            </GridItem>

            <GridItem colSpan={6}>
              <Text fontSize="30px" fontWeight="bold" fontFamily="english">
                uturu
              </Text>
              <Box mt={2}>
                <Text fontSize="16px" fontFamily="english">
                  Digital Single - 2023.12.6
                </Text>
              </Box>
              <Box mt={7}>
                <Text fontSize="16px" fontFamily="english" color={"#55499b"}>
                  TRACKLISTING
                </Text>
              </Box>
              <Box
                height="1px"
                backgroundColor="gray.300"
                width="100%"
                mt={3}
              />
              <Box mt={1} ml={1}>
                <HStack>
                  <Text fontSize="16px" fontWeight="bold" fontFamily="english2">
                    1　
                  </Text>
                  <Text fontSize="16px" fontWeight="500" fontFamily="english">
                    uturu
                  </Text>
                  <Spacer />
                  {/* <Link href="https://open.spotify.com/intl-ja/track/1jYHKwsWxnWQnhp9vgpv4p?si=237afaaa5a5a4964">
                    <Box color="#3bd300">
                      <FaSpotify size={20} />
                    </Box>
                  </Link> */}
                </HStack>
              </Box>
              <Box
                height="1px"
                backgroundColor="gray.300"
                width="100%"
                mt={1}
              />
              <Box mt={20}>
                <Text
                  fontSize="16px"
                  fontWeight="bold"
                  fontFamily="english"
                  as="u"
                >
                  Guest Musicians
                </Text>
              </Box>
              <Box mt={2}>
                <Text fontSize="14px" fontWeight="bold" fontFamily="japanese">
                  米山ミサ(浮/ vo)
                </Text>
              </Box>
              <Box mt={2}>
                <Text fontSize="14px" fontWeight="bold" fontFamily="japanese">
                  マーティ・ホロベック(bass solo)
                </Text>
              </Box>
              <Box mt={2}>
                <Text fontSize="14px" fontWeight="bold" fontFamily="japanese">
                  下田開登(ex picnic you、跡地/rap)
                </Text>
              </Box>
              <Box mt={5}>
                <Text
                  fontSize="16px"
                  fontWeight="bold"
                  fontFamily="english"
                  as="u"
                >
                  Recording
                </Text>
              </Box>
              <Box mt={2}>
                <Text fontSize="14px" fontWeight="bold" fontFamily="japanese">
                  米津裕二郎(Recording, Mix and Mastering)
                </Text>
              </Box>
              <Box mt={2}>
                <Text fontSize="14px" fontWeight="bold" fontFamily="japanese">
                  Recorded at Sound-m Studio(WAREHOUSE TRACKS)
                </Text>
              </Box>
              <Box mt={2}>
                <Text fontSize="14px" fontWeight="bold" fontFamily="japanese">
                  Mixed at STUDIO TORCH
                </Text>
              </Box>
            </GridItem>
          </Grid>
        </Box>
      </Center>
    </Flex>
  );
}
