import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { FaInstagram, FaSpotify, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <Box height="120px" width="100%" backgroundColor="#55499b">
      <Box
        height="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <VStack color={"white"}>
          <HStack spacing={5}>
            <Link href="https://twitter.com/mizuirazu_band">
              <FaXTwitter size={25} />
            </Link>
            <Link href="https://open.spotify.com/intl-ja/artist/411mMeumIPQMuCpEWhHTf8?si=mAPEOCAvS5ikGc3JrP7UDw">
              <FaSpotify size={25} />
            </Link>
            <Link href="https://www.youtube.com/channel/UCCdmcWTu0LFW0qx3eF9GVUw">
              <FaYoutube size={25} />
            </Link>
            <Link href="https://www.instagram.com/mizuirazu_band/">
              <FaInstagram size={25} />
            </Link>
          </HStack>
          <Text fontSize="15px" color="#e8e8e8">
            Copyright © mizuirazu 2023
          </Text>
          <Text fontSize="15px" color="#e8e8e8">
            site by misaki komiyama
          </Text>
        </VStack>
      </Box>
    </Box>
  );
}
