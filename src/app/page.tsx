"use client";

import { Button, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import useSound from "use-sound";

export default function Home() {
  const soundFiles = ["/uturu_edit.mp3", "/sumu_edit.mp3", "/bakeru_edit.mp3"];
  const [currentSound, setCurrentSound] = useState(0);

  const [play1, { stop: stop1 }] = useSound(soundFiles[0], { loop: true });
  const [play2, { stop: stop2 }] = useSound(soundFiles[1], { loop: true });
  const [play3, { stop: stop3 }] = useSound(soundFiles[2], { loop: true });

  const plays = [play1, play2, play3];
  const stops = [stop1, stop2, stop3];

  const handleScreenClick = () => {
    stops.forEach((stop) => stop());

    const nextSound = (currentSound + 1) % soundFiles.length;
    setCurrentSound(nextSound);
    plays[nextSound]();
  };

  const handleStop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    stops.forEach((stop) => stop());
  };

  return (
    <Flex
      height="100vh"
      alignItems="center"
      justifyContent="center"
      backgroundImage="url('/20210828_9.jpg')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      onClick={handleScreenClick}
    >
      <Button m={2}>Click anywhere to play sound</Button>
      <Button onClick={handleStop} m={2}>
        Stop All Sounds
      </Button>
    </Flex>
  );
}
