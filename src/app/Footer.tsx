import { Box, Text, VStack } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box height="120px" width="100%" backgroundColor="#55499b">
      <Box
        height="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <VStack>
          <Text fontSize="16px" color="#e8e8e8">
            Copyright © mizuirazu 2023
          </Text>
          <Text fontSize="16px" color="#e8e8e8">
            site by misaki komiyama
          </Text>
        </VStack>
      </Box>
    </Box>
  );
}
