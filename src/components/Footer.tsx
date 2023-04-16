import React from "react";
import {
  Stack,
  IconButton,
  Link,
  Box,
  Text,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import { siteConfig } from "../constant";

const iconProps = {
  variant: "ghost",
  size: "lg",
  isRound: true,
};

const Footer = () => {
  return (
    <Stack
      as="footer"
      isInline
      spacing={[1, 2]}
      p={4}
      justifyContent="space-between"
      alignItems="center"
      w={["100%", "90%", "90%"]}
      maxW="container.lg"
      mx="auto"
    >
      <Flex
        flexDirection={["column", "column", "row"]}
        flexFlow={["column-reverse", "column-reverse"]}
        justifyContent={["center", "space-between"]}
        alignItems="center"
        w="100%"
      >
        <Text
          textAlign="center"
          fontSize="sm"
          color={useColorModeValue("gray.500", "gray.200")}
        >
          © {new Date().getFullYear()} maxtrueby.com forked and modified with ❤️ from <Link href="https://github.com/WenLonG12345/teo-nextjs-portfolio">Teo Wen Long's GitHub</Link>{" "}
        </Text>

        <Box textAlign="center">
          {siteConfig.author.accounts.map((sc, index) => (
            <IconButton
              key={index}
              as={Link}
              isExternal
              aria-label={sc.name}
              href={sc.url}
              colorScheme={sc.type}
              icon={sc.icon}
              {...iconProps}
            />
          ))}
        </Box>
      </Flex>
    </Stack>
  );
};

export default Footer;
