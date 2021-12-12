import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

export function Profile() {
  return (
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
  );
}
