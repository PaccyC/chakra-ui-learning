import { Box, Container, Heading, Text } from "@chakra-ui/react";

export default function Dashboard() {
  return (
    <Container as="section">
      <Heading my="30px" p="10px">Chackra UI</Heading>
      <Text ml="30px" color="blue.300">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Ut voluptatum excepturi ad placeat amet eum iusto accusamus. 
        Earum animi aliquam sint quod amet veritatis fugit? Dolore suscipit neque voluptates placeat?</Text>

        <Box my="30px" p="20px" bg="yellow">
          <Text color="black">The text is the box</Text>
        </Box>
    </Container>
  )
}
