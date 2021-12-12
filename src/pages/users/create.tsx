import {
  Box,
  Flex,
  Heading,
  Divider,
  VStack,
  HStack,
  SimpleGrid,
  Button
} from "@chakra-ui/react";
import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";
import { Input } from "../../components/Form/Input";

export default function CreateUser() {
  return (
    <Box>
      <Header />
      <Flex w="100%" maxWidth={1200} my="6" mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} p={8} bg="gray.800">
          <Heading size="lg" fontWeight="bold">
            Criar Usuário
          </Heading>
          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid spacing="8" minChildWidth="240px" width="100%">
              <Input name="name" type="text" label="Nome Completo" />
              <Input name="email" type="email" label="E-mail" />
            </SimpleGrid>

            <SimpleGrid spacing="8" minChildWidth="240px" width="100%">
              <Input name="password" type="password" label="Senha" />
              <Input
                name="password_confirmation"
                type="password"
                label="Confirmar senha"
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Button colorScheme="whiteAlpha">Voltar</Button>
              <Button colorScheme="pink">Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
