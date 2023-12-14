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
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import "../style.css";
import { mediaQuery, useMediaQuery } from "../useMediaQuery";

export default function Comic() {
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
                    href="UturuTemp"
                    fontFamily="english"
                    _hover={{ color: "#e88700" }}
                  >
                    特設ページ - uturu
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>
                  <BreadcrumbLink href="#">comic</BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
              <Box height="1px" backgroundColor="gray.200" mt={1} />
            </Box>
          </Box>

          <Center>
            <Box width="100vw" backgroundColor="#f4f4ed" mt="100px">
              <Grid templateColumns="repeat(2, 1fr)" gap={5} m={8}>
                <GridItem colSpan={2}>
                  <Center>
                    <VStack>
                      <Text
                        fontSize="18px"
                        fontWeight="bold"
                        fontFamily="japanese2"
                        textColor="#55499b"
                      >
                        漫画「uturu」
                      </Text>
                      <Text
                        fontSize="14px"
                        fontWeight="bold"
                        fontFamily="japanese2"
                        textColor="#55499b"
                        mt={1}
                      >
                        作：内田晟
                      </Text>
                    </VStack>
                  </Center>
                  <Box
                    height="1px"
                    backgroundColor="gray.300"
                    width="100%"
                    mt={3}
                  />
                  <AspectRatio ratio={32 / 45}>
                    <Box
                      backgroundImage="url('/manga1.jpeg')"
                      backgroundRepeat="no-repeat"
                      backgroundSize="cover"
                      boxShadow="0px 0px 10px 0px rgba(0,0,0,0.2)"
                      mt={5}
                    />
                  </AspectRatio>
                  <AspectRatio ratio={32 / 45}>
                    <Box
                      backgroundImage="url('/manga2.jpeg')"
                      backgroundRepeat="no-repeat"
                      backgroundSize="cover"
                      boxShadow="0px 0px 10px 0px rgba(0,0,0,0.2)"
                      mt={5}
                    />
                  </AspectRatio>
                  <AspectRatio ratio={32 / 45}>
                    <Box
                      backgroundImage="url('/manga3.jpeg')"
                      backgroundRepeat="no-repeat"
                      backgroundSize="cover"
                      boxShadow="0px 0px 10px 0px rgba(0,0,0,0.2)"
                      mt={5}
                    />
                  </AspectRatio>
                  <AspectRatio ratio={32 / 45}>
                    <Box
                      backgroundImage="url('/manga4.jpeg')"
                      backgroundRepeat="no-repeat"
                      backgroundSize="cover"
                      boxShadow="0px 0px 10px 0px rgba(0,0,0,0.2)"
                      mt={5}
                    />
                  </AspectRatio>
                  <AspectRatio ratio={32 / 45}>
                    <Box
                      backgroundImage="url('/manga5.jpeg')"
                      backgroundRepeat="no-repeat"
                      backgroundSize="cover"
                      boxShadow="0px 0px 10px 0px rgba(0,0,0,0.2)"
                      mt={5}
                    />
                  </AspectRatio>
                  <AspectRatio ratio={32 / 45}>
                    <Box
                      backgroundImage="url('/manga6.jpeg')"
                      backgroundRepeat="no-repeat"
                      backgroundSize="cover"
                      boxShadow="0px 0px 10px 0px rgba(0,0,0,0.2)"
                      mt={5}
                    />
                  </AspectRatio>
                  <AspectRatio ratio={32 / 45}>
                    <Box
                      backgroundImage="url('/manga7.jpeg')"
                      backgroundRepeat="no-repeat"
                      backgroundSize="cover"
                      boxShadow="0px 0px 10px 0px rgba(0,0,0,0.2)"
                      mt={5}
                    />
                  </AspectRatio>
                  <AspectRatio ratio={32 / 45}>
                    <Box
                      backgroundImage="url('/manga8.jpeg')"
                      backgroundRepeat="no-repeat"
                      backgroundSize="cover"
                      boxShadow="0px 0px 10px 0px rgba(0,0,0,0.2)"
                      mt={5}
                    />
                  </AspectRatio>
                  <AspectRatio ratio={32 / 45}>
                    <Box
                      backgroundImage="url('/manga9.jpeg')"
                      backgroundRepeat="no-repeat"
                      backgroundSize="cover"
                      boxShadow="0px 0px 10px 0px rgba(0,0,0,0.2)"
                      mt={5}
                    />
                  </AspectRatio>
                  <AspectRatio ratio={32 / 45}>
                    <Box
                      backgroundImage="url('/manga10.jpeg')"
                      backgroundRepeat="no-repeat"
                      backgroundSize="cover"
                      boxShadow="0px 0px 10px 0px rgba(0,0,0,0.2)"
                      mt={5}
                    />
                  </AspectRatio>
                  <Center>
                    <Box mt={10}>
                      <iframe
                        allow="autoplay *; encrypted-media *;"
                        height="450"
                        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                        src="https://embed.music.apple.com/jp/album/uturu-single/1717705523"
                      ></iframe>
                    </Box>
                  </Center>
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
          background="linear-gradient(to bottom, #55499b 100%, #e8e8e8)"
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
                  href="UturuTemp"
                  fontFamily="english"
                  _hover={{ color: "#e88700" }}
                >
                  特設ページ - uturu
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="#">comic</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Box height="1px" backgroundColor="gray.200" width="90%" mt={3} />
          </Box>
          <Center>
            <Box width="70%" minH="70vh" backgroundColor="#f4f4ed" mt={"10vh"}>
              <Grid templateColumns="repeat(12, 1fr)" gap={20} m={10}>
                <GridItem colStart={3} colSpan={8}>
                  <Center>
                    <VStack>
                      <Text
                        fontSize="20px"
                        fontWeight="bold"
                        fontFamily="japanese2"
                        textColor="#55499b"
                      >
                        漫画「uturu」
                      </Text>
                      <Text
                        fontSize="16px"
                        fontWeight="bold"
                        fontFamily="japanese2"
                        textColor="#55499b"
                        mt={1}
                      >
                        作：内田晟
                      </Text>
                    </VStack>
                  </Center>
                  <Box
                    height="1px"
                    backgroundColor="gray.300"
                    width="100%"
                    mt={3}
                  />
                  <AspectRatio ratio={32 / 45}>
                    <Box
                      backgroundImage="url('/manga1.jpeg')"
                      backgroundRepeat="no-repeat"
                      backgroundSize="cover"
                      boxShadow="0px 0px 10px 0px rgba(0,0,0,0.2)"
                      mt={5}
                    />
                  </AspectRatio>
                  <AspectRatio ratio={32 / 45}>
                    <Box
                      backgroundImage="url('/manga2.jpeg')"
                      backgroundRepeat="no-repeat"
                      backgroundSize="cover"
                      boxShadow="0px 0px 10px 0px rgba(0,0,0,0.2)"
                      mt={5}
                    />
                  </AspectRatio>
                  <AspectRatio ratio={32 / 45}>
                    <Box
                      backgroundImage="url('/manga3.jpeg')"
                      backgroundRepeat="no-repeat"
                      backgroundSize="cover"
                      boxShadow="0px 0px 10px 0px rgba(0,0,0,0.2)"
                      mt={5}
                    />
                  </AspectRatio>
                  <AspectRatio ratio={32 / 45}>
                    <Box
                      backgroundImage="url('/manga4.jpeg')"
                      backgroundRepeat="no-repeat"
                      backgroundSize="cover"
                      boxShadow="0px 0px 10px 0px rgba(0,0,0,0.2)"
                      mt={5}
                    />
                  </AspectRatio>
                  <AspectRatio ratio={32 / 45}>
                    <Box
                      backgroundImage="url('/manga5.jpeg')"
                      backgroundRepeat="no-repeat"
                      backgroundSize="cover"
                      boxShadow="0px 0px 10px 0px rgba(0,0,0,0.2)"
                      mt={5}
                    />
                  </AspectRatio>
                  <AspectRatio ratio={32 / 45}>
                    <Box
                      backgroundImage="url('/manga6.jpeg')"
                      backgroundRepeat="no-repeat"
                      backgroundSize="cover"
                      boxShadow="0px 0px 10px 0px rgba(0,0,0,0.2)"
                      mt={5}
                    />
                  </AspectRatio>
                  <AspectRatio ratio={32 / 45}>
                    <Box
                      backgroundImage="url('/manga7.jpeg')"
                      backgroundRepeat="no-repeat"
                      backgroundSize="cover"
                      boxShadow="0px 0px 10px 0px rgba(0,0,0,0.2)"
                      mt={5}
                    />
                  </AspectRatio>
                  <AspectRatio ratio={32 / 45}>
                    <Box
                      backgroundImage="url('/manga8.jpeg')"
                      backgroundRepeat="no-repeat"
                      backgroundSize="cover"
                      boxShadow="0px 0px 10px 0px rgba(0,0,0,0.2)"
                      mt={5}
                    />
                  </AspectRatio>
                  <AspectRatio ratio={32 / 45}>
                    <Box
                      backgroundImage="url('/manga9.jpeg')"
                      backgroundRepeat="no-repeat"
                      backgroundSize="cover"
                      boxShadow="0px 0px 10px 0px rgba(0,0,0,0.2)"
                      mt={5}
                    />
                  </AspectRatio>
                  <AspectRatio ratio={32 / 45}>
                    <Box
                      backgroundImage="url('/manga10.jpeg')"
                      backgroundRepeat="no-repeat"
                      backgroundSize="cover"
                      boxShadow="0px 0px 10px 0px rgba(0,0,0,0.2)"
                      mt={5}
                    />
                  </AspectRatio>
                  <Center>
                    <Box mt={10}>
                      <iframe
                        allow="autoplay *; encrypted-media *;"
                        height="450"
                        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                        src="https://embed.music.apple.com/jp/album/uturu-single/1717705523"
                      ></iframe>
                    </Box>
                  </Center>
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
