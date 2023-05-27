# prisma_test_e2e

# Tipos de TESTES

- Unitários = Testam um componente/funcionalidade de forma **isolada**. Não tem BANCO de Dados e nem API do GATEWAY.

- Integração  = Testa como um ou mais componentes/funcionalidade se comportam jutos(as).
- 
- E2E = Simula o que um usuário vai fazer na nossa aplicação diariamente. Não é aconselhável tem mocks ou dados fakes.

#
# Fazendo o migrate do prisma para o banco

npx prisma migrate dev
