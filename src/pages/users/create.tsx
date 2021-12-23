import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

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
import Link from "next/link";

import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";
import { Input } from "../../components/Form/Input";

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

const createUserFormSchema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
  email: yup.string().required("E-mail é obrigatório").email("E-mail inválido"),
  password: yup
    .string()
    .required("Senha é obrigatório")
    .min(6, "No minimo 6 caracteres"),
  password_confirmation: yup
    .string()
    .oneOf([null, yup.ref("password")], "As senhas precisam ser iguais")
});

export default function CreateUser() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: yupResolver(createUserFormSchema)
  });

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async values => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(values);
  };

  return (
    <Box>
      <Header />
      <Flex w="100%" maxWidth={1200} my="6" mx="auto" px="6">
        <Sidebar />

        <Box
          as="form"
          onSubmit={handleSubmit(handleCreateUser)}
          flex="1"
          borderRadius={8}
          p={["6", "8"]}
          bg="gray.800"
        >
          <Heading size="lg" fontWeight="bold">
            Criar Usuário
          </Heading>
          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid spacing={["6", "8"]} minChildWidth="240px" width="100%">
              <Input
                {...register("name")}
                error={errors.name}
                name="name"
                type="text"
                label="Nome Completo"
              />
              <Input
                {...register("email")}
                error={errors.email}
                type="email"
                label="E-mail"
              />
            </SimpleGrid>

            <SimpleGrid spacing={["6", "8"]} minChildWidth="240px" width="100%">
              <Input
                {...register("password")}
                error={errors.password}
                type="password"
                label="Senha"
              />
              <Input
                {...register("password_confirmation")}
                error={errors.password_confirmation}
                type="password"
                label="Confirmar senha"
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button as="a" colorScheme="whiteAlpha">
                  Cancelar
                </Button>
              </Link>
              <Button type="submit" isLoading={isSubmitting} colorScheme="pink">
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
