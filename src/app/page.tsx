"use client";

import { Box, Button, Flex, Spinner, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import useSound from "use-sound";
import "./style.css";

export default function Home() {
  const soundFiles = ["/uturu_edit.mp3", "/sumu_edit.mp3", "/bakeru_edit.mp3"];
  const [currentSound, setCurrentSound] = useState(0);
  const [isClickable, setIsClickable] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(true);
  const [cursorStyle, setCursorStyle] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const [play1, { stop: stop1, sound: sound1 }] = useSound(soundFiles[0], {
    loop: true,
    volume: isMuted ? 0 : 1,
  });
  const [play2, { stop: stop2, sound: sound2 }] = useSound(soundFiles[1], {
    loop: true,
    volume: isMuted ? 0 : 1,
  });
  const [play3, { stop: stop3, sound: sound3 }] = useSound(soundFiles[2], {
    loop: true,
    volume: isMuted ? 0 : 1,
  });
  const [play4, { stop: stop4, sound: sound4 }] = useSound("/uturu_edit2.mp3", {
    loop: true,
    volume: isMuted ? 0 : 1,
  });

  const plays = [play1, play2, play3];
  const stops = [stop1, stop2, stop3, stop4];
  const sounds = [sound1, sound2, sound3, sound4];

  const handleScreenClick = () => {
    if (!isClickable) return;

    stops.forEach((stop) => stop());
    const nextSound = (currentSound + 1) % soundFiles.length;
    setCurrentSound(nextSound);
    plays[nextSound]();
  };

  const handleTitleClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // イベント伝播を止める
    if (!isClickable) return;

    stops.forEach((stop) => stop());
    play4();
  };

  const handleMenuClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // イベント伝播を止める
    if (!isClickable) return;

    stops.forEach((stop) => stop());
  };

  const handlePlay = () => {
    setShowPlayButton(false);
    setIsClickable(true);
    plays[currentSound]();
    setCursorStyle({ cursor: "pointer" });
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (sounds) {
      setIsLoading(false);
    }
  }, [sounds]);

  return (
    <Box
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundImage="url('/20210828_9.jpg')"
      height="100vh"
      overflow={"hidden"}
      style={cursorStyle}
      onClick={handleScreenClick}
    >
      <Box maxH="100vh" position="absolute">
        <VStack position="relative" top={30} left={50}>
          <Box onClick={handleTitleClick}>
            <Text
              fontSize="4xl"
              color="black"
              fontFamily="Zen Kaku Gothic New, sans-serif"
              textShadow="2px 2px 4px rgba(0, 0, 0, 1)"
              className="shake-on-hover"
              cursor="pointer"
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
            >
              <Link href="/About">
                <Text
                  _hover={{ color: "#e88700" }}
                  textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)"
                >
                  About
                </Text>
              </Link>
              <Link href="/Discography">
                <Text
                  _hover={{ color: "#e88700" }}
                  textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)"
                >
                  Discography
                </Text>
              </Link>
              <Text
                _hover={{ color: "#e88700" }}
                textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)"
              >
                Live
              </Text>
              <Link href="https://www.youtube.com/@user-qi9nl3ru1l/videos">
                <Text
                  _hover={{ color: "#e88700" }}
                  textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)"
                >
                  Movie
                </Text>
              </Link>
              <Link href="https://mizuirazuband.stores.jp/">
                <Text
                  _hover={{ color: "#e88700" }}
                  textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)"
                >
                  Store
                </Text>
              </Link>
            </VStack>
          )}
        </VStack>
      </Box>
      <Flex justifyContent="center" alignItems="center" height="100vh">
        {isLoading ? (
          <Spinner size="xl" />
        ) : (
          <>
            {showPlayButton && (
              <Button
                leftIcon={<FaVolumeUp size={100} />}
                bg={"transparent"}
                _hover={{ color: "#e88700", bg: "transparent" }}
                onClick={handlePlay}
              ></Button>
            )}
            {!showPlayButton && (
              <Button
                onClick={toggleMute}
                m={2}
                leftIcon={
                  isMuted ? (
                    <FaVolumeUp size={50} />
                  ) : (
                    <FaVolumeMute size={50} />
                  )
                }
                bg={"transparent"}
                _hover={{ color: "#e88700", bg: "transparent" }}
              ></Button>
            )}
          </>
        )}
      </Flex>
    </Box>
  );
}
