/// <reference types="cypress" />

describe("Landing Page", () => {
  it("should load the Landing Page", () => {
    cy.visit("/");
  });
  it('clicking "Shop" navigates to the Shop Page', () => {
    cy.visit("/")
    cy.contains('Shop').click()
    cy.url().should('include', '/shop')
  })
  it('clicking "Cart" navigates to the Cart Page', () => {
    cy.visit("/")
    cy.contains('Cart').click()
    cy.url().should('include', '/cart-page')
  })

});

describe("Shop Page", () => {
  it("should load the Shop Page", () => {
    cy.visit("/shop");
  });
  it('clicking WYWM logo should return to the landing page', () => {
    cy.visit("/shop")
    cy.get('.logo').click()
    cy.url().should('include','/')
  })
  it('clicking "Translator T-Shirt" navigates to the product details page for that shirt', () => {
    cy.visit("/shop")
    cy.contains('Translator').click()
    cy.url().should('include', '/product/5')
  })

});

describe("Cart Page (add and remove)", () => {
  it("Doer T-Shirt is added to cart", () => {
    cy.visit("/product/3")
    cy.get('#header-counter').should('not.exist')
    cy.contains('Add to Cart').click()
    cy.get('#header-counter').should('exist')
    cy.visit("/cart-page")
  });

  it("Doer T-Shirt is removed from cart", () => {
    cy.visit("/product/3")
    cy.get('#header-counter').should('not.exist')
    cy.contains('Add to Cart').click()
    cy.get('#header-counter').should('exist')
    cy.visit("/cart-page")
    cy.contains('Doer T-Shirt')
    cy.contains('Remove').click()
    cy.get('#header-counter').should('not.exist')
    cy.get('Doer T-Shirt').should('not.exist')
  });
});

describe("Total Price Calculation", () => {
  it("Creator T-Shirt is added to cart", () => {
    cy.visit("/product/4")
    cy.contains('Add to Cart').click()
  });
  it("Pro T-Shirt is added to cart", () => {
    cy.visit("/product/4")
    cy.contains('Add to Cart').click()
    cy.visit("/product/1")
    cy.contains('Add to Cart').click()
  });
  it("Creator T-Shirt and Pro T-Shirt appear in the cart", () => {
    cy.visit("/product/4")
    cy.contains('Add to Cart').click()
    cy.visit("/product/1")
    cy.contains('Add to Cart').click()
    cy.visit("/cart-page")
    cy.contains('Creator T-Shirt')
    cy.contains('Pro T-Shirt')
  });

  it("Calculations are correct", () => {
    cy.visit("/product/4")
    cy.contains('Add to Cart').click()
    cy.visit("/product/1")
    cy.contains('Add to Cart').click()
    cy.visit("/cart-page")
    cy.contains('Creator T-Shirt')
    cy.contains('Pro T-Shirt')
    cy.get('.total-price').contains('60')
    cy.get('.pricePlusVAT').contains('66')
    cy.get('.shipping').contains('20')
    cy.get('.finalprice').contains('106')
  });

});

describe("End of transaction", () => {
  it("All items cleared from Cart and localStorage when 'Checkout' is clicked", () => {
    cy.visit("/product/4")
    cy.get('#header-counter').should('not.exist')
    cy.contains('Add to Cart').click()
    cy.get('#header-counter').should('exist')
    cy.visit("/product/1")
    cy.contains('Add to Cart').click()
    cy.visit("/cart-page")
    cy.contains('Creator T-Shirt')
    cy.contains('Pro T-Shirt')
    cy.contains('Checkout').click()
    cy.get('Creator T-Shirt').should('not.exist')
    cy.get('Pro t-Shirt T-Shirt').should('not.exist')
    cy.get('Checkout').should('not.exist')
    cy.get('.finalprice').should('not.exist')
    cy.get('#header-counter').should('not.exist')
  });

});




