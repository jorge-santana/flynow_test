## [1.0.1](https://github.com/jorge-santana/flynow_test/compare/v1.0.0...v1.0.1) (2025-12-03)


### Bug Fixes

* ajusta workflow de empacotamento e publicação ([de76c7a](https://github.com/jorge-santana/flynow_test/commit/de76c7a0028eae8baaf26dbd6d4efd868b324016))

# 1.0.0 (2025-12-03)


### Features

* adicionar documentação Swagger para o endpoint de voos ([a9eceb1](https://github.com/jorge-santana/flynow_test/commit/a9eceb1419c50036f7310890f299b058f83517d1))
* adicionar frontend para consulta de voos ([e8a38a9](https://github.com/jorge-santana/flynow_test/commit/e8a38a9903f7acf2f4eb59dbe55967de4e04c61b))
* **api:** adicionar endpoint de voos mockados\n\nAdicionado um endpoint GET em /api/flights que retorna uma lista de voos mockados. O endpoint permite filtrar os resultados com base nos parâmetros de consulta (from, to, date). Incluída tipagem TypeScript para os dados de voos e 20 voos mockados no total.\n\nBREAKING CHANGE: Nenhuma alteração de compatibilidade foi introduzida. ([e4e6149](https://github.com/jorge-santana/flynow_test/commit/e4e614990e499b0452187d091ee901aaf2fefa4c))
* inicializa o projeto com Next.js e bibliotecas essenciais\n\nAdiciona e configura as seguintes tecnologias:\n- Next.js 16 com TypeScript\n- Prettier para formatação de código\n- ESLint integrado ao Prettier\n- Swagger para documentação da API\n- Prisma ORM para gerenciamento de banco de dados\n- Zod para validação de dados\n- TanStack React Query para gerenciamento de estado assíncrono\n\nInclui uma página de documentação da API em /api-docs e um endpoint Swagger em /api/swagger.json. ([c704bc5](https://github.com/jorge-santana/flynow_test/commit/c704bc58abe67690f6c2c3f3aef0b3346223f02b))

# 1.0.0 (2025-12-02)

### Features

- adicionar documentação Swagger para o endpoint de voos ([a9eceb1](https://github.com/jorge-santana/flynow/commit/a9eceb1419c50036f7310890f299b058f83517d1))
- adicionar frontend para consulta de voos ([e8a38a9](https://github.com/jorge-santana/flynow/commit/e8a38a9903f7acf2f4eb59dbe55967de4e04c61b))
- **api:** adicionar endpoint de voos mockados\n\nAdicionado um endpoint GET em /api/flights que retorna uma lista de voos mockados. O endpoint permite filtrar os resultados com base nos parâmetros de consulta (from, to, date). Incluída tipagem TypeScript para os dados de voos e 20 voos mockados no total.\n\nBREAKING CHANGE: Nenhuma alteração de compatibilidade foi introduzida. ([e4e6149](https://github.com/jorge-santana/flynow/commit/e4e614990e499b0452187d091ee901aaf2fefa4c))
- inicializa o projeto com Next.js e bibliotecas essenciais\n\nAdiciona e configura as seguintes tecnologias:\n- Next.js 16 com TypeScript\n- Prettier para formatação de código\n- ESLint integrado ao Prettier\n- Swagger para documentação da API\n- Prisma ORM para gerenciamento de banco de dados\n- Zod para validação de dados\n- TanStack React Query para gerenciamento de estado assíncrono\n\nInclui uma página de documentação da API em /api-docs e um endpoint Swagger em /api/swagger.json. ([c704bc5](https://github.com/jorge-santana/flynow/commit/c704bc58abe67690f6c2c3f3aef0b3346223f02b))
