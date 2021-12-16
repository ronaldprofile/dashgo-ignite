import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Flex, Button, Stack } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";

type SubmitSignInData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().required("E-mail é obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha obrigatória")
});

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: yupResolver(signInFormSchema)
  });

  const handleSignIn: SubmitHandler<SubmitSignInData> = async (
    values,
    event
  ) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(values);
  };

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        onSubmit={handleSubmit(handleSignIn)}
        w="100%"
        maxW={360}
        direction="column"
        bg="gray.800"
        p="8" // % por 4 ou * 4
        borderRadius={8}
      >
        <Stack spacing="4">
          <Input
            {...register("email")}
            error={errors.email}
            name="email"
            type="email"
            label="E-mail"
          />
          <Input
            {...register("password")}
            error={errors.password}
            name="password"
            type="password"
            label="Senha"
          />
        </Stack>

        <Button
          type="submit"
          mt="6"
          size="lg"
          colorScheme="pink"
          isLoading={isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
