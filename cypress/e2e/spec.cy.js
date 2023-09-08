/// <reference types= "cypress" />

describe("Almosafer Hotel Booking", () => {
  it("Visits a random website and make a certain tasks", () => {
    // Math.random() -> Generate a random number (0 to 1)
    const randomIndex1 = Math.floor(Math.random() * 2);
    const randomIndex2 = Math.floor(Math.random() * 2);
    const randomIndex3 = Math.floor(Math.random() * 3);

    const websites = ["https://www.almosafer.com/ar","https://www.almosafer.com/en"];

    // Letting cypress randomly select the arabic or english websites
    cy.visit(websites[randomIndex1]);

    // To continue entering the website
    cy.get('.cta__continue').click();

    // To click on the second tab "Hotels" or "فنادق" 
    cy.get('#uncontrolled-tab-example-tab-hotels').click();
    
    // To randomly type any option of the following (Dubai, Jeddah, Riyadh) or ( دبي, جدة)
    const arabicSearch = ["دبي", "جدة"];
    const englishSearch = ["Dubai", "Jeddah", "Riyadh"];
    if (websites[randomIndex1] == "https://www.almosafer.com/ar"){
      cy.get('[data-testid="AutoCompleteInput"]').type(arabicSearch[randomIndex2])
    }else if (websites[randomIndex1] == "https://www.almosafer.com/en") {
      cy.get('[data-testid="AutoCompleteInput"]').type(englishSearch[randomIndex3])
    }

    // To Click on first result from autocomplete list.
    cy.get('[data-testid="AutoCompleteResultItem0"]').click()


    // Randomly select "1 room, 2 adults, 0 children" or "1 room, 1 adult, 0 children" option.
    const roomOptions = ["A", "B"];
    const randomRoomIndex = Math.floor(Math.random() * roomOptions.length);
    cy.get('[data-testid="HotelSearchBox__ReservationSelect_Select"]').select(roomOptions[randomRoomIndex]);

    // To press on search hotel
    cy.get('[data-testid="HotelSearchBox__SearchButton"]').click();
  });
});