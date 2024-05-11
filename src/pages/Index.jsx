import { Box, Button, Container, Flex, Heading, HStack, Image, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="header" justifyContent="space-between" alignItems="center" p={4} borderBottom="1px" borderColor="gray.200">
        <Heading size="lg">SaaS Company</Heading>
        <HStack as="nav" spacing={4}>
          <Link href="#features">Features</Link>
          <Link href="#pricing">Pricing</Link>
          <Link href="#about">About</Link>
          <Link href="#contact">Contact</Link>
        </HStack>
      </Flex>

      <VStack spacing={8} py={10} textAlign="center">
        <Heading>Welcome to Our SaaS Platform!</Heading>
        <Text fontSize="xl">Empowering your business with our innovative solutions.</Text>
        <Button colorScheme="blue" size="lg" leftIcon={<FaRocket />}>
          Get Started
        </Button>
      </VStack>

      <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} p={4}>
        <Box>
          <Image src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2V8ZW58MHx8fHwxNzE1MzU3OTgyfDA&ixlib=rb-4.0.3&q=80&w=1080" />
          <Text mt={2}>Streamline your operations with our tools.</Text>
        </Box>
        <Box>
          <Image src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwwfHx8fDE3MTU0MTU5MTB8MA&ixlib=rb-4.0.3&q=80&w=1080" />
          <Text mt={2}>Enhance team collaboration and efficiency.</Text>
        </Box>
      </SimpleGrid>

      <Flex as="footer" justifyContent="space-between" p={4} borderTop="1px" borderColor="gray.200">
        <Text>© 2023 SaaS Company</Text>
        <HStack spacing={4}>
          <Link href="#privacy">Privacy Policy</Link>
          <Link href="#terms">Terms of Service</Link>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Index;
