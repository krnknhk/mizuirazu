"use client";

import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Center,
  Flex,
  Grid,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import "../style.css";

export default function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Flex
      direction="column"
      background="linear-gradient(to bottom, #582fb7 30%, #dce0f2 30%, #e8e8e8)"
      minH="100vh"
      minW="100vw"
    >
      <VStack position="absolute" alignItems="flex-start" m={3}>
        <Text
          fontSize="4xl"
          color="#e8e8e8"
          cursor="pointer"
          fontFamily="Zen Kaku Gothic New, sans-serif"
          textShadow="2px 2px 4px rgba(0, 0, 0, 1)"
          className="shake-on-hover"
          ml={68}
          mt={10}
          onClick={toggleMenu}
        >
          水いらず
        </Text>

        {isMenuOpen && (
          <VStack
            bg="transparent"
            width="10%"
            ml={125}
            spacing={2}
            zIndex={10}
            className="menu-item"
          >
            <Link href="/">
              <Text
                p={4}
                fontSize="3xl"
                fontWeight="bold"
                color="e8e8e8"
                textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)"
                _hover={{ color: "#e5a734" }}
              >
                Home
              </Text>
            </Link>
            <Link href="/Discography">
              <Text
                p={4}
                fontSize="3xl"
                fontWeight="bold"
                color="e8e8e8"
                textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)"
                _hover={{ color: "#e5a734" }}
              >
                Discography
              </Text>
            </Link>
            <Text
              p={4}
              fontSize="3xl"
              fontWeight="bold"
              color="e8e8e8"
              textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)"
              _hover={{ color: "#e5a734" }}
            >
              Live
            </Text>
            <Link href="https://www.youtube.com/@user-qi9nl3ru1l/videos">
              <Text
                p={4}
                fontSize="3xl"
                fontWeight="bold"
                color="e8e8e8"
                textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)"
                _hover={{ color: "#e5a734" }}
              >
                Movie
              </Text>
            </Link>
            <Link href="https://mizuirazuband.stores.jp/">
              <Text
                p={4}
                fontSize="3xl"
                fontWeight="bold"
                color="e8e8e8"
                textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)"
                _hover={{ color: "#e5a734" }}
              >
                Store
              </Text>
            </Link>
          </VStack>
        )}
      </VStack>
      <Box ml={300} mt={55}>
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">About</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Box height="1px" backgroundColor="gray.200" width="90%" mt={5} />
      </Box>
      <Flex
        width="100%"
        height="50vh"
        alignItems="flex-end"
        justifyContent="space-around"
        px={10}
        mb={35}
      >
        <Box
          width="55%"
          height="75%"
          backgroundImage="url('/20210828_6.jpg')"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          position="relative"
          boxShadow="0px 0px 10px 0px rgba(0,0,0,0.5)"
        ></Box>

        <Box
          width="40%"
          height="40%"
          backgroundColor="#e3e3ed"
          p={8}
          overflowY="auto"
          boxShadow="0px 0px 10px 0px rgba(0,0,0,0.2)"
        >
          <Text fontSize="md" color="black" fontWeight="bold">
            2016年に結成された東京を拠点に活動する4人組インディ・ロック・バンド。アジアの民族音楽をもとに、スタンドアローン・コンプレックス(孤立した個人でありながらも、全体として集団的な行動を取る)なスタンスを心がけながら、独自の音楽を生み出す。メンバーは楽器よりもPCを愛用している。バンドは直接民主制を採用し、メンバー同士の仲は非常に良く、喧嘩は皆無。家が近いため、タクシー代が割り勘できる。思想や概念から作曲が始まり、家で楽曲制作を行なっている。
          </Text>
          <Box mt={7}>
            <Text fontSize="md" color="black" as="i">
              井上真 (vo,gt)、小宮山節己 (dr)、桜井晴紀 (key)、辻本秀太郎 (ba)
            </Text>
          </Box>
        </Box>
      </Flex>
      <Center>
        <Grid
          templateColumns="repeat(12, 1fr)"
          gap={10}
          p={10}
          width="90%"
          height="100vh"
          justifyContent="center"
        >
          <Box
            gridColumn="1 / span 7"
            gridRow="1 / span 3"
            backgroundImage="url('/IMG_8393.JPG')"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            boxShadow="0px 0px 10px 0px rgba(0,0,0,0.5)"
          ></Box>

          <Box
            gridColumn="8 / span 5"
            gridRow="1 / span 3"
            backgroundImage="url('/IMG_8394.JPG')"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            boxShadow="0px 0px 10px 0px rgba(0,0,0,0.5)"
          ></Box>

          <Box
            gridColumn="1 / span 6"
            gridRow="4 / span 3"
            backgroundImage="url('/IMG_8395.JPG')"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            boxShadow="0px 0px 10px 0px rgba(0,0,0,0.5)"
          ></Box>

          <Box
            gridColumn="7 / span 6"
            gridRow="4 / span 3"
            backgroundImage="url('/IMG_8396.JPG')"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            boxShadow="0px 0px 10px 0px rgba(0,0,0,0.5)"
          ></Box>
        </Grid>
      </Center>
    </Flex>
  );
}
