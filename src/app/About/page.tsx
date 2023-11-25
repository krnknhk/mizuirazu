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
      background="linear-gradient(to bottom, #582fb7 30%, #e8e8e8 30%, #e8e8e8)"
      overflow="hidden"
    >
      <VStack position="absolute" alignItems="flex-start" m={4} zIndex={10}>
        <Text
          fontSize="4xl"
          fontWeight="extrabold"
          color="#e8e8e8"
          cursor="pointer"
          ml={68}
          mt={10}
          fontFamily="Zen Kaku Gothic New, sans-serif"
          className="text-shadow"
          onClick={toggleMenu}
        >
          水いらず
        </Text>

        {isMenuOpen && (
          <VStack bg="transparent" width="10%" ml={125} spacing={2} zIndex={10}>
            <Link href="/">
              <Text
                p={4}
                fontSize="3xl"
                fontWeight="bold"
                color="e8e8e8"
                className="menu-item"
              >
                Home
              </Text>
            </Link>
            <Text
              p={4}
              fontSize="3xl"
              fontWeight="bold"
              color="e8e8e8"
              className="menu-item"
            >
              News
            </Text>
            <Text
              p={4}
              fontSize="3xl"
              fontWeight="bold"
              color="e8e8e8"
              className="menu-item"
            >
              Discography
            </Text>
            <Text
              p={4}
              fontSize="3xl"
              fontWeight="bold"
              color="e8e8e8"
              className="menu-item"
            >
              Live
            </Text>
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
        mb={40}
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
          <Text fontSize="lg" color="black">
            2016 年に結成された東京を拠点に活動する 4 人組インディ・ロッ
            ク・バンド。アジアの民族音楽をもとに、スタンドアローン・コ
            ンプレックス(孤立した個人でありながらも、全体として集団的
            な行動を取る)なスタンスを心がけながら、独自の音楽を生み出す。
            メンバーは楽器よりも PC を愛用している。
            バンドは直接民主制を採用し、メンバー同士の仲は非常に良く、
            喧嘩は皆無。家が近いため、タクシー代が割り勘できる。思想や
            概念から作曲が始まり、家で楽曲制作を行なっている。
          </Text>
          <Text fontSize="lg" color="black" mt={5}>
            井上真 (vo,gt)、小宮山節己 (dr)、桜井晴紀 (k)、辻本秀太郎 (b)
          </Text>
        </Box>
      </Flex>{" "}
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
