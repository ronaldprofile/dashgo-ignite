import {
  Input as ChakraInput,
  FormLabel,
  FormControl,
  InputProps as ChakraInputChakra
} from "@chakra-ui/react";

interface InputProps extends ChakraInputChakra {
  name: string;
  label?: string;
}

export function Input({ name, label, ...restProps }: InputProps) {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        name={name}
        id={name}
        type="email"
        focusBorderColor="pink.500"
        bg="gray.900"
        variant="filled"
        _hover={{
          bg: "gray.900"
        }}
        size="lg"
        {...restProps}
      />
    </FormControl>
  );
}
