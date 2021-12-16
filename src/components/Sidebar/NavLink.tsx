import {
  Link as ChakraLink,
  Icon,
  Text,
  LinkProps as ChakraLinkProps
} from "@chakra-ui/react";

import { ElementType } from "react";
import { ActiveLink } from "../ActiveLink";
interface NavLinkProps extends ChakraLinkProps {
  children: string;
  path: string;
  icon: ElementType;
}

export function NavLink({ icon, children, path, ...restProps }: NavLinkProps) {
  return (
    <ActiveLink href={path} passHref>
      <ChakraLink display="flex" alignItems="center" {...restProps}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
}
