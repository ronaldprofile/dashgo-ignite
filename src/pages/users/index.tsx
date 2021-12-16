import {
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Icon,
  Table,
  Thead,
  Tbody,
  Th,
  Tr,
  Td,
  Checkbox,
  useBreakpointValue
} from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  return (
    <Box>
      <Header />
      <Flex w="100%" maxWidth={1200} my="6" mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} p={8} bg="gray.800">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>

            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
                cursor="pointer"
              >
                Criar novo
              </Button>
            </Link>
          </Flex>

          <Table colorScheme="whiteAlpha" width="100%">
            <Thead>
              <Tr>
                <Th p={["4", "4", "6"]} color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>

                <Th>Usuário</Th>
                {isWideVersion && <Th>Data de cadastro</Th>}
                <Th width="8">Ações</Th>
              </Tr>
            </Thead>

            <Tbody overflowX="auto">
              <Tr>
                <Td p={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>

                <Td>
                  <Box>
                    <Text fontWeight="bold">Ronald Tomaz</Text>
                    <Text fontSize="small" color="gray.300">
                      ronaldtomaz@gmail.com
                    </Text>
                  </Box>
                </Td>

                {isWideVersion && <Td>02 de Março, 2020</Td>}
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                    cursor="pointer"
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td p={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>

                <Td>
                  <Box>
                    <Text fontWeight="bold">Cristiano Ronaldo</Text>
                    <Text fontSize="small" color="gray.300">
                      cr7@gmail.com
                    </Text>
                  </Box>
                </Td>

                {isWideVersion && <Td>02 de Março, 2020</Td>}
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                    cursor="pointer"
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
