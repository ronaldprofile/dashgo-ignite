import {
  Link,
  Icon,
  Text,
  LinkProps as ChakraLinkProps
} from "@chakra-ui/react";
import { ElementType } from "react";

interface NavLinkProps extends ChakraLinkProps {
  children: string;
  icon: ElementType;
  // ElementType => referência do componente,
  // diferente da declaração do componente <ComponentDeclaration />.
}

export function NavLink({ icon, children, ...restProps }: NavLinkProps) {
  return (
    <Link display="flex" alignItems="center" {...restProps}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {children}
      </Text>
    </Link>
  );
}
