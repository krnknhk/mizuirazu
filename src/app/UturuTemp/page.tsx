/* eslint no-irregular-whitespace: "off" */
"use client";

import Footer from "@/app/Footer";
import Menu from "@/app/menu";
import SpMenu from "@/app/spmenu";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
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
import Link from "next/link";
import { FaSpotify } from "react-icons/fa6";
import "../style.css";
import { mediaQuery, useMediaQuery } from "../useMediaQuery";

export default function UturuTemp() {
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
                  <BreadcrumbLink href="#" fontFamily="japanese">
                    特設ページ - uturu
                  </BreadcrumbLink>
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
                      backgroundImage="url('/uturu.png')"
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
                      <Link href="https://open.spotify.com/intl-ja/track/37s2uTq6xvtMGtmwdUsZuj?si=352ef57e31514f65">
                        <Box color="#3bd300">
                          <FaSpotify size={20} />
                        </Box>
                      </Link>
                    </HStack>
                  </Box>
                  <Box
                    height="1px"
                    backgroundColor="gray.300"
                    width="100%"
                    mt={1}
                  />
                  <Link href="https://ultravybe.lnk.to/uturu">
                    <Box mt={5}>
                      <Text
                        fontSize="16px"
                        fontWeight="bold"
                        fontFamily="japanese"
                        color={"#55499b"}
                      >
                        各種リンク
                      </Text>
                    </Box>
                  </Link>
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
                      下田開登(ex picnic you、跡地/rap)
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

                <GridItem colSpan={2} mt={5}>
                  <Accordion allowMultiple>
                    <AccordionItem>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          <Text
                            fontSize="20px"
                            fontWeight="bold"
                            fontFamily="japanese2"
                            textColor="#55499b"
                          >
                            リリースinfo
                          </Text>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel pb={3}>
                        <Text
                          fontSize="15px"
                          fontWeight="bold"
                          fontFamily="japanese2"
                        >
                          東京を拠点に活動する4人組バンド、水いらずがニュー・シングル「uturu」を
                          2023 年 12 月 6 日にリリースする。
                        </Text>
                        <Text
                          fontSize="15px"
                          fontWeight="bold"
                          fontFamily="japanese2"
                        >
                          前作シングル「bakeru」から1年ぶりとなる本作は、日本語の擬音語や擬態語をテーマに制作された楽曲となっている。
                          メンバー4人に加え、ライヴ・サポートを務める廣瀬謙介(gt)、山田宏也(エンヤコーラーズ/dr,per)、さらにはゲスト・ミュージシャンとして浮(vo)、下田開登(ex
                          picnic you、跡地/ rap)、マーティ・ホロベック(bass
                          solo)とのコラボレーションも果たした本作は、バンドという形態に捉われない編成で奏でられた、幾多のトラックがひしめき合う大曲。
                        </Text>
                        <Text
                          fontSize="15px"
                          fontWeight="bold"
                          fontFamily="japanese2"
                        >
                          1年をかけてじっくりと作り上げたこの作品で、近年取り組んできた日本民謡やインドネシアのケチャをはじめとするアジアの民族音楽をバンド・サウンドに還元するアプローチを加速させるとともに、交響曲のように入り込んだ編曲と展開の妙を前作以上に突き詰めることで、日本語ポップ・ミュージックの極地を提示してみせた。
                        </Text>
                        <Text
                          fontSize="15px"
                          fontWeight="bold"
                          fontFamily="japanese2"
                        >
                          また「uturu」ではバンド初となるDolby Atmos、360Reality
                          Audioでの音源制作も実現。“擬音語や擬態語”をコンセプトに掲げ、「ザーザー」「ポタポタ」「ドキドキ」などといった声のサンプルがちりばめられている本曲では、立体感や没入感のある“空間音響”を用いた表現を念頭にしてアレンジが進められている。
                        </Text>
                        <Text
                          fontSize="15px"
                          fontWeight="bold"
                          fontFamily="japanese2"
                        >
                          レコーディング/ミックス・エンジニアは、数々のアーティスト作品や、劇伴、CM楽曲、海外映画の日本語ローカライズ版音声ミックスなどを手がけ、イマーシブ・オーディオにも意欲的に取り組む米津裕二郎が担当。楽曲の世界観を体現する印象的なアートワークは、羽生まゐごのMV
                          やアニメ『FLCL:
                          Shoegaze』のED監督を務めた気鋭の漫画家/アニメーター・内田晟による
                          描き下ろし作品となっている。
                        </Text>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </GridItem>

                <GridItem colSpan={2} mt={5}>
                  <Text
                    fontSize="20px"
                    fontWeight="bold"
                    fontFamily="japanese2"
                    textColor="#55499b"
                  >
                    コメント
                  </Text>
                  <Box
                    height="1px"
                    backgroundColor="gray.300"
                    width="100%"
                    mt={3}
                  />
                  <Box ml={1}>
                    <Text fontSize="14px" fontFamily="japanese2" mt={7}>
                      人
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={3}>
                      (二つの目と二つの耳しか持たない)
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={3}>
                      一滴の雫として、葉から滴り落ちて地表で弾けるまでに周囲の景色をあまねく受け取ることはできない。
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={3}>
                      例えば鏡で、景色を映すことはあっても、鏡に落とされたインクの色が景色に移ることはない。裏側を除いても別の景色が広がるばかりの一枚。
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={7}>
                      變
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={3}>
                      それぞれがそれぞれの履歴に紐づいた台詞を持っていて、それぞれの地点からそれを提出する。人の指で群像を差して、また折って数えることはできない。それでも観察は続く。
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={3}>
                      挨拶はもうとっくに終わっていて、風邪をひきあったり言ってないことを読み取ったり距離を変えたりする。
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={3}>
                      それってもう『好き』ってことじゃんね、と思う。
                    </Text>
                    <Text fontSize="16px" fontFamily="japanese2" mt={5}>
                      paya（幽体コミュニケーションズ）
                    </Text>
                  </Box>
                  <Box
                    height="1px"
                    backgroundColor="gray.300"
                    width="100%"
                    mt={7}
                  />
                  <Box ml={1}>
                    <Text fontSize="14px" fontFamily="japanese2" mt={7}>
                      なんて自由な音楽！
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={3}>
                      最初に持った印象はそれでした。
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={3}>
                      しかし、それは視点や表現する内容と方法の話であって、音楽としては構築美を感じます。
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={3}>
                      自然にストーリーが進むよう秩序だっていて、楽器の使い方も必要な音しか鳴ってませんと胸を張って言えそうな構成。
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={3}>
                      民族音楽からエクスペリメンタルなものまで、様々なルーツは見えるのですが、結果的にそれらが全部日本的な「和」に帰結しているので、
                      どこか懐かしく聴ける音楽でもあり、真のミクスチャー・ロックだなとも思いました。
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={3}>
                      そして最終的に「好きだよ」で小難しいことはどうでも良くなって、楽しくリピートしちゃう、ポップさ加減が好きです。
                    </Text>
                    <Text fontSize="16px" fontFamily="japanese2" mt={5}>
                      佐藤征史（くるり）
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
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="#" fontFamily="japanese">
                  特設ページ - uturu
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
                      backgroundImage="url('/uturu.png')"
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
                      <Link href="https://open.spotify.com/intl-ja/track/37s2uTq6xvtMGtmwdUsZuj?si=352ef57e31514f65">
                        <Box color="#3bd300">
                          <FaSpotify size={20} />
                        </Box>
                      </Link>
                    </HStack>
                  </Box>
                  <Box
                    height="1px"
                    backgroundColor="gray.300"
                    width="100%"
                    mt={1}
                  />
                  <Link href="https://ultravybe.lnk.to/uturu">
                    <Box mt={5}>
                      <Text
                        fontSize="16px"
                        fontWeight="bold"
                        fontFamily="japanese"
                        color={"#55499b"}
                      >
                        各種リンク
                      </Text>
                    </Box>
                  </Link>
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
                      下田開登(ex picnic you、跡地/rap)
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

                <GridItem colSpan={12}>
                  <Accordion defaultIndex={[0]} allowMultiple>
                    <AccordionItem>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          <Text
                            fontSize="18px"
                            fontWeight="bold"
                            fontFamily="japanese2"
                            textColor="#55499b"
                          >
                            リリースinfo
                          </Text>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel pb={3}>
                        <Text
                          fontSize="15px"
                          fontWeight="bold"
                          fontFamily="japanese2"
                        >
                          東京を拠点に活動する4人組バンド、水いらずがニュー・シングル「uturu」を
                          2023 年 12 月 6 日にリリースする。
                        </Text>
                        <Text
                          fontSize="15px"
                          fontWeight="bold"
                          fontFamily="japanese2"
                        >
                          前作シングル「bakeru」から1年ぶりとなる本作は、日本語の擬音語や擬態語をテーマに制作された楽曲となっている。
                          メンバー4人に加え、ライヴ・サポートを務める廣瀬謙介(gt)、山田宏也(エンヤコーラーズ/dr,per)、さらにはゲスト・ミュージシャンとして浮(vo)、下田開登(ex
                          picnic you、跡地/ rap)、マーティ・ホロベック(bass
                          solo)とのコラボレーションも果たした本作は、バンドという形態に捉われない編成で奏でられた、幾多のトラックがひしめき合う大曲。
                        </Text>
                        <Text
                          fontSize="15px"
                          fontWeight="bold"
                          fontFamily="japanese2"
                        >
                          1年をかけてじっくりと作り上げたこの作品で、近年取り組んできた日本民謡やインドネシアのケチャをはじめとするアジアの民族音楽をバンド・サウンドに還元するアプローチを加速させるとともに、交響曲のように入り込んだ編曲と展開の妙を前作以上に突き詰めることで、日本語ポップ・ミュージックの極地を提示してみせた。
                        </Text>
                        <Text
                          fontSize="15px"
                          fontWeight="bold"
                          fontFamily="japanese2"
                        >
                          また「uturu」ではバンド初となるDolby Atmos、360Reality
                          Audioでの音源制作も実現。“擬音語や擬態語”をコンセプトに掲げ、「ザーザー」「ポタポタ」「ドキドキ」などといった声のサンプルがちりばめられている本曲では、立体感や没入感のある“空間音響”を用いた表現を念頭にしてアレンジが進められている。
                        </Text>
                        <Text
                          fontSize="15px"
                          fontWeight="bold"
                          fontFamily="japanese2"
                        >
                          レコーディング/ミックス・エンジニアは、数々のアーティスト作品や、劇伴、CM楽曲、海外映画の日本語ローカライズ版音声ミックスなどを手がけ、イマーシブ・オーディオにも意欲的に取り組む米津裕二郎が担当。楽曲の世界観を体現する印象的なアートワークは、羽生まゐごのMV
                          やアニメ『FLCL:
                          Shoegaze』のED監督を務めた気鋭の漫画家/アニメーター・内田晟による
                          描き下ろし作品となっている。
                        </Text>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </GridItem>

                <GridItem colSpan={12}>
                  <Text
                    fontSize="20px"
                    fontWeight="bold"
                    fontFamily="japanese2"
                    textColor="#55499b"
                  >
                    コメント
                  </Text>
                  <Box
                    height="1px"
                    backgroundColor="gray.300"
                    width="100%"
                    mt={3}
                  />
                  <Box ml={1}>
                    <Text fontSize="14px" fontFamily="japanese2" mt={7}>
                      人
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={3}>
                      (二つの目と二つの耳しか持たない)
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={3}>
                      一滴の雫として、葉から滴り落ちて地表で弾けるまでに周囲の景色をあまねく受け取ることはできない。
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={3}>
                      例えば鏡で、景色を映すことはあっても、鏡に落とされたインクの色が景色に移ることはない。裏側を除いても別の景色が広がるばかりの一枚。
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={7}>
                      變
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={3}>
                      それぞれがそれぞれの履歴に紐づいた台詞を持っていて、それぞれの地点からそれを提出する。人の指で群像を差して、また折って数えることはできない。それでも観察は続く。
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={3}>
                      挨拶はもうとっくに終わっていて、風邪をひきあったり言ってないことを読み取ったり距離を変えたりする。
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={3}>
                      それってもう『好き』ってことじゃんね、と思う。
                    </Text>
                    <Text fontSize="16px" fontFamily="japanese2" mt={5}>
                      paya（幽体コミュニケーションズ）
                    </Text>
                  </Box>
                  <Box
                    height="1px"
                    backgroundColor="gray.300"
                    width="100%"
                    mt={7}
                  />
                  <Box ml={1}>
                    <Text fontSize="14px" fontFamily="japanese2" mt={7}>
                      なんて自由な音楽！
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={3}>
                      最初に持った印象はそれでした。
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={3}>
                      しかし、それは視点や表現する内容と方法の話であって、音楽としては構築美を感じます。
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={3}>
                      自然にストーリーが進むよう秩序だっていて、楽器の使い方も必要な音しか鳴ってませんと胸を張って言えそうな構成。
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={3}>
                      民族音楽からエクスペリメンタルなものまで、様々なルーツは見えるのですが、結果的にそれらが全部日本的な「和」に帰結しているので、
                      どこか懐かしく聴ける音楽でもあり、真のミクスチャー・ロックだなとも思いました。
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={3}>
                      そして最終的に「好きだよ」で小難しいことはどうでも良くなって、楽しくリピートしちゃう、ポップさ加減が好きです。
                    </Text>
                    <Text fontSize="16px" fontFamily="japanese2" mt={5}>
                      佐藤征史（くるり）
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
