describe('Login Page Tests', () => {
    // Before each test, visit the login page
    beforeEach(() => {
      cy.visit('/');
    });
 
    it('should display the login form', () => {
      // Check if the form and inputs are visible
    //   cy.get('form').should('be.visible');
    //   cy.get('input[name="email"]').should('be.visible');
    //   cy.get('input[name="password"]').should('be.visible');
      cy.get('counter').should('be.visible');
    });
  });
