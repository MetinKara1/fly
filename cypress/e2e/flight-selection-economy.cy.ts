
describe("Flight-Selection", () => {
    it("should navigate to the about page", () => {
      cy.visit("http://localhost:3000/ucus-listeleme");

      cy.wait(2000);

      // Find a link with an href attribute containing "about" and click it
      cy.get('input[type*="radio"]').first().click();

      cy.get("#choose-flight").click();
    });
  });
  
  export {};