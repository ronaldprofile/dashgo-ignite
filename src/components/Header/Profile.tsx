import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center" ml="4">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Ronald Tomaz</Text>
          <Text fontSize="small" color="gray.300">
            ronaldtomaz@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Ronald Tomaz"
        src="https://github.com/ronaldprofile.png"
      />
    </Flex>
  );
}
