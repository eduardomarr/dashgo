
import Link from 'next/link';
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react';

import { Input } from '../../components/Form/Input';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';

export default function CreateUser() {

  return (
    <Box>
      <Header />

      <Flex
        width="100%"
        maxWidth={1480}
        marginY="6"
        marginX="auto"
        paddingX="6"
      >
        <Sidebar />

        <Box
          flex="1"
          borderRadius="8"
          bg="gray.800"
          padding={['6', '8']}
          as="form"
        // onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size="lg" fontWeight="normal">
            Criar usuário
          </Heading>

          <Divider marginY="6" borderColor="gray.700" />
          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} width="100%">
              <Input
                name="name"
                label="Nome completo"
              // error={formState.errors.name}
              // {...register('name')}
              />
              <Input
                name="email"
                type="email"
                label="E-mail"
              // error={formState.errors.email}
              // {...register('email')}
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} width="100%">
              <Input
                name="password"
                type="password"
                label="Senha"
              // error={formState.errors.password}
              // {...register('password')}
              />
              <Input
                name="password_confirmation"
                type="password"
                label="Confirmação da senha"
              // error={formState.errors.password_confirmation}
              // {...register('password_confirmation')}
              />
            </SimpleGrid>
          </VStack>

          <Flex marginTop="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button as="a" colorScheme="whiteAlpha">
                  Cancelar
                </Button>
              </Link>
              <Button
                colorScheme="pink"
                type="submit"
              // isLoading={formState.isSubmitting}
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
