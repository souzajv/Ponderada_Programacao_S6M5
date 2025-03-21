
# Documentação de Testes Automatizados com Cypress

## Descrição do Repositório

Este repositório contém a implementação de testes automatizados para a aplicação do **Centro Paula Souza (CPS)**. Os testes têm como objetivo verificar a funcionalidade de exibição de cards e pesquisa na dashboard. Os testes são realizados utilizando a ferramenta **Cypress**, que simula interações com a interface de usuário para garantir que os fluxos de navegação e pesquisa estejam funcionando corretamente.

## Pré-requisitos

Antes de executar os testes, certifique-se de que o ambiente de desenvolvimento esteja configurado corretamente. É necessário ter o **Node.js** e o **Cypress** instalados no seu projeto.

## Como Clonar o Repositório

Para clonar o repositório e configurar o ambiente de desenvolvimento, siga os passos abaixo:

1. **Clonar o repositório**

   No terminal, navegue até o diretório onde você deseja clonar o repositório e execute o seguinte comando:

   ```bash
   git clone https://github.com/seu-usuario/Ponderada_Programacao_S6M5.git
   ```

   Substitua `seu-usuario` pela sua conta no GitHub, caso o repositório seja privado, use o link do repositório correspondente.

2. **Acesse o diretório do projeto**

   Após o repositório ser clonado, entre na pasta do projeto com o comando:

   ```bash
   cd Ponderada_Programacao_S6M5/frontend/src
   ```

3. **Instalar as dependências**

   Dentro da pasta do projeto, instale todas as dependências necessárias com o comando:

   ```bash
   npm install
   ```

   Isso irá instalar o Cypress e outras dependências do projeto.

## Estrutura do Repositório

A estrutura de diretórios do repositório é a seguinte:

```bash
Ponderada_Programacao_S6M5/
│
├── frontend/
│   ├── src/
│   │   ├── cypress/
│   │   │   └── integration/
│   │   │       └── dashboard_spec.js   # Arquivo de testes
│   │   └── (outros arquivos do projeto)
└── README.md
```

## Como Executar os Testes

1. **Abrir o Cypress**

   No diretório do projeto, execute o seguinte comando para abrir o Cypress:

   ```bash
   npx cypress open
   ```

   O Cypress abrirá uma interface gráfica onde você poderá escolher os testes a serem executados.

2. **Executar os Testes**

   Após a interface do Cypress ser aberta, clique no arquivo `dashboard_spec.js` para rodar os testes que foram implementados. O Cypress irá simular as interações com a interface e fornecerá resultados visuais e logs de execução.

## Descrição dos Testes

O repositório contém os seguintes testes, que foram projetados para garantir a funcionalidade da dashboard:

### 1. **Testar exibição de cards de Alunos**

   - **Objetivo:** Verificar se, ao clicar no botão "Alunos", os cards da categoria "Alunos" são exibidos corretamente.
   - **Resultado Esperado:** 3 cards de alunos devem ser exibidos, com informações como nome e curso.

### 2. **Testar exibição de cards de Profissionais**

   - **Objetivo:** Verificar se, ao clicar no botão "Profissionais", os cards da categoria "Profissionais" são exibidos corretamente.
   - **Resultado Esperado:** 4 cards de profissionais devem ser exibidos, com informações como profissão.

### 3. **Testar exibição de cards de Gerentes**

   - **Objetivo:** Verificar se, ao clicar no botão "Gerentes", os cards da categoria "Gerentes" são exibidos corretamente.
   - **Resultado Esperado:** 6 cards de gerentes devem ser exibidos, com informações como unidade.

### 4. **Testar a funcionalidade de pesquisa para Alunos**

   - **Objetivo:** Verificar se o campo de pesquisa permite filtrar corretamente os cards de "Alunos" ao digitar o nome "Nome do Aluno 1".
   - **Resultado Esperado:** Apenas o card correspondente ao aluno "Nome do Aluno 1" deve ser exibido.

### 5. **Testar a funcionalidade de pesquisa para Gerentes**

   - **Objetivo:** Verificar se o campo de pesquisa permite filtrar corretamente os cards de "Gerentes" ao digitar o nome "Nome do Gerente 9".
   - **Resultado Esperado:** Apenas o card correspondente ao gerente "Nome do Gerente 9" deve ser exibido.

## Estrutura do Código de Teste

A estrutura dos testes está organizada no arquivo `cypress/integration/dashboard_spec.js`. Aqui está um exemplo de como os testes estão estruturados:

```javascript
describe('Testes de Dashboard - Filtragem e Pesquisa', () => {
    beforeEach(() => {
        //local onde o teste será executado
        cy.visit('http://localhost:4200/inicio');
    });

    it('Deve exibir os cards de Alunos ao clicar no botão "Alunos"', () => {
        cy.contains('Alunos').click(); //clica no botão "Alunos"
        cy.get('.card')  //verifica se os cards estão sendo exibidos
            .should('have.length', 3)  //deveriam aparecer 3 cards de alunos
            .first().contains('Curso 1');  //verifica o conteúdo do primeiro card
    });

  // Outros testes seguem a mesma estrutura.
});
```

## Resultados Esperados

Durante a execução dos testes, o Cypress irá fornecer logs detalhados sobre o que aconteceu em cada passo. Se um teste falhar, o Cypress exibirá onde ocorreu o erro e os detalhes da falha, o que facilita a depuração.

## Conclusão

Essa documentação tem como objetivo guiar a execução dos testes automatizados da dashboard utilizando o Cypress. Com ela, você pode garantir que os fluxos de navegação e de pesquisa estão funcionando conforme o esperado, verificando a exibição de cards por categoria e a funcionalidade de filtro.
