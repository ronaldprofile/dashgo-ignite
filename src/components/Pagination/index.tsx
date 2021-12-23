import { Stack, Box, Text } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
  totalCountOfRegister: number;
  currentPage?: number;
  registersPerPage?: number;
  onChangePage: (page: number) => void;
}

const siblingsCount = 1;

const generateArrayPages = (from: number, to: number) => {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter(page => page > 0);
};

export function Pagination({
  onChangePage,
  currentPage = 1,
  totalCountOfRegister,
  registersPerPage = 10
}: PaginationProps) {
  const lastPage = Math.floor(totalCountOfRegister / registersPerPage);

  const previousPage =
    currentPage > 1
      ? generateArrayPages(currentPage - 1 - siblingsCount, currentPage - 1)
      : [];

  const nextPages =
    currentPage < lastPage
      ? generateArrayPages(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage)
        )
      : [];

  return (
    <Stack
      spacing="6"
      direction={["column", "row"]}
      mt="8"
      justify="space-between"
      alignItems="center"
    >
      <Box>
        <strong>0</strong> - <strong> 10 </strong>
        de
        <strong> {totalCountOfRegister} </strong>
      </Box>

      <Stack direction="row" spacing="2">
        {currentPage > 1 + siblingsCount && (
          <>
            <PaginationItem pageNumber={1} />

            {currentPage > 2 + siblingsCount && (
              <Text width={8} color="gray.500" textAlign="center">
                ...
              </Text>
            )}
          </>
        )}

        {previousPage.length > 0 &&
          previousPage.map(page => {
            return <PaginationItem key={page} pageNumber={page} />;
          })}

        <PaginationItem pageNumber={currentPage} isCurrent />

        {nextPages.length > 0 &&
          nextPages.map(page => {
            return <PaginationItem key={page} pageNumber={page} />;
          })}

        {currentPage + siblingsCount < lastPage && (
          <>
            {currentPage + 1 + siblingsCount < lastPage && (
              <Text width={8} color="gray.500" textAlign="center">
                ...
              </Text>
            )}
            <PaginationItem pageNumber={lastPage} />
          </>
        )}
      </Stack>
    </Stack>
  );
}
