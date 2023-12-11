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

export default function ReviewHiwatt() {
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
                  <BreadcrumbLink href="UturuTemp" fontFamily="japanese">
                    特設ページ - uturu
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>
                  <BreadcrumbLink href="#">by Hiwatt</BreadcrumbLink>
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
                    レビュー by Hiwatt
                  </Text>
                  <Link href="https://twitter.com/kalopsia___3">
                    <Text
                      fontSize="16px"
                      fontWeight="bold"
                      fontFamily="japanese2"
                      textColor="#55499b"
                    >
                      @kalopsia___3
                    </Text>
                  </Link>

                  <Box
                    height="1px"
                    backgroundColor="gray.300"
                    width="100%"
                    mt={3}
                  />
                  <Box ml={1}>
                    <Text fontSize="14px" fontFamily="japanese2" mt={5}>
                      音楽を語る上で、その作家が暮らす街や都市を背景に語ることは一般的であるし、逆に言えば音楽こそがその街を最も鮮明に映し出す。
                      その中でも、市井の人であるインディ・ミュージシャンの作り出す音楽
                      こそが高い解像度を持ち、音楽シーンが賑わう街の多さは、その国のカルチャーの豊かさと残酷なほどに比例する。残念なことに、日本に明確な特色を持った音楽シーンが存在するのは東京だけである。そんな東京のインディ・シーンの先人達が積み重ねてきた音楽史を慮るのと同等に、重要なのは今を作る人々だ。
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                      東京を拠点とする4人組バンド、水いらずが届けてくれた新曲
                      「uturu」は、構想から約1年をかけた力作で、東京のインディ・ミュージックの分厚い歴史と未来を感じ取ることができる。
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                      古くは、URC周辺のフォーク・シーンが築いた、日本民謡や日本人が好む泣きの要素を含んだ普遍的な郷士としての東京。はっぴぃえんどが示した、ポップ・ミュージックにおけるオノマトペを含んだ日本語の響さ。その後の彼らが標榜した、ウォール・オブ・サウンドのオリエンタルな解釈と、電子音楽で表現した未来都市としての東京。渋谷
                      系のような局地的な土地性を持った音楽や、フリッパーズ・ギターの2人が解散後に発信した対称的な音楽。ceroに代表される、10年代以降のエクスペリメンタルな不定形のバンド/コレクティブたちとの並走。
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                      それらに加え、彼らにはボカロカルチャーや10年代以降のネット音楽が血肉として息づいている。ネイティブなネット世代による、東京インディの現在地として、一つの最適解と言えるだろう。
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                      そんな「uturu」には、相対性理論の作品を手がけ、『ほとんど、空』
                      (2020)
                      からバンドのサウンドを担う、米津裕二郎をレコーディング／ミックスエンジニアとして招!しており、彼らを導く。
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                      また、今作はバンドで初となる Dolby Atmos、360 Reality
                      Audio
                      に対応した楽曲であり、聴きどころの一つであるし、イマーシブ・オーディオを得意とする米津氏の起用は最適だ。
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                      ただ、前述のドメスティックな音楽は基礎的なもの。今作のリファレンスをコンパイルしたプレイリストが公開されているが、影響元は多岐にわたり、それらが組み合わされば特異なものになるのは必然だ。
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                      生まれた時からヒップホップに密接した世代特有のタイム感を持つ、Kassa
                      Overall や Theo Croker
                      のようなジャズマン。ポップミュージックの脱構築を試みる、Slauson
                      Malone 1や Tara Clerkin Trio。偶
                      発的な音をコントロールしてしまう、sora や Nuno
                      Canavarroといった グリッチサウンドの使い手たち。
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                      250 や公衆道徳（空中泥棒）らの極東音楽の矜持に触発され、bo
                      en や Destroy Lonely の「Tokyo Mission
                      Impossible」からカリカチュアされた外側からの東京観を受け取り、水いらずの国内でとどまることのないだろうポテンシャルを窺わせた。
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                      特に印象的だったのは、ボイス・サンプルの抜き差しをスティーブ
                      ライヒの「Diffarent
                      Trains」から引用し、それを日本語の擬音語に置き換えるというアイデアだ。最高に面白い。
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                      また、歌詞にも他の音楽からの影響を感じた。この曲に登場する「あなた」との関係性は、歌い手ごとに異なる印象を受け、一曲のうちに
                      恋愛群像劇が展開されているかのよう。その「あなた」については、彼らが影響を受けた女性ボーカリストが投影されているようにも思える。戸川純や、人カボーカロイドが施された秋本会緒美の「Tennessee
                      Waltz」、ASA-CHANG&巡礼の「花」で聴ける無機質な女性の語り
                      など、エキセントリックかつ実像のない人物像を思わせる。
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                      ゲストボーカルとして米山ミサ（浮）を招き、まだ見ぬ架空の「あなた」や、誰かにとっての「あなた」を演出したのは素晴らしい手腕であるし、米山の演技力も筆舌に値する。下田開登
                      (PICNIC
                      YOU)による、飾らないフロウとリリックが浮き上がらせるコントラストもこの曲が持つ魅力だと言える。
                      「uturu」は、「bakeru」(2022)
                      からの1年ぶりの新曲だが、彼らの現在のモードは明らかに「su-mu」(2021)からの連続性にあるもので、表面的には牧歌的なムードだが、時折悍ましさを明かせるサウンドデザインや曲構成、歌詞に彼らのシグネチャーを見い出した。また、タイトルをアルファベット表記にすることで、聴き手に意味を委ねる同音異義語での言葉遊びも、彼らのシマーなイメージやムードを引き出している。
                      日々の移ろいをフィルムに写し、グレインやブラーによって非現実的なものにすることもあれば、より克明な現実を映すこともある。今の水いらずはそんな表現をしてしまう。
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                      また、歌詞にも他の音楽からの影響を感じた。この曲に登場する「あなた」との関係性は、歌い手ごとに異なる印象を受け、一曲のうちに
                      恋愛群像劇が展開されているかのよう。その「あなた」については、彼らが影響を受けた女性ボーカリストが投影されているようにも思える。戸川純や、人カボーカロイドが施された秋本会緒美の「Tennessee
                      Waltz」、ASA-CHANG&巡礼の「花」で聴ける無機質な女性の語り
                      など、エキセントリックかつ実像のない人物像を思わせる。
                      ゲストボーカルとして米山ミサ（浮）を招き、まだ見ぬ架空の「あなた」や、誰かにとっての「あなた」を演出したのは素晴らしい手腕であるし、米山の演技力も筆舌に値する。下田開登
                      (PICNIC
                      YOU)による、飾らないフロウとリリックが浮き上がらせるコントラストもこの曲が持つ魅力だと言える。
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                      「uturu」は、「bakeru」(2022)
                      からの1年ぶりの新曲だが、彼らの現在のモードは明らかに「su-mu」(2021)からの連続性にあるもので、表面的には牧歌的なムードだが、時折悍ましさを明かせるサウンドデザインや曲構成、歌詞に彼らのシグネチャーを見い出した。また、タイトルをアルファベット表記にすることで、聴き手に意味を委ねる同音異義語での言葉遊びも、彼らのシマーなイメージやムードを引き出している。
                      日々の移ろいをフィルムに写し、グレインやブラーによって非現実的なものにすることもあれば、より克明な現実を映すこともある。今の水いらずはそんな表現をしてしまう。
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
                  <Box ml={1}>
                    <Text fontSize="14px" fontFamily="japanese2" mt={7}>
                      凄まじい衝撃。
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={3}>
                      波？あれ？
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={3}>
                      もう再生ボタンを押した時のことが思い出せないくらいのトリップ。
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={3}>
                      あぁ言葉の、脳の神経の運動としての（通り過ぎるものとしての）
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={3}>
                      本来の状態ってこんな感じだと思っている。
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={3}>
                      それを具現化するなんて。
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={3}>
                      尊敬と感謝の念で溢れています。
                    </Text>
                    <Text fontSize="16px" fontFamily="japanese2" mt={5}>
                      あだち麗三郎
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
