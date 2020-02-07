describe("UI TESTS", () => {
  /*  it("should navigate to google's website", () => {
cy.visit("www.amazon.com");
cy.get('#hplogo').type("")
    

});*/

  it(" shold select the first option from the dropdown", () => {
    cy.visit("http://localhost:3000/noids");
   cy.get('body > :nth-child(1) > :nth-child(1)').check();
   cy.get(':nth-child(5)').check();
  });

});






