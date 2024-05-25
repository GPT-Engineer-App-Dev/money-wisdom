import { Box, Container, Flex, Heading, Text, VStack, HStack, Link, Spacer } from "@chakra-ui/react";
import { FaNewspaper, FaChartLine, FaCommentDots } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Header */}
      <Box bg="#003366" color="white" py={4} px={8}>
        <Heading as="h1" size="xl">Financial Times</Heading>
      </Box>

      {/* Navigation Bar */}
      <Flex bg="#004080" color="white" py={2} px={8} align="center">
        <HStack spacing={8}>
          <Link href="#top-news" fontSize="lg">Top News</Link>
          <Link href="#market-data" fontSize="lg">Market Data</Link>
          <Link href="#opinion" fontSize="lg">Opinion</Link>
        </HStack>
        <Spacer />
        <HStack spacing={4}>
          <Link href="#" fontSize="lg">Login</Link>
          <Link href="#" fontSize="lg">Subscribe</Link>
        </HStack>
      </Flex>

      {/* Main Content */}
      <VStack spacing={8} py={8} px={8} align="stretch">
        {/* Top News Section */}
        <Box id="top-news">
          <Heading as="h2" size="lg" mb={4}><FaNewspaper /> Top News</Heading>
          <Text>Latest news articles will be displayed here.</Text>
        </Box>

        {/* Market Data Section */}
        <Box id="market-data">
          <Heading as="h2" size="lg" mb={4}><FaChartLine /> Market Data</Heading>
          <Text>Market data and charts will be displayed here.</Text>
        </Box>

        {/* Opinion Section */}
        <Box id="opinion">
          <Heading as="h2" size="lg" mb={4}><FaCommentDots /> Opinion</Heading>
          <Text>Opinion pieces and editorials will be displayed here.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;