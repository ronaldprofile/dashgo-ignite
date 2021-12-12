import {
  Flex,
  Text,
  Input,
  Icon,
  HStack,
  Button,
  Box,
  Avatar
} from "@chakra-ui/react";

import {
  RiNotificationLine,
  RiSearchLine,
  RiUserAddLine
} from "react-icons/ri";

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1200}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Text w="64" fontSize="3xl" fontWeight="bold" letterSpacing="tight">
        dashgo
        <Text as="span" ml="1" color="pink.500">
          .
        </Text>
      </Text>

      <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxW={400}
        alignSelf="center"
        position="relative"
        bg="gray.800"
        borderRadius="full"
      >
        <Input
          px="4"
          mr="4"
          variant="unstyled"
          placeholder="Buscar na plataforma"
          _placeholder={{
            color: "gray.400"
          }}
        />

        <Icon as={RiSearchLine} fontSize="20" color="gray.400" />
      </Flex>

      <Flex align="center" ml="auto">
        <HStack
          spacing="1"
          pr="8"
          py="1"
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.700"
        >
          <Button
            variant="ghost"
            transition="ease-in-out"
            _hover={{
              bg: "gray.700"
            }}
          >
            <Icon as={RiNotificationLine} fontSize="20" />
          </Button>

          <Button
            variant="ghost"
            transition="ease-in-out"
            _hover={{
              bg: "gray.700"
            }}
          >
            <Icon as={RiUserAddLine} fontSize="20" />
          </Button>
        </HStack>

        <Flex align="center" ml="4">
          <Box mr="4" textAlign="right">
            <Text>Ronald Tomaz</Text>
            <Text fontSize="small" color="gray.300">
              ronaldtomaz@gmail.com
            </Text>
          </Box>

          <Avatar
            size="md"
            name="Ronald Tomaz"
            src="https://github.com/ronaldprofile.png"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
