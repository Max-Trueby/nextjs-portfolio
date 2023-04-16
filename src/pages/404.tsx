import React from "react";
import { Container, Heading, Text, Link, useColorModeValue,} from "@chakra-ui/react";

const Custom404 = () => {
    return (
        <Container maxW="container.lg" mt={["5", "10"]} mb={["5", "10"]}>
        <Heading as="h1" fontSize={{ base: "24px", md: "30px", lg: "36px" }}>
            404 - Page Not Found
        </Heading>
        <Text fontSize={"lg"}>Sorry, there is nothing here.</Text>
        <Link href="/" color={useColorModeValue("blue.500", "blue.400")}>
        Go back home
        </Link>
        </Container>
    );
    };

export default Custom404;
