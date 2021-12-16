import { cloneElement, ReactElement } from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  shouldMatchExactLink?: boolean;
}

export function ActiveLink({
  children,
  shouldMatchExactLink = false,
  ...restProps
}: ActiveLinkProps) {
  const { asPath } = useRouter();
  let isActive = false;

  if (
    shouldMatchExactLink &&
    (asPath === restProps.href || asPath === restProps.as)
  ) {
    isActive = true;
  }

  if (
    !shouldMatchExactLink &&
    (asPath.startsWith(String(restProps.href)) ||
      asPath.endsWith(String(restProps.as)))
  ) {
    isActive = true;
  }

  return (
    <Link {...restProps}>
      {cloneElement(children, {
        color: isActive ? "pink.500" : "gray.50"
      })}
    </Link>
  );
}
