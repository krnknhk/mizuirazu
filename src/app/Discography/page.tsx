"use client";

import {
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
import { useRouter } from "next/navigation";
import Footer from "../Footer";
import Menu from "../menu";
import SpMenu from "../spmenu";
import "../style.css";
import { mediaQuery, useMediaQuery } from "../useMediaQuery";

export default function Discography() {
  const isSp = useMediaQuery(mediaQuery.sp);
  const isPc = useMediaQuery(mediaQuery.pc);
  const router = useRouter();

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
                  <BreadcrumbLink href="#">Discography</BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
              <Box height="1px" backgroundColor="gray.200" mt={1} />
            </Box>
          </Box>

          <Box width="100vw" backgroundColor="#f4f4ed" mt="100px">
            <Center>
              <Grid
                templateColumns="repeat(2, 1fr)"
                gap={30}
                width="70%"
                cursor="pointer"
                my={5}
              >
                <GridItem
                  colSpan={2}
                  backgroundImage="url('/uturu.jpg')"
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                  boxShadow="0px 0px 10px 0px rgba(0,0,0,0.5)"
                  className="shake-on-hover"
                  aspectRatio={1 / 1}
                  onClick={() => router.push("/Discography/uturu")}
                ></GridItem>

                <GridItem
                  colSpan={2}
                  backgroundImage="url('/bakeru.png')"
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                  boxShadow="0px 0px 10px 0px rgba(0,0,0,0.5)"
                  className="shake-on-hover"
                  aspectRatio={1 / 1}
                  onClick={() => router.push("/Discography/bakeru")}
                ></GridItem>

                <GridItem
                  colSpan={2}
                  backgroundImage="url('/su-mu_single.png')"
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                  boxShadow="0px 0px 10px 0px rgba(0,0,0,0.5)"
                  className="shake-on-hover"
                  aspectRatio={1 / 1}
                  onClick={() => router.push("/Discography/sumu")}
                ></GridItem>

                <GridItem
                  colSpan={2}
                  backgroundImage="url('/hotonndokara_jacket.jpeg')"
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                  boxShadow="0px 0px 10px 0px rgba(0,0,0,0.5)"
                  className="shake-on-hover"
                  aspectRatio={1 / 1}
                  onClick={() => router.push("/Discography/hotondokara")}
                ></GridItem>

                <GridItem
                  colSpan={2}
                  backgroundImage="url('/almostEmpty_single.png')"
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                  boxShadow="0px 0px 10px 0px rgba(0,0,0,0.5)"
                  className="shake-on-hover"
                  aspectRatio={1 / 1}
                  onClick={() => router.push("/Discography/hotondokara_single")}
                ></GridItem>

                <GridItem
                  colSpan={2}
                  backgroundImage="url('/5dgt_B3I-1.jpeg')"
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                  boxShadow="0px 0px 10px 0px rgba(0,0,0,0.5)"
                  className="shake-on-hover"
                  aspectRatio={1 / 1}
                  onClick={() => router.push("/Discography/shinshinshin")}
                ></GridItem>

                <GridItem
                  colSpan={2}
                  backgroundImage="url('afternoon-night.jpeg')"
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                  boxShadow="0px 0px 10px 0px rgba(0,0,0,0.5)"
                  className="shake-on-hover"
                  aspectRatio={1 / 1}
                  onClick={() => router.push("/Discography/hiruyoru")}
                ></GridItem>

                <GridItem
                  colSpan={2}
                  backgroundImage="url('/monochrome.jpeg')"
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                  boxShadow="0px 0px 10px 0px rgba(0,0,0,0.5)"
                  className="shake-on-hover"
                  aspectRatio={1 / 1}
                  onClick={() => router.push("/Discography/monochrome")}
                ></GridItem>
              </Grid>
            </Center>
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
          minH="95vh"
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
                <BreadcrumbLink href="#">Discography</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Box height="1px" backgroundColor="gray.200" width="90%" mt={3} />
          </Box>
          <Center>
            <Box width="70%" height="70%" backgroundColor="#f4f4ed" mt={"10vh"}>
              <Center>
                <Grid
                  templateRows="repeat(2, 1fr)"
                  templateColumns="repeat(8, 1fr)"
                  gap={30}
                  my={10}
                  width="93%"
                  height="90%"
                  cursor="pointer"
                >
                  <GridItem
                    rowSpan={1}
                    colSpan={2}
                    backgroundImage="url('/uturu.jpg')"
                    backgroundRepeat="no-repeat"
                    backgroundSize="cover"
                    boxShadow="0px 0px 10px 0px rgba(0,0,0,0.5)"
                    className="shake-on-hover"
                    aspectRatio={1 / 1}
                    onClick={() => router.push("/Discography/uturu")}
                  ></GridItem>

                  <GridItem
                    rowSpan={1}
                    colSpan={2}
                    backgroundImage="url('/bakeru.png')"
                    backgroundRepeat="no-repeat"
                    backgroundSize="cover"
                    boxShadow="0px 0px 10px 0px rgba(0,0,0,0.5)"
                    className="shake-on-hover"
                    aspectRatio={1 / 1}
                    onClick={() => router.push("/Discography/bakeru")}
                  ></GridItem>

                  <GridItem
                    rowSpan={1}
                    colSpan={2}
                    backgroundImage="url('/su-mu_single.png')"
                    backgroundRepeat="no-repeat"
                    backgroundSize="cover"
                    boxShadow="0px 0px 10px 0px rgba(0,0,0,0.5)"
                    className="shake-on-hover"
                    aspectRatio={1 / 1}
                    onClick={() => router.push("/Discography/sumu")}
                  ></GridItem>

                  <GridItem
                    rowSpan={1}
                    colSpan={2}
                    backgroundImage="url('/hotonndokara_jacket.jpeg')"
                    backgroundRepeat="no-repeat"
                    backgroundSize="cover"
                    boxShadow="0px 0px 10px 0px rgba(0,0,0,0.5)"
                    className="shake-on-hover"
                    aspectRatio={1 / 1}
                    onClick={() => router.push("/Discography/hotondokara")}
                  ></GridItem>
                  <GridItem
                    rowSpan={1}
                    colSpan={2}
                    backgroundImage="url('/almostEmpty_single.png')"
                    backgroundRepeat="no-repeat"
                    backgroundSize="cover"
                    boxShadow="0px 0px 10px 0px rgba(0,0,0,0.5)"
                    className="shake-on-hover"
                    aspectRatio={1 / 1}
                    onClick={() =>
                      router.push("/Discography/hotondokara_single")
                    }
                  ></GridItem>

                  <GridItem
                    rowSpan={1}
                    colSpan={2}
                    backgroundImage="url('/5dgt_B3I-1.jpeg')"
                    backgroundRepeat="no-repeat"
                    backgroundSize="cover"
                    boxShadow="0px 0px 10px 0px rgba(0,0,0,0.5)"
                    className="shake-on-hover"
                    aspectRatio={1 / 1}
                    onClick={() => router.push("/Discography/shinshinshin")}
                  ></GridItem>

                  <GridItem
                    rowSpan={1}
                    colSpan={2}
                    backgroundImage="url('afternoon-night.jpeg')"
                    backgroundRepeat="no-repeat"
                    backgroundSize="cover"
                    boxShadow="0px 0px 10px 0px rgba(0,0,0,0.5)"
                    className="shake-on-hover"
                    aspectRatio={1 / 1}
                    onClick={() => router.push("/Discography/hiruyoru")}
                  ></GridItem>

                  <GridItem
                    rowSpan={1}
                    colSpan={2}
                    backgroundImage="url('/monochrome.jpeg')"
                    backgroundRepeat="no-repeat"
                    backgroundSize="cover"
                    boxShadow="0px 0px 10px 0px rgba(0,0,0,0.5)"
                    className="shake-on-hover"
                    aspectRatio={1 / 1}
                    onClick={() => router.push("/Discography/monochrome")}
                  ></GridItem>
                </Grid>
              </Center>
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
