describe("UI TESTS", () => {
  /*  it("should navigate to google's website", () => {
cy.visit("www.amazon.com");
cy.get('#hplogo').type("")
    

});*/

  beforeEach(() => {
    cy.visit("https://example.cypress.io/commands/actions");

  });

  it(" shold clear the input text field", () => {
    cy.get('.action-email').type('fake@email.com');
    cy.get('.action-email').clear();
    cy.get('.action-email').should('not.have.value', 'fake@email.com');
    //cy.wait(5000);
  });

  it(" shold double click in the element", () => {
    cy.get('.action-div').dblclick().should('not.be.visible').should("have.value", "");


  });

  it(" shold check the first check box", () => {
    cy.get('.action-checkboxes [type="checkbox"]').check(["checkbox1", "checkbox3"]).should("be.checked");
  });

  it(" shold uncheck the first check box", () => {
    cy.get('.action-checkboxes [type="checkbox"]')
      .check(["checkbox1", "checkbox3"])
      .should("be.checked");

    cy.get('.action-checkboxes [type="checkbox"]')
      .uncheck(["checkbox1"])
      .should("not.be.checked");
  });


  it(" shold select the first radio button", () => {
    cy.get('.action-radios [type="radio"]')
      .check('radio1').should('be.checked')
  });

  it(" shold select the first option from the dropdown", () => {
    cy.get('.action-select').select('apples').should("contain", "apples");
  });

});






