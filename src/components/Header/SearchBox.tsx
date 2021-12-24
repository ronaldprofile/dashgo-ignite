import { Flex, Input, Icon } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";

export function SearchBox() {
  return (
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
  );
}
