describe('Testes de Dashboard - Filtragem e Pesquisa', () => {
    beforeEach(() => {
        //
        cy.visit('http://localhost:4200/inicio');
    });

    it('Deve exibir os cards de Alunos ao clicar no botão "Alunos"', () => {
        cy.contains('Alunos').click(); //clica no botão "Alunos"
        cy.get('.card')  //verifica se os cards estão sendo exibidos
            .should('have.length', 3)  //deveriam aparecer 3 cards de Alunos
            .first().contains('Curso 1');  //verifica o conteúdo do primeiro card
    });

    it('Deve exibir os cards de Profissionais ao clicar no botão "Profissionais"', () => {
        cy.contains('Profissionais').click();
        cy.get('.card')
            .should('have.length', 4)
            .first().contains('Engenheiro de Software');
    });

    it('Deve exibir os cards de Gerentes ao clicar no botão "Gerentes"', () => {
        cy.contains('Gerentes').click();
        cy.get('.card')
            .should('have.length', 6)
            .first().contains('Unidade 8');
    });

    it('Deve filtrar os cards de Alunos pela pesquisa', () => {
        cy.contains('Alunos').click();
        cy.get('input[type="text"]').type('Nome do Aluno 1');
        cy.get('.card')
            .should('have.length', 1)
            .first().contains('Nome do Aluno 1');
    });

    it('Deve filtrar os cards de Gerentes pela pesquisa', () => {
        cy.contains('Gerentes').click();
        cy.get('input[type="text"]').type('Nome do Gerente 9');
        cy.get('.card')
            .should('have.length', 1)
            .first().contains('Nome do Gerente 9');
    });
});
