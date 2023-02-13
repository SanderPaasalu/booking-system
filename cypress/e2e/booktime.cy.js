describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://localhost:8080/');
    cy.get('.text-center > button').click();
    cy.get('#email').click();
    cy.get('#email').type('test@testy.ee');
    cy.get('#password').click();
    cy.get('#password').type('qwertyy');
    cy.get('.btn:nth-child(3)').click();
    cy.get('tr:nth-child(2) button').click();
    cy.get('#name').click();
    cy.get('#name').type('test');
    cy.get('#phone').click();
    cy.get('#phone').type('55558888');
    cy.get('.btn-primary:nth-child(2)').click();
  })
})