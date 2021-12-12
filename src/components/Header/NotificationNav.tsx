import { HStack, Button, Icon } from "@chakra-ui/react";
import { RiNotificationLine, RiUserAddLine } from "react-icons/ri";

export function NotificationNav() {
  return (
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
  );
}
