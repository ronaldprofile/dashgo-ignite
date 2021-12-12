import { Flex } from "@chakra-ui/react";

import { Profile } from "./Profile";
import { Logo } from "./Logo";
import { SearchBox } from "./SearchBox";
import { NotificationNav } from "./NotificationNav";

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
      <Logo />
      <SearchBox />

      <Flex align="center" ml="auto">
        <NotificationNav />
        <Profile />
      </Flex>
    </Flex>
  );
}
