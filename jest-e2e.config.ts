import jestConfig from "./jest.config";

export default {
    ...jestConfig,
    testEnvironment: './prisma/prisma-test-environment.ts',
    testRegex: '.e2e-spec.ts$' //Vai procurar todos os arquivos com a estensão => .e2e-spec.ts
}