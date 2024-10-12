import FlightSelection from "../../src/components/FlightInquiry/FlightSelection";
import Deneme from "../../src/app/cabin-selection/page";

describe("<Deneme />", () => {
  it("should render and display expected content", () => {
    // Mount the React component for the About page
    cy.mount(<Deneme />);

    // The new page should contain an h1 with "About page"
    cy.get("#from");

    // Validate that a link with the expected URL is present
    // *Following* the link is better suited to an E2E test
    // cy.get('a[href="/"]').should('be.visible')
  });
});
