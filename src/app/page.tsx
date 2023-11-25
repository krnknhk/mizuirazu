"use client";

import { Button, Flex, Spinner } from "@chakra-ui/react";
import { useState } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { MdOutlinePlayCircle } from "react-icons/md";
import useSound from "use-sound";

export default function Home() {
  const soundFiles = ["/uturu_edit.mp3", "/sumu_edit.mp3", "/bakeru_edit.mp3"];
  const [currentSound, setCurrentSound] = useState(0);
  const [isClickable, setIsClickable] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(true);
  const [backgroundStyle, setBackgroundStyle] = useState({ opacity: 0.3 });
  const [cursorStyle, setCursorStyle] = useState({});

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

  const plays = [play1, play2, play3];
  const stops = [stop1, stop2, stop3];

  const handleScreenClick = () => {
    if (!isClickable) return;

    stops.forEach((stop) => stop());
    const nextSound = (currentSound + 1) % soundFiles.length;
    setCurrentSound(nextSound);
    plays[nextSound]();
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

  const isLoading =
    sound1 === undefined || sound2 === undefined || sound3 === undefined;

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
    >
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
