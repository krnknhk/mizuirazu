import { Box, Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Box>水いらず</Box>
      <Flex height="100vh" alignItems="center" justifyContent="center">
        <Flex
          direction="column"
          background="gray.100"
          padding={12}
          rounded={6}
        ></Flex>
      </Flex>
    </>
  );
}
