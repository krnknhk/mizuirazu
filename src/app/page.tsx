"use client";

import { Box, Button, Flex, IconButton, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import useSound from "use-sound";
import "./style.css";
import { mediaQuery, useMediaQuery } from "./useMediaQuery";

export default function Home() {
  const soundFiles = ["/uturu_edit.mp3", "/sumu_edit.mp3", "/bakeru_edit.mp3"];
  const [currentSound, setCurrentSound] = useState(0);
  const [currentJpg, setCurrentJpg] = useState(0);
  const [currentBackground, setCurrentBackground] = useState("/uturu.jpg");
  const [isClickable, setIsClickable] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(true);
  const [cursorStyle, setCursorStyle] = useState({});

  const [play1, { stop: stop1 }] = useSound(soundFiles[0], {
    loop: true,
    volume: isMuted ? 0 : 1,
  });
  const [play2, { stop: stop2 }] = useSound(soundFiles[1], {
    loop: true,
    volume: isMuted ? 0 : 1,
  });
  const [play3, { stop: stop3 }] = useSound(soundFiles[2], {
    loop: true,
    volume: isMuted ? 0 : 1,
  });
  const [play4, { stop: stop4 }] = useSound("/uturu_edit2.mp3", {
    loop: true,
    volume: isMuted ? 0 : 1,
  });

  const plays = [play1, play2, play3];
  const stops = [stop1, stop2, stop3, stop4];
  const jpgFiles = ["/20210828_1.jpg", "/20210828_9.jpg", "/20210828_6.jpg"];

  const handleScreenClick = () => {
    if (!isClickable) return;

    stops.forEach((stop) => stop());
    const nextSound = (currentSound + 1) % soundFiles.length;
    setCurrentSound(nextSound);
    const nextJpg = (currentJpg + 1) % jpgFiles.length;
    setCurrentJpg(nextJpg);
    setCurrentBackground(jpgFiles[currentJpg]);
    plays[nextSound]();
  };

  const handleTitleClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // イベント伝播を止める

    stops.forEach((stop) => stop());
    play4();
    setCurrentBackground("/20210828_50.jpg");
  };

  const handleMenuClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // イベント伝播を止める

    stops.forEach((stop) => stop());
  };

  const handlePlay = () => {
    setShowPlayButton(false);
    setIsClickable(true);
    plays[currentSound]();
    setCurrentBackground("/20210828_6.jpg");
    setCursorStyle({ cursor: "pointer" });
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation(); // イベント伝播を止める
    setIsMuted(!isMuted);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const preJpgFiles = [
      "/20210828_1.jpg",
      "/20210828_6.jpg",
      "/20210828_9.jpg",
      "/20210828_50.jpg",
      "/uturu.jpg",
    ];

    const preloadImages = () => {
      preJpgFiles.forEach((imageUrl) => {
        const img = new Image();
        img.src = imageUrl;
      });
    };

    preloadImages();
  }, []);

  const isPc = useMediaQuery(mediaQuery.pc);

  if (isPc) {
    return (
      <Box
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundImage={currentBackground}
        height="100vh"
        overflow={"hidden"}
        style={cursorStyle}
        onClick={handleScreenClick}
      >
        <Box maxH="100vh" position="absolute">
          <VStack position="relative" top={30} left={50}>
            <Box onClick={handleTitleClick}>
              <Text
                fontFamily="japanese3"
                fontSize="4xl"
                color="#e88700"
                fontWeight="bold"
                textShadow="2px 2px 4px rgba(0, 0, 0, 1)"
                className="shake-on-hover"
                cursor="pointer"
                _hover={{ color: "rgba(232, 135, 0, 0.7)" }}
                onClick={toggleMenu}
                mb={3}
              >
                水いらず
              </Text>
            </Box>
            {isMenuOpen && (
              <VStack
                bg="transparent"
                fontSize="2xl"
                fontWeight="bold"
                color="black"
                spacing={7}
                onClick={handleMenuClick}
                className="menu-item"
                textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)"
                fontFamily={"english"}
              >
                <Link href="/UturuTemp">
                  <Text fontFamily="japanes1" _hover={{ color: "#e88700" }}>
                    特設ページ - uturu
                  </Text>
                </Link>
                <Link href="/About">
                  <Text _hover={{ color: "#e88700" }}>About</Text>
                </Link>
                <Link href="/Discography">
                  <Text _hover={{ color: "#e88700" }}>Discography</Text>
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
        </Box>
        <Flex justifyContent="center" alignItems="center" height="100vh">
          {showPlayButton && (
            <Button
              leftIcon={<FaVolumeUp size={100} />}
              bg={"transparent"}
              color={"#e88700"}
              _hover={{
                color: "rgba(232, 135, 0, 0.6)",
                bg: "transparent",
              }}
              onClick={handlePlay}
            ></Button>
          )}
          {!showPlayButton && (
            <Button
              onClick={toggleMute}
              m={2}
              leftIcon={
                isMuted ? <FaVolumeUp size={50} /> : <FaVolumeMute size={50} />
              }
              bg={"transparent"}
              _hover={{ color: "#e88700", bg: "transparent" }}
            ></Button>
          )}
        </Flex>
      </Box>
    );
  } else {
    return (
      <Box
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundImage={currentBackground}
        height="100vh"
        overflow={"hidden"}
        style={cursorStyle}
        onClick={handleScreenClick}
      >
        <Box maxH="100vh" position="absolute">
          <Box position="relative" top={30} left={30}>
            <Text
              fontFamily="japanese3"
              color="rgba(232, 135, 0, 0.7)"
              fontSize="2xl"
              fontWeight="bold"
              textShadow="2px 2px 4px rgba(0, 0, 0, 1)"
            >
              水いらず
            </Text>
          </Box>
        </Box>

        <Box onClick={handleTitleClick}>
          <IconButton
            icon={<GiHamburgerMenu size={30} />}
            aria-label="Open Menu"
            color={"#e88700"}
            position="fixed"
            right="30px"
            bottom="30px"
            zIndex={100}
            onClick={toggleMenu}
          />
        </Box>
        {isMenuOpen && (
          <Box
            position="fixed"
            top={0}
            left={0}
            width="100%"
            height="100%"
            bg="rgba(0, 0, 0, 0.5)"
            zIndex={1}
          >
            <VStack
              fontSize="2xl"
              fontWeight="bold"
              color="white"
              spacing={7}
              className="menu-item"
              textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)"
              fontFamily={"english"}
              height="100%"
              display="flex"
              justifyContent="center"
              onClick={handleMenuClick}
            >
              <Link href="/UturuTemp">
                <Text fontFamily="japanese1" _hover={{ color: "#e88700" }}>
                  特設ページ - uturu
                </Text>
              </Link>
              <Link href="/About">
                <Text _hover={{ color: "#e88700" }}>About</Text>
              </Link>
              <Link href="/Discography">
                <Text _hover={{ color: "#e88700" }}>Discography</Text>
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
          </Box>
        )}
        <Flex justifyContent="center" alignItems="center" height="100vh">
          {showPlayButton && (
            <Button
              leftIcon={<FaVolumeUp size={70} />}
              color={"#e88700"}
              bg={"transparent"}
              onClick={handlePlay}
            ></Button>
          )}
          {!showPlayButton && (
            <Button
              leftIcon={
                isMuted ? <FaVolumeUp size={40} /> : <FaVolumeMute size={40} />
              }
              color={"black"}
              bg={"transparent"}
              _hover={{ bg: "transparent" }}
              onClick={toggleMute}
              m={2}
            ></Button>
          )}
        </Flex>
      </Box>
    );
  }
}
