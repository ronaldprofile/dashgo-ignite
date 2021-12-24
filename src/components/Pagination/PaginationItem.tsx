import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
  isCurrent?: boolean;
  pageNumber: number;
  onChangePage: (page: number) => void;
}

export function PaginationItem({
  isCurrent = false,
  pageNumber,
  onChangePage
}: PaginationItemProps) {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        disabled
        _disabled={{
          bg: "pink.500",
          cursor: "not-allowed"
        }}
        colorScheme="pink"
      >
        {pageNumber}
      </Button>
    );
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      bg="gray.700"
      _hover={{
        bg: "gray.500"
      }}
      onClick={() => onChangePage(pageNumber)}
    >
      {pageNumber}
    </Button>
  );
}
