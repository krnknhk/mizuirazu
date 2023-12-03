/* eslint no-irregular-whitespace: "off" */
"use client";

import Footer from "@/app/Footer";
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
import { FaSpotify } from "react-icons/fa";
import "../../style.css";

export default function Hotondokara() {
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
              <BreadcrumbLink href="#">
                <Text fontFamily="japanese">ほとんど、空</Text>
              </BreadcrumbLink>
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
                    backgroundImage="url('/hotonndokara_jacket.jpeg')"
                    backgroundRepeat="no-repeat"
                    backgroundSize="cover"
                    boxShadow="0px 0px 10px 0px rgba(0,0,0,0.5)"
                  />
                </AspectRatio>
              </GridItem>

              <GridItem colSpan={6}>
                <Text fontSize="30px" fontWeight="bold">
                  ほとんど、空
                </Text>
                <Box mt={2}>
                  <Text fontSize="16px" fontFamily="english">
                    Digital Album - 2020.12.19
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
                    <Text
                      fontSize="16px"
                      fontWeight="bold"
                      fontFamily="english2"
                    >
                      1　
                    </Text>
                    <Text fontSize="15px" fontWeight="500">
                      東京都板橋区西町2-50-4
                    </Text>
                    <Spacer />
                    <Link href="https://open.spotify.com/intl-ja/track/2oSFYZm9a2PrWLLpMBibPd?si=8e9453b39c474215">
                      <Box color="#3bd300">
                        <FaSpotify size={20} />
                      </Box>
                    </Link>
                  </HStack>
                </Box>
                <Box
                  height="1px"
                  backgroundColor="gray.300"
                  width="100%"
                  mt={1}
                />

                <Box mt={1} ml={1}>
                  <HStack>
                    <Text
                      fontSize="16px"
                      fontWeight="bold"
                      fontFamily="english2"
                    >
                      2　
                    </Text>
                    <Text fontSize="15px" fontWeight="500">
                      ほとんど、空
                    </Text>
                    <Spacer />
                    <Link href="https://open.spotify.com/intl-ja/track/1TDzrIoanNwO7yHsrZEqeF?si=00a4e340674647b4">
                      <Box color="#3bd300">
                        <FaSpotify size={20} />
                      </Box>
                    </Link>
                  </HStack>
                </Box>
                <Box
                  height="1px"
                  backgroundColor="gray.300"
                  width="100%"
                  mt={1}
                />

                <Box mt={1} ml={1}>
                  <HStack>
                    <Text
                      fontSize="16px"
                      fontWeight="bold"
                      fontFamily="english2"
                    >
                      3　
                    </Text>
                    <Text fontSize="15px" fontWeight="500">
                      沈沈沈
                    </Text>
                    <Spacer />
                    <Link href="https://open.spotify.com/intl-ja/track/5yXWW5WaAC2mTeM3HUc8SV?si=472882818ca447e3">
                      <Box color="#3bd300">
                        <FaSpotify size={20} />
                      </Box>
                    </Link>
                  </HStack>
                </Box>
                <Box
                  height="1px"
                  backgroundColor="gray.300"
                  width="100%"
                  mt={1}
                />

                <Box mt={1} ml={1}>
                  <HStack>
                    <Text
                      fontSize="16px"
                      fontWeight="bold"
                      fontFamily="english2"
                    >
                      4　
                    </Text>
                    <Text fontSize="15px" fontWeight="500">
                      水の重さ
                    </Text>
                    <Spacer />
                    <Link href="https://open.spotify.com/intl-ja/track/31PHK6kEltInHFw0nXR4yv?si=3d78e6198aa64613">
                      <Box color="#3bd300">
                        <FaSpotify size={20} />
                      </Box>
                    </Link>
                  </HStack>
                </Box>
                <Box
                  height="1px"
                  backgroundColor="gray.300"
                  width="100%"
                  mt={1}
                />

                <Box mt={1} ml={1}>
                  <HStack>
                    <Text
                      fontSize="16px"
                      fontWeight="bold"
                      fontFamily="english2"
                    >
                      5　
                    </Text>
                    <Text fontSize="15px" fontWeight="500">
                      午后の世界
                    </Text>
                    <Spacer />
                    <Link href="https://open.spotify.com/intl-ja/track/32SiuARrPfi3EtX00aQ0DN?si=d7cf953bc5314fb5">
                      <Box color="#3bd300">
                        <FaSpotify size={20} />
                      </Box>
                    </Link>
                  </HStack>
                </Box>
                <Box
                  height="1px"
                  backgroundColor="gray.300"
                  width="100%"
                  mt={1}
                />

                <Box mt={1} ml={1}>
                  <HStack>
                    <Text
                      fontSize="16px"
                      fontWeight="bold"
                      fontFamily="english2"
                    >
                      6　
                    </Text>
                    <Text fontSize="15px" fontWeight="500">
                      アンダースロー
                    </Text>
                    <Spacer />
                    <Link href="https://open.spotify.com/intl-ja/track/0SOOi5IDyunK1fYzo7TAVp?si=52b42fa3244946cf">
                      <Box color="#3bd300">
                        <FaSpotify size={20} />
                      </Box>
                    </Link>
                  </HStack>
                </Box>
                <Box
                  height="1px"
                  backgroundColor="gray.300"
                  width="100%"
                  mt={1}
                />

                <Box mt={1} ml={1}>
                  <HStack>
                    <Text
                      fontSize="16px"
                      fontWeight="bold"
                      fontFamily="english2"
                    >
                      7　
                    </Text>
                    <Text fontSize="15px" fontWeight="500">
                      光線
                    </Text>
                    <Spacer />
                    <Link href="https://open.spotify.com/intl-ja/track/2h23krBBpHFDqMpKGg9mw3?si=d8c185629e3240b2">
                      <Box color="#3bd300">
                        <FaSpotify size={20} />
                      </Box>
                    </Link>
                  </HStack>
                </Box>
                <Box
                  height="1px"
                  backgroundColor="gray.300"
                  width="100%"
                  mt={1}
                />

                <Box mt={1} ml={1}>
                  <HStack>
                    <Text
                      fontSize="16px"
                      fontWeight="bold"
                      fontFamily="english2"
                    >
                      8　
                    </Text>
                    <Text fontSize="15px" fontWeight="500">
                      あと
                    </Text>
                    <Spacer />
                    <Link href="https://open.spotify.com/intl-ja/track/2oR9wleoKGlwED2S3qne3v?si=65a44dc84faf43ed">
                      <Box color="#3bd300">
                        <FaSpotify size={20} />
                      </Box>
                    </Link>
                  </HStack>
                </Box>
                <Box
                  height="1px"
                  backgroundColor="gray.300"
                  width="100%"
                  mt={1}
                />
              </GridItem>
            </Grid>
          </Box>
        </Center>
      </Flex>
      <Footer></Footer>
    </>
  );
}
