describe('Teste Cypress', () => {
  it('Testa o formulário', () => {
    cy.visit('http://127.0.0.1:5500/index.html');
    cy.wait(1000);
    cy.get('#name').type('Sarah');
    cy.get('#email').type('example@gmail.com')
    cy.get('button[type="submit"]').click();
    cy.get('#form-message').should('be.visible');
  });

    it('Testa a tabela', () => {
      cy.visit('http://127.0.0.1:5500/index.html');
      cy.wait(1000);
      cy.get('#data-table').should('be.visible');
      cy.get('#data-table tbody tr').should('have.length', 3);
    });

    it('Testa o botão de alerta', () => {
      cy.visit('http://127.0.0.1:5500/index.html');
      cy.wait(1000);
      cy.get('#alert-button').click();
    });
  });