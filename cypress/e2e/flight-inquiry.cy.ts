
describe("Flight-Inquiry", () => {
    it("should navigate to the about page", () => {
      cy.visit("http://localhost:3000");
  
      cy.get('#from').click();

      cy.get('.select-option').first().click();

      cy.get('#to').click();

      cy.get('.select-option').first().click();

      cy.get("#select-flight-category").click();

      cy.get(".flight-category").first().click();

      cy.get("#increment-people-count").click();

      cy.get("#submit").click();
    });
  });
  
  export {};