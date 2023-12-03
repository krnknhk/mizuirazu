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
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import Footer from "../Footer";
import Menu from "../menu";
import SpMenu from "../spmenu";
import "../style.css";
import { mediaQuery, useMediaQuery } from "../useMediaQuery";

export default function Live() {
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
                <BreadcrumbItem isCurrentPage>
                  <BreadcrumbLink href="#">Live</BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
              <Box height="1px" backgroundColor="gray.200" mt={1} />
            </Box>
          </Box>

          <Box width="100vw" backgroundColor="#f4f4ed" mt="100px">
            <Grid templateColumns="repeat(2, 1fr)" gap={10} m={5}>
              <GridItem colSpan={2}>
                <AspectRatio ratio={80 / 53}>
                  <Box
                    backgroundImage="url('/20230617.jpeg')"
                    backgroundRepeat="no-repeat"
                    backgroundSize="cover"
                    boxShadow="0px 0px 10px 0px rgba(0,0,0,0.5)"
                  />
                </AspectRatio>
              </GridItem>

              <GridItem colSpan={2}>
                <Text fontSize="18px" fontWeight="bold" fontFamily="english">
                  Wordplay vol.137
                </Text>
                <Box mt={1}>
                  <Text fontSize="12px">奇妙礼太郎 / 水いらず</Text>
                </Box>
                <Box mt={5}>
                  <Text
                    fontSize="12px"
                    fontWeight="bold"
                    fontFamily="english"
                    as="u"
                  >
                    2023.06.17
                  </Text>
                </Box>
                <Box mt={2}>
                  <Text fontSize="10px" fontWeight="bold" fontFamily="japanese">
                    OPEN/START 17:00/17:30
                  </Text>
                </Box>
                <Box mt={2}>
                  <Text fontSize="10px" fontWeight="bold" fontFamily="japanese">
                    ADV ¥3,500+D
                  </Text>
                </Box>
                <Box mt={2} mb={2}>
                  <Text fontSize="10px" fontWeight="bold" fontFamily="japanese">
                    渋谷La.mama
                  </Text>
                </Box>
              </GridItem>
            </Grid>
          </Box>

          <Footer></Footer>
        </VStack>
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
                    <Text
                      fontSize="14px"
                      fontWeight="bold"
                      fontFamily="japanese"
                    >
                      OPEN/START 17:00/17:30
                    </Text>
                  </Box>
                  <Box mt={2}>
                    <Text
                      fontSize="14px"
                      fontWeight="bold"
                      fontFamily="japanese"
                    >
                      ADV ¥3,500+D
                    </Text>
                  </Box>
                  <Box mt={2}>
                    <Text
                      fontSize="14px"
                      fontWeight="bold"
                      fontFamily="japanese"
                    >
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
