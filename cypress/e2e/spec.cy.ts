describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/');
    // cy.contains('app is running')
    cy.get("input[name='title']").type('title');
    cy.get("textarea[name='body']").type('body');

    cy.get("button[type='submit']").click();

    cy.get('.post').should('be.visible');
    cy.get('.post-title').should('contain', 'title');
    cy.get('.post-body').should('contain', 'body');
  });
});
