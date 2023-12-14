/* eslint no-irregular-whitespace: "off" */
"use client";

import Footer from "@/app/Footer";
import Menu from "@/app/menu";
import SpMenu from "@/app/spmenu";
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
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import "../../style.css";
import { mediaQuery, useMediaQuery } from "../../useMediaQuery";

export default function Uturu() {
  const isSp = useMediaQuery(mediaQuery.sp);
  const isPc = useMediaQuery(mediaQuery.pc);

  if (isSp) {
    return (
      <>
        <SpMenu />
        <VStack>
          <Box
            backgroundColor={"#55499b"}
            width="100vw"
            height="100px"
            position="absolute"
          >
            <Box
              ml={5}
              color="#e8e8e8"
              fontFamily="english"
              position="relative"
              top={5}
              left={1}
            >
              <Breadcrumb>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/" _hover={{ color: "#e88700" }}>
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href="/Discography"
                    _hover={{ color: "#e88700" }}
                  >
                    Discography
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>
                  <BreadcrumbLink href="#">uturu</BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
              <Box height="1px" backgroundColor="gray.200" mt={1} />
            </Box>
          </Box>

          <Center>
            <Box width="100vw" backgroundColor="#f4f4ed" mt="100px">
              <Grid templateColumns="repeat(2, 1fr)" gap={5} m={8}>
                <GridItem colSpan={2}>
                  <AspectRatio ratio={1}>
                    <Box
                      backgroundImage="url('/uturu.jpg')"
                      backgroundRepeat="no-repeat"
                      backgroundSize="cover"
                      boxShadow="0px 0px 10px 0px rgba(0,0,0,0.5)"
                    />
                  </AspectRatio>
                </GridItem>

                <GridItem colSpan={2}>
                  <Text fontSize="30px" fontWeight="bold" fontFamily="english">
                    uturu
                  </Text>
                  <Box mt={2}>
                    <Text fontSize="16px" fontFamily="english">
                      Digital Single - 2023.12.6
                    </Text>
                  </Box>
                  <Box mt={7}>
                    <Text
                      fontSize="16px"
                      fontFamily="english"
                      color={"#55499b"}
                    >
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
                      <Text
                        fontSize="16px"
                        fontWeight="500"
                        fontFamily="english"
                      >
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
                  <Box mt={10}>
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
                    <Text
                      fontSize="14px"
                      fontWeight="bold"
                      fontFamily="japanese"
                    >
                      米山ミサ(浮/ vo)
                    </Text>
                  </Box>
                  <Box mt={2}>
                    <Text
                      fontSize="14px"
                      fontWeight="bold"
                      fontFamily="japanese"
                    >
                      マーティ・ホロベック(bass solo)
                    </Text>
                  </Box>
                  <Box mt={2}>
                    <Text
                      fontSize="14px"
                      fontWeight="bold"
                      fontFamily="japanese"
                    >
                      下田開登(PICNIC YOU/rap)
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
                    <Text
                      fontSize="14px"
                      fontWeight="bold"
                      fontFamily="japanese"
                    >
                      米津裕二郎(Recording, Mix and Mastering)
                    </Text>
                  </Box>
                  <Box mt={2}>
                    <Text
                      fontSize="14px"
                      fontWeight="bold"
                      fontFamily="japanese"
                    >
                      Recorded at Sound-m Studio(WAREHOUSE TRACKS)
                    </Text>
                  </Box>
                  <Box mt={2}>
                    <Text
                      fontSize="14px"
                      fontWeight="bold"
                      fontFamily="japanese"
                    >
                      Mixed at STUDIO TORCH
                    </Text>
                  </Box>
                </GridItem>
              </Grid>
            </Box>
          </Center>
        </VStack>
        <Footer></Footer>
      </>
    );
  } else if (isPc) {
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
                <BreadcrumbLink
                  href="/Discography"
                  _hover={{ color: "#e88700" }}
                >
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
                      backgroundImage="url('/uturu.jpg')"
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
                    <Text
                      fontSize="16px"
                      fontFamily="english"
                      color={"#55499b"}
                    >
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
                      <Text
                        fontSize="16px"
                        fontWeight="500"
                        fontFamily="english"
                      >
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
                    <Text
                      fontSize="14px"
                      fontWeight="bold"
                      fontFamily="japanese"
                    >
                      米山ミサ(浮/ vo)
                    </Text>
                  </Box>
                  <Box mt={2}>
                    <Text
                      fontSize="14px"
                      fontWeight="bold"
                      fontFamily="japanese"
                    >
                      マーティ・ホロベック(bass solo)
                    </Text>
                  </Box>
                  <Box mt={2}>
                    <Text
                      fontSize="14px"
                      fontWeight="bold"
                      fontFamily="japanese"
                    >
                      下田開登(PICNIC YOU/rap)
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
                    <Text
                      fontSize="14px"
                      fontWeight="bold"
                      fontFamily="japanese"
                    >
                      米津裕二郎(Recording, Mix and Mastering)
                    </Text>
                  </Box>
                  <Box mt={2}>
                    <Text
                      fontSize="14px"
                      fontWeight="bold"
                      fontFamily="japanese"
                    >
                      Recorded at Sound-m Studio(WAREHOUSE TRACKS)
                    </Text>
                  </Box>
                  <Box mt={2}>
                    <Text
                      fontSize="14px"
                      fontWeight="bold"
                      fontFamily="japanese"
                    >
                      Mixed at STUDIO TORCH
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
  } else {
    return (
      <Box
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems={"center"}
        backgroundColor={"gray.200"}
      >
        <VStack>
          <Text>Loading...</Text>
          <Spinner size="xl" />
        </VStack>
      </Box>
    );
  }
}
