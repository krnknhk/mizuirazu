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
  HStack,
  Spacer,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { AiFillAmazonSquare } from "react-icons/ai";
import { FaSpotify } from "react-icons/fa6";
import { SiApplemusic } from "react-icons/si";
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
                  <BreadcrumbLink href="#" fontFamily="english">
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
                      backgroundImage="url('/uturu.jpg')"
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
                      <Link href="https://www.amazon.co.jp/dp/B0CNSMRVKN?tag=linkfiregen&ie=UTF8&linkCode=as2&ascsubtag=e68b42def3ff0ca98787df672838927d&ref=dmm_acq_soc_jp_u_lfire_lp_x_e68b42def3ff0ca98787df672838927d">
                        <Box color="#00d3db">
                          <AiFillAmazonSquare size={25} />
                        </Box>
                      </Link>
                      <Link href="https://music.apple.com/jp/album/uturu-single/1717705523">
                        <Box color="#f25218">
                          <SiApplemusic size={20} />
                        </Box>
                      </Link>
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
                        fontSize="15px"
                        fontWeight="bold"
                        fontFamily="japanese"
                        color={"#55499b"}
                        as="u"
                      >
                        各種リンク
                      </Text>
                    </Box>
                  </Link>
                  <Link href="/Lyrics">
                    <Box mt={3}>
                      <Text
                        fontSize="15px"
                        fontWeight="bold"
                        fontFamily="japanese"
                        color={"#55499b"}
                        as="u"
                      >
                        歌詞を見る
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
                      下田開登(ex PICNIC YOU、跡地/rap)
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

                <GridItem colSpan={2} mt={10}>
                  <Text
                    fontSize="18px"
                    fontWeight="bold"
                    fontFamily="japanese2"
                    textColor="#55499b"
                  >
                    リリースinfo
                  </Text>
                  <Box
                    height="1px"
                    backgroundColor="gray.300"
                    width="100%"
                    my={5}
                  />
                  <Text
                    fontSize="14px"
                    fontWeight="bold"
                    fontFamily="japanese2"
                  >
                    　東京を拠点に活動する4人組バンド、水いらずがニュー・シングル「uturu」を2023
                    年 12 月 6 日にリリースする。
                  </Text>
                  <Text
                    fontSize="14px"
                    fontWeight="bold"
                    fontFamily="japanese2"
                  >
                    　前作シングル「bakeru」から1年ぶりとなる本作は、日本語の擬音語や擬態語をテーマに制作された楽曲となっている。
                    メンバー4人に加え、ライヴ・サポートを務める廣瀬謙介(gt)、山田宏也(エンヤコーラーズ/dr,per)、さらにはゲスト・ミュージシャンとして浮(vo)、下田開登(ex
                    PICNIC YOU、跡地/ rap)、マーティ・ホロベック(bass
                    solo)とのコラボレーションも果たした本作は、バンドという形態に捉われない編成で奏でられた、幾多のトラックがひしめき合う大曲。
                  </Text>
                  <Text
                    fontSize="14px"
                    fontWeight="bold"
                    fontFamily="japanese2"
                  >
                    　1年をかけてじっくりと作り上げたこの作品で、近年取り組んできた日本民謡やインドネシアのケチャをはじめとするアジアの民族音楽をバンド・サウンドに還元するアプローチを加速させるとともに、交響曲のように入り込んだ編曲と展開の妙を前作以上に突き詰めることで、日本語ポップ・ミュージックの極地を提示してみせた。
                  </Text>
                  <Text
                    fontSize="14px"
                    fontWeight="bold"
                    fontFamily="japanese2"
                  >
                    　また「uturu」ではバンド初となるDolby Atmos、360Reality
                    Audioでの音源制作も実現。“擬音語や擬態語”をコンセプトに掲げ、「ザーザー」「ポタポタ」「ドキドキ」などといった声のサンプルがちりばめられている本曲では、立体感や没入感のある“空間音響”を用いた表現を念頭にしてアレンジが進められている。
                  </Text>
                  <Text
                    fontSize="14px"
                    fontWeight="bold"
                    fontFamily="japanese2"
                  >
                    　レコーディング/ミックス・エンジニアは、数々のアーティスト作品や、劇伴、CM楽曲、海外映画の日本語ローカライズ版音声ミックスなどを手がけ、イマーシブ・オーディオにも意欲的に取り組む米津裕二郎が担当。楽曲の世界観を体現する印象的なアートワークは、羽生まゐごのMV
                    やアニメ『FLCL:
                    Shoegaze』のED監督を務めた気鋭の漫画家/アニメーター・内田晟による
                    描き下ろし作品となっている。（プレスリリースより）
                  </Text>
                  <Text
                    fontSize="15px"
                    fontWeight="bold"
                    fontFamily="japanese2"
                    mt={7}
                  >
                    水いらず 井上真（vo,gt）のコメント
                  </Text>
                  <Text
                    fontSize="14px"
                    fontWeight="bold"
                    fontFamily="japanese2"
                    mt={1}
                  >
                    　「ここ一年、「uturu」のことばかりを考えてきました。この曲では主観を切り離し、コンセプトをできるだけ構造的に表現しようと意識してましたが、結果的にメンバーそれぞれの実存というべきか、1年間感じたことや考えたことが多分に反映された作品となってしまいました。今振り返ってみるとこれで良かったと思っています。この楽曲が皆さんの血肉となることを祈っております。」
                  </Text>
                </GridItem>

                <GridItem colSpan={2} mt={10}>
                  <Text
                    fontSize="18px"
                    fontWeight="bold"
                    fontFamily="japanese2"
                    textColor="#55499b"
                  >
                    推薦コメント
                  </Text>
                  <Box
                    height="1px"
                    backgroundColor="gray.300"
                    width="100%"
                    mt={3}
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

                <GridItem colSpan={2} mt={10}>
                  <Text
                    fontSize="18px"
                    fontWeight="bold"
                    fontFamily="japanese2"
                    textColor="#55499b"
                  >
                    楽曲レビュー
                  </Text>
                  <Box
                    height="1px"
                    backgroundColor="gray.300"
                    width="100%"
                    mt={3}
                  />
                  <Box mt={3}>
                    <Text
                      fontSize="18px"
                      fontWeight="bold"
                      fontFamily="japanese2"
                      style={{ whiteSpace: "nowrap" }}
                    >
                      ▫️by Hiwatt
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={3}>
                      　音楽を語る上で、その作家が暮らす街や都市を背景に語ることは一般的であるし、逆に言えば音楽こそがその街を最も鮮明に映し出す。
                      その中でも、市井の人であるインディ・ミュージシャンの作り出す音楽
                      こそが高い解像度を持ち、音楽シーンが賑わう街の多さは、その国のカルチャーの豊かさと残酷なほどに比例する。残念なことに、日本に明確な特色を持った音楽シーンが存在するのは東京だけである。そんな東京のインディ・シーンの先人達が積み重ねてきた音楽史を慮るのと同等に、重要なのは今を作る人々だ。
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={1} mb={3}>
                      　東京を拠点とする4人組バンド、水いらずが届けてくれた新曲
                      「uturu」は、構想から約1年をかけた力作で、東京のインディ・ミュージックの分厚い歴史と未来を感じ取ることができる。
                    </Text>
                    <Link href="/ReviewHiwatt">
                      <Text
                        fontSize="18px"
                        fontWeight="bold"
                        fontFamily="japanese2"
                        textColor="#55499b"
                        as="u"
                      >
                        Read more
                      </Text>
                    </Link>
                  </Box>
                </GridItem>

                <GridItem colSpan={2} mt={10}>
                  <Text
                    fontSize="18px"
                    fontWeight="bold"
                    fontFamily="japanese2"
                    textColor="#55499b"
                  >
                    井上真(vo,gt)による覚書
                  </Text>
                  <Box
                    height="1px"
                    backgroundColor="gray.300"
                    width="100%"
                    mt={3}
                  />
                  <Box mt={3}>
                    <Text fontSize="14px" fontFamily="japanese2" mt={5} mb={7}>
                      　楽曲のミックスが終わった。長かった。楽曲が終わったという達成感というよりも、ようやく終わった、やっと次の楽曲の制作ができる。そういう気持ちのほうが強い。ただ、これからリリースされるに至って方々から制作背景や聴きどころ、その他etc
                      を訊かれることを鑑み、今この段階でどのような背景のもと、どのような心持ちで「uturu」を制作をしたのか、忘れないようにまとめておこうと思う。(2023.10)
                    </Text>
                    <Text fontSize="16px" fontFamily="japanese2" as="u">
                      楽曲を作るに至った経緯
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={5}>
                      「uturu」の制作に着手し始めたのは、去年の
                      11月頃だったと思う。
                      前作シングル「bakeru」を作っている頃から、擬態語をテーマにした楽曲を制作したいという気持ちがあった。それはいくつかの観点からである。
                    </Text>

                    <Text
                      fontSize="14px"
                      fontFamily="japanese2"
                      textColor="#55499b"
                      mt={7}
                    >
                      楽曲制作過程で作成したマインドマップ
                    </Text>
                    <AspectRatio ratio={3 / 2}>
                      <Box
                        backgroundImage="url('/mindmap.jpg')"
                        backgroundRepeat="no-repeat"
                        backgroundSize="cover"
                      />
                    </AspectRatio>

                    <Text fontSize="15px" fontFamily="japanese2" mt={7}>
                      1. 言語と音楽の関係
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={2}>
                      　スティーヴ・ライヒ「Different
                      Trains」やASA-CHANG&巡礼「花」など、言語をテーマにした音楽に興味があった。特に関心を持ったのは、何というか、“音楽が先にあるのか、言葉が先にあるのか？”という部分である。両者が相互に影響を与え合い、相互に意味を変化させることに興味があった。そういったもののラディカルな表現として、擬態語でリズムやメロディ、ないしは楽曲の背景を作ることができたら面白いのではないか？という考えから「uturu」は始まっている。
                    </Text>
                    <Text fontSize="15px" fontFamily="japanese2" mt={7}>
                      2. 日本的な音楽
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={2}>
                      　前々作シングル「su-mu」(2021年)、前作「bakeru」(2022年)をとおして、“アジア的な音楽”をコンセプトに楽曲制作を行なっている。今回もそのテーマを軸に考えようと思った。ここでいう“アジア的な音楽”とは、リズムの不規則さ、非論理性(てきとうさ)を指している。この非論理性を、擬態語をリズムにすることで、明確な形として表現できるのではないか、そう思ったのである。日本での擬態語・擬音語は各国と比較しても非常に種類が多いらしい。(それは動詞の種類が少ないことや、ざっくりとした感情を共有したいことなど、様々な説が言われている)。そういった日本語的な表現であるオノマトペをリズムとして使うことで、近作に通底しているテーマに沿ったものが作れると思った。
                    </Text>
                    <Text fontSize="15px" fontFamily="japanese2" mt={7}>
                      3. 見る、映るということ
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={2}>
                      　曲名である“uturu“=「うつる」という現在使われている日本語は、大和言葉の「うつ」が由来になっているという話がある。大和言葉の「うつ」は目に見える「現」を表わしており、そこから水や鏡に「映す」、心に情感が「移る」、文字や写真に「写す」と、転じたとのこと。
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                      　擬態語は、現実を表現しているのではなく、心というフィルターをとおした表象の表現である。古事記において、天の岩戸で天照大神が鏡で自分を見たとき、天照大神はそれを自分だと認識することができなかった。それは鏡に映った自分を見たことがなかったため、自分だとわからなかったからだ。世界の写像を、現実の今ここにあるものとして私たちの心に映すことで、初めて世界を見ることができる。擬態語もありのまま世界を表すのではなく、自分というフィルターを通した、現実として意識をした主観的な世界を表している。
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                      　また、擬態語は言語である以上、文化や環境の影響をどうしても受けてしまう。例えば、犬の鳴き声は昔は、「ワンワン」ではなく、「びょうびょう」と表現されていたらしい。それは昔の犬が現在と異なり、遠吠えをよくしていたことが影響しているらしい。つまり、そういった外部の環境や時代に影響を受ける。そういう意味では文化的、共同的な環世界でもある。
                    </Text>
                    <Text fontSize="15px" fontFamily="japanese2" mt={7}>
                      4. 主題と背景について
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={2}>
                      　擬態語はマンガによく使用され、特に背景として用いられる。それは擬態語がイメージの世界を作るのに向いているからだ。音楽における“背景”と言うと、メイン・メロディに対して、コードやリズムがそれにあたることが多いが「uturu」では擬態語も“背景”として置き、中心(主題)の部分には赤裸々な純文学的な歌詞を置こうと思った。純文学は田山花袋『蒲団』に代表されるように、私の赤裸々な感情を自然主義的に描こうとしたものが源流にある。対して、擬態語は環境をイメージのように描く。この背景(擬態語など)と主題(赤裸々な歌詞)の主従関係を変化させることで、文学の文脈の変遷的なものが描けると思った。また、主題として描くテーマはあるひとりの人間の一回きりの人生を描きたい。現実世界において、人間は生きて恋して死ぬだけである。現実にはフィクションはない。しかし、我々は色んな意味や意義を見出す。そういった人工的なフィクションに囲まれて生きている。そのリアルな主題とフィクションの背景を構造的に表現したかった。
                    </Text>
                    <Text fontSize="15px" fontFamily="japanese2" mt={7}>
                      5. 前作の主人公の続き
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={2}>
                      　前作「bakeru」の主人公(男性)は、“信仰は絶対的なものであり、神から選ばれるものである”と考えていた。対して、「uturu」の主人公は、“女性
                      = 太陽 =
                      神”を能動的に見つけていき、信仰を探しに行っている。現代人がどんな物語に必然性を持てるのか?
                      それはやはり恋愛であることが多い。前作の主人公の続きについて今作では語られている(結局ラストで死んでしまうことになるが)。
                    </Text>
                    <Text fontSize="15px" fontFamily="japanese2" mt={7}>
                      6. 楽曲のリファレンスについて
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={2}>
                      　Aメロの擬態語のリズムはミャンマーの民族音楽より、リズムの変則性と曖昧性を参考にした。また、サビ2の構成の参考として
                      セオ・クロッカー「Hero Stomp || A Future
                      Past」を聴いたり、空間オーディオの音像としてスローソン・マローン
                      1『EXCELSIOR』やビーチ・ボーイズ『Petsounds』などを参考にした。
                    </Text>
                    <Text fontSize="15px" fontFamily="japanese2" mt={7}>
                      7. 歌詞について
                    </Text>
                    <Text fontSize="15px" fontFamily="japanese2" mt={3}>
                      {"<Aメロ>"}
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                      　“太陽が上がる=理想の女性に出会う”というストーリーにしたかったため、A
                      メロ時点の時刻がわかる歌詞にした。また、女性を歩きながら探しているということもわかるようにした。
                    </Text>
                    <Text fontSize="15px" fontFamily="japanese2" mt={3}>
                      {"<サビ1>"}
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                      　“朝になる = 太陽が上がる =
                      理想の女性が来る”という構造になっており、期待感を表している。後半は、“うつしよ(現し世)がフィルムに写る
                      = 自分という鏡が映す”というテーマを描いている。
                    </Text>
                    <Text fontSize="15px" fontFamily="japanese2" mt={3}>
                      {"<Bメロ~ラップ>"}
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                      　私的な赤裸々な歌詞にしてもらった。
                    </Text>
                    <Text fontSize="15px" fontFamily="japanese2" mt={3}>
                      {"<Cメロ~サビ2>"}
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                      　同じく赤裸々な私的な歌詞。他者としての女性、事物としての女性、神としての女性......いろいろな気持ち悪い感情が、“好き”という言葉に収束していく。
                    </Text>
                    <Text fontSize="15px" fontFamily="japanese2" mt={3}>
                      {"<Dメロ>"}
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                      　好きという気持ち。一緒にいたいという気持ち。そんなことは起こらず、死ぬ。上述の通り、人間の一回の人生を描くために、最後死ぬという結論にした。
                    </Text>
                  </Box>
                </GridItem>

                <GridItem colSpan={2} mt={10}>
                  <VStack>
                    <Text
                      fontSize="16px"
                      fontFamily="japanese2"
                      textColor="#55499b"
                      as="u"
                    >
                      影響を受けた楽曲プレイリスト
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2">
                      ※随時更新中!
                    </Text>
                  </VStack>
                  <Box mt={3}>
                    <iframe
                      src="https://open.spotify.com/embed/playlist/3obWZr6BRpeiVh0ZP5kVam?utm_source=generator"
                      width="100%"
                      height="352"
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                    ></iframe>
                  </Box>
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
                <BreadcrumbLink href="#" fontFamily="english">
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
                      backgroundImage="url('/uturu.jpg')"
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
                      <Link href="https://www.amazon.co.jp/dp/B0CNSMRVKN?tag=linkfiregen&ie=UTF8&linkCode=as2&ascsubtag=e68b42def3ff0ca98787df672838927d&ref=dmm_acq_soc_jp_u_lfire_lp_x_e68b42def3ff0ca98787df672838927d">
                        <Box color="#00d3db">
                          <AiFillAmazonSquare size={25} />
                        </Box>
                      </Link>
                      <Link href="https://music.apple.com/jp/album/uturu-single/1717705523">
                        <Box color="#f25218">
                          <SiApplemusic size={20} />
                        </Box>
                      </Link>
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
                        as="u"
                      >
                        各種リンク
                      </Text>
                    </Box>
                  </Link>
                  <Link href="/Lyrics">
                    <Box mt={3}>
                      <Text
                        fontSize="15px"
                        fontWeight="bold"
                        fontFamily="japanese"
                        color={"#55499b"}
                        as="u"
                      >
                        歌詞を見る
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
                      下田開登(ex PICNIC YOU、跡地/rap)
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
                  <Box
                    height="1px"
                    backgroundColor="gray.300"
                    width="100%"
                    mt={3}
                  />
                  <Text
                    fontSize="15px"
                    fontWeight="bold"
                    fontFamily="japanese2"
                    mt={5}
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
                    PICNIC YOU、跡地/ rap)、マーティ・ホロベック(bass
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
                    描き下ろし作品となっている。（プレスリリースより）
                  </Text>
                  <Text
                    fontSize="16px"
                    fontWeight="bold"
                    fontFamily="japanese2"
                    mt={7}
                  >
                    水いらず 井上真（vo,gt）のコメント
                  </Text>
                  <Text
                    fontSize="15px"
                    fontWeight="bold"
                    fontFamily="japanese2"
                    mt={1}
                  >
                    　「ここ一年、「uturu」のことばかりを考えてきました。この曲では主観を切り離し、コンセプトをできるだけ構造的に表現しようと意識してましたが、結果的にメンバーそれぞれの実存というべきか、1年間感じたことや考えたことが多分に反映された作品となってしまいました。今振り返ってみるとこれで良かったと思っています。この楽曲が皆さんの血肉となることを祈っております。」
                  </Text>
                </GridItem>

                <GridItem colSpan={12}>
                  <Text
                    fontSize="18px"
                    fontWeight="bold"
                    fontFamily="japanese2"
                    textColor="#55499b"
                  >
                    推薦コメント
                  </Text>
                  <Box
                    height="1px"
                    backgroundColor="gray.300"
                    width="100%"
                    mt={3}
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

                <GridItem colSpan={12}>
                  <Text
                    fontSize="18px"
                    fontWeight="bold"
                    fontFamily="japanese2"
                    textColor="#55499b"
                  >
                    楽曲レビュー
                  </Text>
                  <Box
                    height="1px"
                    backgroundColor="gray.300"
                    width="100%"
                    mt={3}
                  />
                  <Box mt={3}>
                    <Text
                      fontSize="18px"
                      fontWeight="bold"
                      fontFamily="japanese2"
                      style={{ whiteSpace: "nowrap" }}
                    >
                      ▫️by Hiwatt
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={3}>
                      　音楽を語る上で、その作家が暮らす街や都市を背景に語ることは一般的であるし、逆に言えば音楽こそがその街を最も鮮明に映し出す。
                      その中でも、市井の人であるインディ・ミュージシャンの作り出す音楽
                      こそが高い解像度を持ち、音楽シーンが賑わう街の多さは、その国のカルチャーの豊かさと残酷なほどに比例する。残念なことに、日本に明確な特色を持った音楽シーンが存在するのは東京だけである。そんな東京のインディ・シーンの先人達が積み重ねてきた音楽史を慮るのと同等に、重要なのは今を作る人々だ。
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={1} mb={3}>
                      　東京を拠点とする4人組バンド、水いらずが届けてくれた新曲
                      「uturu」は、構想から約1年をかけた力作で、東京のインディ・ミュージックの分厚い歴史と未来を感じ取ることができる。
                    </Text>
                    <Link href="/ReviewHiwatt">
                      <Text
                        fontSize="18px"
                        fontWeight="bold"
                        fontFamily="japanese2"
                        textColor="#55499b"
                        as="u"
                      >
                        Read more
                      </Text>
                    </Link>
                  </Box>
                </GridItem>

                <GridItem colSpan={12} mt={10}>
                  <Text
                    fontSize="18px"
                    fontWeight="bold"
                    fontFamily="japanese2"
                    textColor="#55499b"
                  >
                    井上真(vo,gt)による覚書
                  </Text>
                  <Box
                    height="1px"
                    backgroundColor="gray.300"
                    width="100%"
                    mt={3}
                  />
                  <Box mt={3}>
                    <Text fontSize="14px" fontFamily="japanese2" mt={5} mb={7}>
                      　楽曲のミックスが終わった。長かった。楽曲が終わったという達成感というよりも、ようやく終わった、やっと次の楽曲の制作ができる。そういう気持ちのほうが強い。ただ、これからリリースされるに至って方々から制作背景や聴きどころ、その他etc
                      を訊かれることを鑑み、今この段階でどのような背景のもと、どのような心持ちで「uturu」を制作をしたのか、忘れないようにまとめておこうと思う。(2023.10)
                    </Text>
                    <Text fontSize="16px" fontFamily="japanese2" as="u">
                      楽曲を作るに至った経緯
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={5}>
                      「uturu」の制作に着手し始めたのは、去年の
                      11月頃だったと思う。
                      前作シングル「bakeru」を作っている頃から、擬態語をテーマにした楽曲を制作したいという気持ちがあった。それはいくつかの観点からである。
                    </Text>

                    <Text
                      fontSize="14px"
                      fontFamily="japanese2"
                      textColor="#55499b"
                      mt={7}
                    >
                      楽曲制作過程で作成したマインドマップ
                    </Text>
                    <AspectRatio ratio={3 / 2}>
                      <Box
                        backgroundImage="url('/mindmap.jpg')"
                        backgroundRepeat="no-repeat"
                        backgroundSize="cover"
                      />
                    </AspectRatio>

                    <Text fontSize="15px" fontFamily="japanese2" mt={7}>
                      1. 言語と音楽の関係
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={2}>
                      　スティーヴ・ライヒ「Different
                      Trains」やASA-CHANG&巡礼「花」など、言語をテーマにした音楽に興味があった。特に関心を持ったのは、何というか、“音楽が先にあるのか、言葉が先にあるのか？”という部分である。両者が相互に影響を与え合い、相互に意味を変化させることに興味があった。そういったもののラディカルな表現として、擬態語でリズムやメロディ、ないしは楽曲の背景を作ることができたら面白いのではないか？という考えから「uturu」は始まっている。
                    </Text>
                    <Text fontSize="15px" fontFamily="japanese2" mt={7}>
                      2. 日本的な音楽
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={2}>
                      　前々作シングル「su-mu」(2021年)、前作「bakeru」(2022年)をとおして、“アジア的な音楽”をコンセプトに楽曲制作を行なっている。今回もそのテーマを軸に考えようと思った。ここでいう“アジア的な音楽”とは、リズムの不規則さ、非論理性(てきとうさ)を指している。この非論理性を、擬態語をリズムにすることで、明確な形として表現できるのではないか、そう思ったのである。日本での擬態語・擬音語は各国と比較しても非常に種類が多いらしい。(それは動詞の種類が少ないことや、ざっくりとした感情を共有したいことなど、様々な説が言われている)。そういった日本語的な表現であるオノマトペをリズムとして使うことで、近作に通底しているテーマに沿ったものが作れると思った。
                    </Text>
                    <Text fontSize="15px" fontFamily="japanese2" mt={7}>
                      3. 見る、映るということ
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={2}>
                      　曲名である“uturu“=「うつる」という現在使われている日本語は、大和言葉の「うつ」が由来になっているという話がある。大和言葉の「うつ」は目に見える「現」を表わしており、そこから水や鏡に「映す」、心に情感が「移る」、文字や写真に「写す」と、転じたとのこと。
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                      　擬態語は、現実を表現しているのではなく、心というフィルターをとおした表象の表現である。古事記において、天の岩戸で天照大神が鏡で自分を見たとき、天照大神はそれを自分だと認識することができなかった。それは鏡に映った自分を見たことがなかったため、自分だとわからなかったからだ。世界の写像を、現実の今ここにあるものとして私たちの心に映すことで、初めて世界を見ることができる。擬態語もありのまま世界を表すのではなく、自分というフィルターを通した、現実として意識をした主観的な世界を表している。
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                      　また、擬態語は言語である以上、文化や環境の影響をどうしても受けてしまう。例えば、犬の鳴き声は昔は、「ワンワン」ではなく、「びょうびょう」と表現されていたらしい。それは昔の犬が現在と異なり、遠吠えをよくしていたことが影響しているらしい。つまり、そういった外部の環境や時代に影響を受ける。そういう意味では文化的、共同的な環世界でもある。
                    </Text>
                    <Text fontSize="15px" fontFamily="japanese2" mt={7}>
                      4. 主題と背景について
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={2}>
                      　擬態語はマンガによく使用され、特に背景として用いられる。それは擬態語がイメージの世界を作るのに向いているからだ。音楽における“背景”と言うと、メイン・メロディに対して、コードやリズムがそれにあたることが多いが「uturu」では擬態語も“背景”として置き、中心(主題)の部分には赤裸々な純文学的な歌詞を置こうと思った。純文学は田山花袋『蒲団』に代表されるように、私の赤裸々な感情を自然主義的に描こうとしたものが源流にある。対して、擬態語は環境をイメージのように描く。この背景(擬態語など)と主題(赤裸々な歌詞)の主従関係を変化させることで、文学の文脈の変遷的なものが描けると思った。また、主題として描くテーマはあるひとりの人間の一回きりの人生を描きたい。現実世界において、人間は生きて恋して死ぬだけである。現実にはフィクションはない。しかし、我々は色んな意味や意義を見出す。そういった人工的なフィクションに囲まれて生きている。そのリアルな主題とフィクションの背景を構造的に表現したかった。
                    </Text>
                    <Text fontSize="15px" fontFamily="japanese2" mt={7}>
                      5. 前作の主人公の続き
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={2}>
                      　前作「bakeru」の主人公(男性)は、“信仰は絶対的なものであり、神から選ばれるものである”と考えていた。対して、「uturu」の主人公は、“女性
                      = 太陽 =
                      神”を能動的に見つけていき、信仰を探しに行っている。現代人がどんな物語に必然性を持てるのか?
                      それはやはり恋愛であることが多い。前作の主人公の続きについて今作では語られている(結局ラストで死んでしまうことになるが)。
                    </Text>
                    <Text fontSize="15px" fontFamily="japanese2" mt={7}>
                      6. 楽曲のリファレンスについて
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={2}>
                      　Aメロの擬態語のリズムはミャンマーの民族音楽より、リズムの変則性と曖昧性を参考にした。また、サビ2の構成の参考として
                      セオ・クロッカー「Hero Stomp || A Future
                      Past」を聴いたり、空間オーディオの音像としてスローソン・マローン
                      1『EXCELSIOR』やビーチ・ボーイズ『Petsounds』などを参考にした。
                    </Text>
                    <Text fontSize="15px" fontFamily="japanese2" mt={7}>
                      7. 歌詞について
                    </Text>
                    <Text fontSize="15px" fontFamily="japanese2" mt={3}>
                      {"<Aメロ>"}
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                      　“太陽が上がる=理想の女性に出会う”というストーリーにしたかったため、A
                      メロ時点の時刻がわかる歌詞にした。また、女性を歩きながら探しているということもわかるようにした。
                    </Text>
                    <Text fontSize="15px" fontFamily="japanese2" mt={3}>
                      {"<サビ1>"}
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                      　“朝になる = 太陽が上がる =
                      理想の女性が来る”という構造になっており、期待感を表している。後半は、“うつしよ(現し世)がフィルムに写る
                      = 自分という鏡が映す”というテーマを描いている。
                    </Text>
                    <Text fontSize="15px" fontFamily="japanese2" mt={3}>
                      {"<Bメロ~ラップ>"}
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                      　私的な赤裸々な歌詞にしてもらった。
                    </Text>
                    <Text fontSize="15px" fontFamily="japanese2" mt={3}>
                      {"<Cメロ~サビ2>"}
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                      　同じく赤裸々な私的な歌詞。他者としての女性、事物としての女性、神としての女性......いろいろな気持ち悪い感情が、“好き”という言葉に収束していく。
                    </Text>
                    <Text fontSize="15px" fontFamily="japanese2" mt={3}>
                      {"<Dメロ>"}
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2" mt={1}>
                      　好きという気持ち。一緒にいたいという気持ち。そんなことは起こらず、死ぬ。上述の通り、人間の一回の人生を描くために、最後死ぬという結論にした。
                    </Text>
                  </Box>
                </GridItem>

                <GridItem colSpan={12} mt={10}>
                  <VStack>
                    <Text
                      fontSize="16px"
                      fontFamily="japanese2"
                      textColor="#55499b"
                      as="u"
                    >
                      影響を受けた楽曲プレイリスト
                    </Text>
                    <Text fontSize="14px" fontFamily="japanese2">
                      ※随時更新中!
                    </Text>
                  </VStack>
                  <Box mt={3}>
                    <iframe
                      src="https://open.spotify.com/embed/playlist/3obWZr6BRpeiVh0ZP5kVam?utm_source=generator"
                      width="100%"
                      height="352"
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                    ></iframe>
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
