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
import "../../style.css";

export default function Monochrome() {
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
              <BreadcrumbLink href="#">
                <Text fontFamily="japanese">モノクローム</Text>
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
                    backgroundImage="url('/monochrome.jpeg')"
                    backgroundRepeat="no-repeat"
                    backgroundSize="cover"
                    boxShadow="0px 0px 10px 0px rgba(0,0,0,0.5)"
                  />
                </AspectRatio>
              </GridItem>

              <GridItem colSpan={6}>
                <Text fontSize="30px" fontWeight="bold">
                  モノクローム
                </Text>
                <Box mt={2}>
                  <Text fontSize="16px" fontFamily="english">
                    Single - 2018.02.26
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
                      苗床
                    </Text>
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
                      モノクローム
                    </Text>
                    <Spacer />
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
                      ビー玉の記憶
                    </Text>
                    <Spacer />
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
