import React from 'react';

<reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('example to-do app', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('http://103.4.145.251:3028/')
  })

  it('displays two todo items by default', () => {
    cy.get('.btn').click()
    cy.get(':nth-child(1) > .form-control').type('admin')
    cy.get(':nth-child(2) > .form-control').type(1)
    cy.get('.btn-md').click()

    
  })

})

