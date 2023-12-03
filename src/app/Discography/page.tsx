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
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import "../style.css";

export default function Discography() {
  const router = useRouter();
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
            <Link href="/Live">
              <Text _hover={{ color: "#e88700" }}>Live</Text>
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
                backgroundImage="url('/uturu.png')"
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
                backgroundImage="url('/20210828_28.jpg')"
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
                onClick={() => router.push("/Discography/hotondokara_single")}
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
  );
}
