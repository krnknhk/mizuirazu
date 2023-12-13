/* eslint no-irregular-whitespace: "off" */
"use client";

import Footer from "@/app/Footer";
import Menu from "@/app/menu";
import SpMenu from "@/app/spmenu";
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
import "../style.css";
import { mediaQuery, useMediaQuery } from "../useMediaQuery";

export default function Lyrics() {
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
                  <BreadcrumbLink href="#">Lyrics</BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
              <Box height="1px" backgroundColor="gray.200" mt={1} />
            </Box>
          </Box>

          <Center>
            <Box width="100vw" backgroundColor="#f4f4ed" mt="100px">
              <Grid templateColumns="repeat(2, 1fr)" gap={5} m={8}>
                <GridItem colSpan={2}>
                  <Text
                    fontSize="20px"
                    fontWeight="bold"
                    fontFamily="japanese2"
                    textColor="#55499b"
                  >
                    「uturu」歌詞
                  </Text>
                  <Text
                    fontSize="14px"
                    fontWeight="bold"
                    fontFamily="japanese2"
                    textColor="#55499b"
                    mt={5}
                  >
                    作詞：井上真
                  </Text>

                  <Box
                    height="1px"
                    backgroundColor="gray.300"
                    width="100%"
                    mt={3}
                  />
                  <Box ml={1}>
                    <Text fontSize="15px" fontFamily="japanese2" mt={5}>
                      {"< Aメロ >"}
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                      鄙びた街が勇んだ。揺れた道、僕は歩いた。
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                      微かな、あなたを、真上を探した。
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                      息をついた。もうすぐ 0 時。
                    </Text>
                    <Text fontSize="15px" fontFamily="japanese2" mt={5}>
                      {"< サビ1 >"}
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                      朝には 朝には(降る降る)
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                      ただいま 朝には(降る降る)
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                      余した 中身が(浮く浮く)
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                      鏡は 私は(写す)
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                      形が 移り行き、フィルムに、うつしよは
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                      光が はじまりは背後から(来る、来る)
                    </Text>
                    <Text fontSize="15px" fontFamily="japanese2" mt={5}>
                      {"< Bメロ >"}
                    </Text>
                    <Text fontSize="15px" fontFamily="japanese2" mt={5}>
                      {"< ラップ：下田開登 >"}
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                      いつもごめんなさい
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                      ありがとうさようなら 二人の日々
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                      こぼれ落ちない星にも
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                      手を伸ばした日曜日
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                      あれは好きな帽子
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                      ラストシーンはどう
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                      あの頃に戻れるはずの magic
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                      声はなく手繰る記憶の鞠
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                      憎しみ合うように抱きあう2人
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                      濃くも、硬くなる君の影
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                      通り雨なら我慢します
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                      これじゃまるで黒だけのオセロ
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                      空のアパルトマン
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                      時間差の涙 さかしまの空
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                      君が出す色香 huh ラ・ヴィダ・ロカ
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                      送り返すアルバムまた見返しては泣く
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                      溢れ返り出す光の断片
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                      bitch が life なら連れてく
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                      new plateau through rap show
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                      きみが視界に入るいつもの窓
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                      いつもそばにいたかった
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                      この世界の角にいても
                    </Text>
                    <Text fontSize="15px" fontFamily="japanese2" mt={5}>
                      {"< Cメロ >"}
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                      朱に染まっていく
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                      かざした手
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                      触ってみたい
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={3}>
                      主題は夙に壊れている
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                      まばゆい目
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                      嫌われたくない
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={3}>
                      あなたと
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                      離れたくないよ
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                      そばにいたいよ
                    </Text>
                    <Text fontSize="15px" fontFamily="japanese2" mt={5}>
                      {"< サビ２ >"}
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                      好きだよ。好きだよ。好き好きだよ。
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                      好きだよ。好きだよ。好き、だよ。
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                      好きだよ。好きだよ。好き好きだよ。
                    </Text>
                    <Text fontSize="15px" fontFamily="japanese2" mt={5}>
                      {"< Dメロ >"}
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                      いつまでも変わらないまま、ここに今いて欲しい。
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                      いつまでも変わらないまま、いてね、いてね。
                    </Text>
                  </Box>
                  <Box
                    height="1px"
                    backgroundColor="gray.300"
                    width="100%"
                    mt={7}
                  />
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
          background="linear-gradient(to bottom, #55499b 100%, #dce0f2 30%, #e8e8e8)"
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
                <BreadcrumbLink href="#">Lyrics</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Box height="1px" backgroundColor="gray.200" width="90%" mt={3} />
          </Box>
          <Center>
            <Box width="80%" minH="70vh" backgroundColor="#f4f4ed" mt={"10vh"}>
              <Grid templateColumns="repeat(2, 1fr)" gap={5} m={8}>
                <GridItem colSpan={2}>
                  <VStack>
                    <Text
                      fontSize="20px"
                      fontWeight="bold"
                      fontFamily="japanese2"
                      textColor="#55499b"
                    >
                      「uturu」歌詞
                    </Text>
                    <Text
                      fontSize="14px"
                      fontWeight="bold"
                      fontFamily="japanese2"
                      textColor="#55499b"
                      mt={5}
                    >
                      作詞：井上真
                    </Text>

                    <Box
                      height="1px"
                      backgroundColor="gray.300"
                      width="100%"
                      mt={3}
                    />
                    <Flex textAlign="center">
                      <Box ml={1}>
                        <Text fontSize="15px" fontFamily="japanese2" mt={5}>
                          {"< Aメロ >"}
                        </Text>
                        <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                          鄙びた街が勇んだ。揺れた道、僕は歩いた。
                        </Text>
                        <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                          微かな、あなたを、真上を探した。
                        </Text>
                        <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                          息をついた。もうすぐ 0 時。
                        </Text>
                        <Text fontSize="15px" fontFamily="japanese2" mt={5}>
                          {"< サビ1 >"}
                        </Text>
                        <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                          朝には 朝には(降る降る)
                        </Text>
                        <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                          ただいま 朝には(降る降る)
                        </Text>
                        <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                          余した 中身が(浮く浮く)
                        </Text>
                        <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                          鏡は 私は(写す)
                        </Text>
                        <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                          形が 移り行き、フィルムに、うつしよは
                        </Text>
                        <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                          光が はじまりは背後から(来る、来る)
                        </Text>
                        <Text fontSize="15px" fontFamily="japanese2" mt={5}>
                          {"< Bメロ >"}
                        </Text>
                        <Text fontSize="15px" fontFamily="japanese2" mt={5}>
                          {"< ラップ：下田開登 >"}
                        </Text>
                        <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                          いつもごめんなさい
                        </Text>
                        <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                          ありがとうさようなら 二人の日々
                        </Text>
                        <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                          こぼれ落ちない星にも
                        </Text>
                        <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                          手を伸ばした日曜日
                        </Text>
                        <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                          あれは好きな帽子
                        </Text>
                        <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                          ラストシーンはどう
                        </Text>
                        <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                          あの頃に戻れるはずの magic
                        </Text>
                        <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                          声はなく手繰る記憶の鞠
                        </Text>
                        <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                          憎しみ合うように抱きあう2人
                        </Text>
                        <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                          濃くも、硬くなる君の影
                        </Text>
                        <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                          通り雨なら我慢します
                        </Text>
                        <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                          これじゃまるで黒だけのオセロ
                        </Text>
                        <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                          空のアパルトマン
                        </Text>
                        <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                          時間差の涙 さかしまの空
                        </Text>
                        <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                          君が出す色香 huh ラ・ヴィダ・ロカ
                        </Text>
                        <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                          送り返すアルバムまた見返しては泣く
                        </Text>
                        <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                          溢れ返り出す光の断片
                        </Text>
                        <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                          bitch が life なら連れてく
                        </Text>
                        <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                          new plateau through rap show
                        </Text>
                        <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                          きみが視界に入るいつもの窓
                        </Text>
                        <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                          いつもそばにいたかった
                        </Text>
                        <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                          この世界の角にいても
                        </Text>
                        <Text fontSize="15px" fontFamily="japanese2" mt={5}>
                          {"< Cメロ >"}
                        </Text>
                        <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                          朱に染まっていく
                        </Text>
                        <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                          かざした手
                        </Text>
                        <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                          触ってみたい
                        </Text>
                        <Text fontSize="14px" fontFamily="japanese2" mt={3}>
                          主題は夙に壊れている
                        </Text>
                        <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                          まばゆい目
                        </Text>
                        <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                          嫌われたくない
                        </Text>
                        <Text fontSize="14px" fontFamily="japanese2" mt={3}>
                          あなたと
                        </Text>
                        <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                          離れたくないよ
                        </Text>
                        <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                          そばにいたいよ
                        </Text>
                        <Text fontSize="15px" fontFamily="japanese2" mt={5}>
                          {"< サビ２ >"}
                        </Text>
                        <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                          好きだよ。好きだよ。好き好きだよ。
                        </Text>
                        <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                          好きだよ。好きだよ。好き、だよ。
                        </Text>
                        <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                          好きだよ。好きだよ。好き好きだよ。
                        </Text>
                        <Text fontSize="15px" fontFamily="japanese2" mt={5}>
                          {"< Dメロ >"}
                        </Text>
                        <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                          いつまでも変わらないまま、ここに今いて欲しい。
                        </Text>
                        <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                          いつまでも変わらないまま、いてね、いてね。
                        </Text>
                      </Box>
                    </Flex>
                    <Box
                      height="1px"
                      backgroundColor="gray.300"
                      width="100%"
                      mt={7}
                    />
                  </VStack>
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
