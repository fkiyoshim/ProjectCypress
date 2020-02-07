describe("UI TESTS", () => {
  /*  it("should navigate to google's website", () => {
cy.visit("www.amazon.com");
cy.get('#hplogo').type("")
    

});*/

  beforeEach(() => {
    cy.visit("http://localhost:3000");

  })


  it("Should load the login page correctly", () => {
    cy.get('[data-cy=login-text]').should("have.length", 1);
    cy.get('[data-cy=login-text]').should("be.visible");
  });

  it("Should load the login page correctly", () => {
    cy.get('[data-cy=password]').type("123456");
    cy.get('[data-cy=submit]').click();
    // check that we are still on the same page
    cy.get('[data-cy=login-text]').should("have.length", 1);
    cy.get('[data-cy=homepage]').should("have.length", 0);
  });

  it("Should not allow when password is not provides", () => {
    cy.get('[data-cy=email]').type("john@yahoo.com");
    cy.get('[data-cy=submit]').click();
    // check that we are still on the same page
    cy.get('[data-cy=login-text]').should("have.length", 1);
    cy.get('[data-cy=homepage]').should("have.length", 0);
  });

  it("Should login to the homepage with valid creds", () => {
    cy.get('[data-cy=email]').type("john@yahoo.com");
    cy.get('[data-cy=password]').type("123456");
    cy.get('[data-cy=submit]').click();
    // check that we are still on the same page
    cy.get('[data-cy=homepage]').should("have.length", 1);
    cy.get('[data-cy=logout-btn]').should("be.visible");
    cy.get('[data-cy=logout-btn]').should("have.class", "btn-sm");
    cy.get('[data-cy=logout-btn]').should("not.have.class", "dasdqaw");

  });

  it("Should contain correct input field values", () => {
    cy.get('[data-cy=email]').type("john@yahoo.com");
    cy.get('[data-cy=email]').should("have.value", "john@yahoo.com");

    cy.get('[data-cy=password]').type("123456");
    cy.get('[data-cy=password]').should("have.value", "123456");
    cy.get('[data-cy=password]').should("not.have.value", "chico");

    cy.get('[data-cy=submit]').click();
    // check that we are still on the same page

  });

  it("Should logout sucefully", () => {
    cy.get('[data-cy=email]').type("john@yahoo.com");
    cy.get('[data-cy=password]').type("123456");
    cy.get('[data-cy=submit]').click();
    cy.get('[data-cy=logout-btn]').click();
    //should be  on the logout page
    cy.get('[data-cy=logout-text]').should("contain", "You are now logged out");
    cy.get('[data-cy=logout-text]').should("not.contain", "bla bla");


  });

  it("Should have existing elements", () => {
    cy.get('[data-cy=login-text]').should("exist");
    cy.get('[data-cy=logout-btn]').should("not.exist");
    //cy.wait(5000);
  });

  it("Should fail and create video and screenshot", () => {
    cy.get('[data-cy=zzzz]').should("exist");
    
    //cy.wait(5000);
  });
});