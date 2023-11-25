"use client";

import { Box, Button, Flex, Spinner, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { MdOutlinePlayCircle } from "react-icons/md";
import useSound from "use-sound";
import "./style.css";

export default function Home() {
  const soundFiles = ["/uturu_edit.mp3", "/sumu_edit.mp3", "/bakeru_edit.mp3"];
  const [currentSound, setCurrentSound] = useState(0);
  const [isClickable, setIsClickable] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(true);
  const [backgroundStyle, setBackgroundStyle] = useState({ opacity: 0.3 });
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

  const handlePlay = () => {
    setShowPlayButton(false);
    setIsClickable(true);
    plays[currentSound]();
    setBackgroundStyle({ opacity: 1 });
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
    <Flex
      height="100vh"
      alignItems="center"
      justifyContent="center"
      backgroundImage="url('/20210828_9.jpg')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      style={{ ...backgroundStyle, ...cursorStyle }}
      onClick={handleScreenClick}
      position="relative"
    >
      <VStack
        position="absolute"
        top={0}
        left={0}
        alignItems="flex-start"
        m={4}
      >
        <Box onClick={handleTitleClick}>
          <Text
            fontSize="5xl"
            fontWeight="extrabold"
            color="black"
            onClick={toggleMenu}
            cursor="pointer"
            ml={12}
            mt={10}
            fontFamily="Zen Kaku Gothic New, sans-serif"
            className="text-shadow"
          >
            水いらず
          </Text>
        </Box>

        {isMenuOpen && (
          <VStack bg="transparent" width="100%" ml={5} spacing={2}>
            <Text
              p={4}
              fontSize="3xl"
              fontWeight="bold"
              color="black"
              className="menu-item"
            >
              News
            </Text>
            <Text
              p={4}
              fontSize="3xl"
              fontWeight="bold"
              color="black"
              className="menu-item"
            >
              About
            </Text>
            <Text
              p={4}
              fontSize="3xl"
              fontWeight="bold"
              color="black"
              className="menu-item"
            >
              Discography
            </Text>
            <Text
              p={4}
              fontSize="3xl"
              fontWeight="bold"
              color="black"
              className="menu-item"
            >
              Live
            </Text>
          </VStack>
        )}
      </VStack>
      {isLoading ? (
        <Spinner size="xl" />
      ) : (
        <>
          {showPlayButton && (
            <Button
              onClick={handlePlay}
              leftIcon={<MdOutlinePlayCircle size={130} />}
              bg={"transparent"}
              _hover={{ color: "#FFFFFF", bg: "transparent" }}
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
              _hover={{ bg: "transparent" }}
            ></Button>
          )}
        </>
      )}
    </Flex>
  );
}
