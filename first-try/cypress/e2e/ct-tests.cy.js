/// <reference types="cypress" />

describe("Shop Page", () => {
  it("should load the Shop Page", () => {
    cy.visit("/shop");
  });
});
