"use client";

import {
  AspectRatio,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
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

export default function About() {
  const isSp = useMediaQuery(mediaQuery.sp);
  const isPc = useMediaQuery(mediaQuery.pc);

  if (isSp) {
    return (
      <>
        <SpMenu />
        <VStack>
          <Box
            backgroundColor="#55499b"
            width="100vw"
            height="100px"
            position="absolute"
          >
            <Box
              color="#e8e8e8"
              fontFamily="english"
              position="relative"
              top={5}
              left={1}
              ml={5}
            >
              <Breadcrumb>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/" _hover={{ color: "#e88700" }}>
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>
                  <BreadcrumbLink href="#">About</BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
              <Box height="1px" backgroundColor="gray.200" mt={1} />
            </Box>
          </Box>

          <VStack mt="100px">
            <Grid
              templateColumns="repeat(2, 1fr)"
              gap={5}
              width="90%"
              justifyContent="center"
              mt={5}
            >
              <GridItem colSpan={2}>
                <AspectRatio ratio={3 / 2}>
                  <Box
                    backgroundImage="url('/20210828_6.jpg')"
                    backgroundRepeat="no-repeat"
                    backgroundSize="cover"
                    boxShadow="0px 0px 10px 0px rgba(0,0,0,0.7)"
                  />
                </AspectRatio>
              </GridItem>

              <GridItem
                colSpan={2}
                backgroundColor="#f4f4ed"
                overflowY="auto"
                rounded="md"
                p={5}
              >
                <VStack align="stretch">
                  <Text fontSize="13px" color="black" fontWeight="bold">
                    2016年に結成された東京を拠点に活動する4人組インディ・ロック・バンド。アジアの民族音楽をもとに、スタンドアローン・コンプレックス(孤立した個人でありながらも、全体として集団的な行動を取る)なスタンスを心がけながら、独自の音楽を生み出す。メンバーは楽器よりもPCを愛用している。バンドは直接民主制を採用し、メンバー同士の仲は非常に良く、喧嘩は皆無。家が近いため、タクシー代が割り勘できる。思想や概念から作曲が始まり、家で楽曲制作を行なっている。
                  </Text>
                  <Box mt={5}>
                    <Text
                      fontSize="13px"
                      color="black"
                      fontWeight="bold"
                      as="i"
                    >
                      井上真 (vo,gt)、小宮山節己 (dr)、桜井晴紀
                      (key)、辻本秀太郎 (ba)
                    </Text>
                  </Box>
                </VStack>
              </GridItem>

              <GridItem colSpan={2}>
                <AspectRatio ratio={3 / 2}>
                  <Box
                    backgroundImage="url('/IMG_8394.JPG')"
                    backgroundRepeat="no-repeat"
                    backgroundSize="cover"
                    boxShadow="0px 0px 10px 0px rgba(0,0,0,0.7)"
                  />
                </AspectRatio>
              </GridItem>

              <GridItem
                colSpan={2}
                backgroundColor="#f4f4ed"
                overflowY="auto"
                rounded="md"
                p={5}
              >
                <Text fontSize="13px" color="black" fontWeight="bold">
                  2020 年 12
                  月:1stフル・アルバム『ほとんど、空』をリリース。巽啓伍(never
                  youngbeach)、東郷清丸、天川悠雅(ギリシャラブ)、飯島はるか(に角すい)が賛辞を送り、多方面から評価を得た。翌年5月に下北沢
                  LIVE HAUS
                  にて、Lanes、テンテンコを共演に迎えリリース・イベント『intimacy』を開催。
                </Text>
                <Box
                  height="1px"
                  backgroundColor="gray.300"
                  width="99%"
                  mt={3}
                />
                <Text fontSize="13px" color="black" fontWeight="bold" mt={3}>
                  2021 年 10
                  月:「su-mu」を配信リリース。アジアの民族音楽に着眼し、ケチャ、ガムラン、日本民謡、コナッコルなど、アジア的なリズムや音階をバンド・サウンドに還元する取り組みが話題を集める。
                </Text>
                <Box
                  height="1px"
                  backgroundColor="gray.300"
                  width="99%"
                  mt={3}
                />
                <Text fontSize="13px" color="black" fontWeight="bold" mt={3}>
                  2022 年 2
                  月:「su-mu」リリース・イベントをプラネタリウムで開催。あだち麗三郎、Pot-pourri
                  と共演。
                </Text>
                <Box
                  height="1px"
                  backgroundColor="gray.300"
                  width="99%"
                  mt={3}
                />
                <Text fontSize="13px" color="black" fontWeight="bold" mt={3}>
                  2022 年 10 月:「su-mu」の 7
                  インチ・レコードがリリース。曽我部恵一(サニーデイ・サービス)が手がけたリミックスも収録された。
                </Text>
                <Box
                  height="1px"
                  backgroundColor="gray.300"
                  width="99%"
                  mt={3}
                />
                <Text fontSize="13px" color="black" fontWeight="bold" mt={3}>
                  2022 年 10
                  月:妖怪、インセル、都市がテーマとなったシングル「bakeru」を配信リリース。
                </Text>
                <Box
                  height="1px"
                  backgroundColor="gray.300"
                  width="99%"
                  mt={3}
                />
                <Text fontSize="13px" color="black" fontWeight="bold" mt={3}>
                  2022 年 11 月:下北沢 THREE
                  で企画ライブ「intimacy」を開催。ゲストに浮を迎え、音楽
                  ZINE『痙攣』の編集長・李氏とのトークショー も行なわれた。
                </Text>
                <Box
                  height="1px"
                  backgroundColor="gray.300"
                  width="99%"
                  mt={3}
                />
                <Text fontSize="13px" color="black" fontWeight="bold" mt={3}>
                  2023 年 5 月:奇妙礼太郎との 2 マンライヴを渋谷 La.mama
                  で行なう。
                </Text>
                <Box
                  height="1px"
                  backgroundColor="gray.300"
                  width="99%"
                  mt={3}
                />
                <Text fontSize="13px" color="black" fontWeight="bold" mt={3}>
                  2023 年 12 月:シングル「uturu」をリリース。
                </Text>
              </GridItem>
            </Grid>

            <Grid
              templateColumns="repeat(2, 1fr)"
              gap={5}
              width="90%"
              justifyContent="center"
              mb={5}
              mt={3}
            >
              <GridItem colSpan={2}>
                <AspectRatio ratio={3 / 2}>
                  <Box
                    backgroundImage="url('/IMG_8396.JPG')"
                    backgroundRepeat="no-repeat"
                    backgroundSize="cover"
                    boxShadow="0px 0px 10px 0px rgba(0,0,0,0.7)"
                  />
                </AspectRatio>
              </GridItem>

              <GridItem colSpan={2}>
                <AspectRatio ratio={3 / 2}>
                  <Box
                    backgroundImage="url('/IMG_8395.JPG')"
                    backgroundRepeat="no-repeat"
                    backgroundSize="cover"
                    boxShadow="0px 0px 10px 0px rgba(0,0,0,0.7)"
                  />
                </AspectRatio>
              </GridItem>

              <GridItem colSpan={2}>
                <AspectRatio ratio={3 / 2}>
                  <Box
                    backgroundImage="url('/IMG_8393.JPG')"
                    backgroundRepeat="no-repeat"
                    backgroundSize="cover"
                    boxShadow="0px 0px 10px 0px rgba(0,0,0,0.7)"
                  />
                </AspectRatio>
              </GridItem>
            </Grid>
          </VStack>

          <Footer></Footer>
        </VStack>
      </>
    );
  } else if (isPc) {
    return (
      <>
        <Flex
          direction="column"
          background="linear-gradient(to bottom, #55499b 23%, #dce0f2 23%, #e8e8e8)"
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
                <BreadcrumbLink href="#">About</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Box height="1px" backgroundColor="gray.200" width="90%" mt={3} />
          </Box>
          <VStack mt={50}>
            <Grid
              templateColumns="repeat(12, 1fr)"
              gap={10}
              width="90%"
              height="43vh"
              justifyContent="center"
            >
              <GridItem
                colSpan={5}
                backgroundImage="url('/20210828_6.jpg')"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                boxShadow="0px 0px 10px 0px rgba(0,0,0,0.7)"
              ></GridItem>

              <GridItem
                colSpan={7}
                backgroundColor="#f4f4ed"
                overflowY="auto"
                rounded="md"
                p={8}
              >
                <VStack align="stretch">
                  <Text fontSize="15px" color="black" fontWeight="bold">
                    2016年に結成された東京を拠点に活動する4人組インディ・ロック・バンド。アジアの民族音楽をもとに、スタンドアローン・コンプレックス(孤立した個人でありながらも、全体として集団的な行動を取る)なスタンスを心がけながら、独自の音楽を生み出す。メンバーは楽器よりもPCを愛用している。バンドは直接民主制を採用し、メンバー同士の仲は非常に良く、喧嘩は皆無。家が近いため、タクシー代が割り勘できる。思想や概念から作曲が始まり、家で楽曲制作を行なっている。
                  </Text>
                  <Box mt={5}>
                    <Text fontSize="sm" color="black" fontWeight="bold" as="i">
                      井上真 (vo,gt)、小宮山節己 (dr)、桜井晴紀
                      (key)、辻本秀太郎 (ba)
                    </Text>
                  </Box>
                </VStack>
              </GridItem>
            </Grid>

            <Grid
              templateColumns="repeat(12, 1fr)"
              gap={5}
              width="90%"
              height="45vh"
              justifyContent="center"
              mt={35}
            >
              <GridItem
                colSpan={7}
                backgroundColor="#f4f4ed"
                overflowY="auto"
                rounded="md"
                p={5}
              >
                <Text fontSize="15px" color="black" fontWeight="bold">
                  2020 年 12
                  月:1stフル・アルバム『ほとんど、空』をリリース。巽啓伍(never
                  youngbeach)、東郷清丸、天川悠雅(ギリシャラブ)、飯島はるか(に角すい)が賛辞を送り、多方面から評価を得た。翌年5月に下北沢
                  LIVE HAUS
                  にて、Lanes、テンテンコを共演に迎えリリース・イベント『intimacy』を開催。
                </Text>
                <Box
                  height="1px"
                  backgroundColor="gray.300"
                  width="99%"
                  mt={3}
                />
                <Text fontSize="15px" color="black" fontWeight="bold" mt={3}>
                  2021 年 10
                  月:「su-mu」を配信リリース。アジアの民族音楽に着眼し、ケチャ、ガムラン、日本民謡、コナッコルなど、アジア的なリズムや音階をバンド・サウンドに還元する取り組みが話題を集める。
                </Text>
                <Box
                  height="1px"
                  backgroundColor="gray.300"
                  width="99%"
                  mt={3}
                />
                <Text fontSize="15px" color="black" fontWeight="bold" mt={3}>
                  2022 年 2
                  月:「su-mu」リリース・イベントをプラネタリウムで開催。あだち麗三郎、Pot-pourri
                  と共演。
                </Text>
                <Box
                  height="1px"
                  backgroundColor="gray.300"
                  width="99%"
                  mt={3}
                />
                <Text fontSize="15px" color="black" fontWeight="bold" mt={3}>
                  2022 年 10 月:「su-mu」の 7
                  インチ・レコードがリリース。曽我部恵一(サニーデイ・サービス)が手がけたリミックスも収録された。
                </Text>
                <Box
                  height="1px"
                  backgroundColor="gray.300"
                  width="99%"
                  mt={3}
                />
                <Text fontSize="15px" color="black" fontWeight="bold" mt={3}>
                  2022 年 10
                  月:妖怪、インセル、都市がテーマとなったシングル「bakeru」を配信リリース。
                </Text>
                <Box
                  height="1px"
                  backgroundColor="gray.300"
                  width="99%"
                  mt={3}
                />
                <Text fontSize="15px" color="black" fontWeight="bold" mt={3}>
                  2022 年 11 月:下北沢 THREE
                  で企画ライブ「intimacy」を開催。ゲストに浮を迎え、音楽
                  ZINE『痙攣』の編集長・李氏とのトークショー も行なわれた。
                </Text>
                <Box
                  height="1px"
                  backgroundColor="gray.300"
                  width="99%"
                  mt={3}
                />
                <Text fontSize="15px" color="black" fontWeight="bold" mt={3}>
                  2023 年 5 月:奇妙礼太郎との 2 マンライヴを渋谷 La.mama
                  で行なう。
                </Text>
                <Box
                  height="1px"
                  backgroundColor="gray.300"
                  width="99%"
                  mt={3}
                />
                <Text fontSize="15px" color="black" fontWeight="bold" mt={3}>
                  2023 年 12 月:シングル「uturu」をリリース。
                </Text>
              </GridItem>

              <GridItem
                colSpan={5}
                backgroundImage="url('/IMG_8394.JPG')"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                boxShadow="0px 0px 10px 0px rgba(0,0,0,0.7)"
              ></GridItem>
            </Grid>

            <Grid
              templateColumns="repeat(12, 1fr)"
              gap={8}
              width="90%"
              height="35vh"
              justifyContent="center"
              mb={35}
              mt={35}
            >
              <GridItem
                colSpan={5}
                backgroundImage="url('/IMG_8393.JPG')"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                boxShadow="0px 0px 10px 0px rgba(0,0,0,0.7)"
              ></GridItem>

              <GridItem
                colSpan={3}
                backgroundImage="url('/IMG_8396.JPG')"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                boxShadow="0px 0px 10px 0px rgba(0,0,0,0.7)"
              ></GridItem>

              <GridItem
                colSpan={4}
                backgroundImage="url('/IMG_8395.JPG')"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                boxShadow="0px 0px 10px 0px rgba(0,0,0,0.7)"
              ></GridItem>
            </Grid>
          </VStack>
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
        <Spinner size="xl" />
      </Box>
    );
  }
}
