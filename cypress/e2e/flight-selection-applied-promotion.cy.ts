
describe("Flight-Selection", () => {
    it("should navigate to the about page", () => {
      cy.visit("http://localhost:3000/ucus-listeleme");

      cy.wait(2000);
      
      cy.get('#applied-promotion').click({ force: true });

      cy.get('input[type*="radio"]').eq(1).click();

      cy.get("#choose-flight").click();
    });
  });
  
  export {};