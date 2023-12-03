/* eslint no-irregular-whitespace: "off" */
"use client";

import Footer from "@/app/Footer";
import Menu from "@/app/menu";
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
} from "@chakra-ui/react";
import Link from "next/link";
import { FaSpotify } from "react-icons/fa";
import "../../style.css";

export default function Sumu() {
  return (
    <>
      <Flex
        direction="column"
        background="linear-gradient(to bottom, #55499b 30%, #dce0f2 30%, #e8e8e8)"
        minH="100vh"
      >
        <Menu></Menu>
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
              <BreadcrumbLink href="#">sumu</BreadcrumbLink>
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
                    backgroundImage="url('/su-mu_single.png')"
                    backgroundRepeat="no-repeat"
                    backgroundSize="cover"
                    boxShadow="0px 0px 10px 0px rgba(0,0,0,0.5)"
                  />
                </AspectRatio>
              </GridItem>

              <GridItem colSpan={6}>
                <Text fontSize="30px" fontWeight="bold" fontFamily="english">
                  sumu
                </Text>
                <Box mt={2}>
                  <Text fontSize="16px" fontFamily="english">
                    7inch Vinyl / Digital Single - 2021.10.12
                  </Text>
                </Box>
                <Box mt={7}>
                  <Text fontSize="16px" fontFamily="english" color={"#55499b"}>
                    TRACKLISTING
                  </Text>
                </Box>
                <Box mt={5}>
                  <Text fontSize="16px" fontFamily="english">
                    SIDE A
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
                    <Text fontSize="16px" fontWeight="500" fontFamily="english">
                      su-mu
                    </Text>
                    <Spacer />
                    <Link href="https://open.spotify.com/intl-ja/track/1XRzXMCpAsXJ72wVu91hfP?si=6139392f6b2b4837">
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
                <Box mt={3}>
                  <Text fontSize="16px" fontFamily="english">
                    SIDE B
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
                    <Text fontSize="16px" fontWeight="500" fontFamily="english">
                      su-mu -Don’t Stop- Keiichi Sokabe Remix
                    </Text>
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
