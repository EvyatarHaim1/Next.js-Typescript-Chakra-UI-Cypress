/// <reference types="cypress" />

context("Home Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  it("should find our login page and title Log in", () => {
    cy.get("h2").contains("Log in");
  });

  it("should find email's input with the right placeholder", () => {
    cy.get("[type='email']").invoke('attr', 'placeholder').should('contain', 'example@chakra-ui.com');
  });

  it("should find password's input with the right placeholder", () => {
    cy.get("[type='password']").invoke('attr', 'placeholder').should('contain', '*******');
  });

  it("should find a button with text Log-in", () => {
    cy.get("[type='button']").contains("Log in");
  });

  it("should find a button with text Toggle Color Mode and by click should change the mode", () => {
    cy.document().its('documentElement').should('have.attr', 'data-theme', 'light');
    cy.get("[type='button']").contains("Log in").click()
    cy.document().its('documentElement').should('have.attr', 'data-theme', 'dark');
  });
});