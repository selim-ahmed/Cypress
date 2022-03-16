import React from 'react';

<reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('login-as-applicant-EIIN', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('http://192.168.1.15:8005/')
    cy.viewport(1024, 1080)
    
  
  })

  it('displays two todo items by default', () => {
   
  
    //login
    cy.get('[href="/login"] > .btn').click()
    cy.wait(2000)
    cy.get(':nth-child(1) > .form-control').type('mitu')
    cy.get(':nth-child(2) > .form-control').type(123)
    cy.get('.btn-md').click()
    cy.wait(2000)

    //Apply for EIIN
    cy.get(':nth-child(3) > .accordion-item > .d-flex > :nth-child(1)').click()
    cy.wait(2000)
    cy.get(':nth-child(3) > .accordion-item > .accordion-collapse > .multi-level > .flex-column > :nth-child(1) > .nav-link > :nth-child(1) > .sidebar-text').click()
    
    //Basic Information
    cy.get(':nth-child(2) > .form-control').type('Rangpur Zilla School')
    cy.get(':nth-child(3) > .form-control').type('রংপুর জিলা স্কুল')
    
    //Address
    cy.get(':nth-child(5) > :nth-child(1) > .form-control').select('8').should('have.value' ,'8')
    cy.get(':nth-child(6) > :nth-child(1) > .form-control').select('60').should('have.value' ,'60')
    cy.get(':nth-child(7) > :nth-child(1) > .form-control').select('492').should('have.value' ,'492')
    cy.get(':nth-child(8) > :nth-child(1) > .form-control').select('7017').should('have.value' ,'7017')
    cy.get(':nth-child(9) > :nth-child(1) > .form-control').select('56942').should('have.value' ,'56942')
    cy.get(':nth-child(10) > :nth-child(1) > .form-control').select('496').should('have.value' ,'496')
    cy.get('.mb-3 > .form-control').type('The school was established in 1832 as Rangpur Zamindar School,by the local Zaminders or landlords. Nathial Smith, the district collector working for the British East India Company led government, also had a central role. The school was inaugurated by Lord William Bentinck, the erstwhile Governor General of Bengal. ')

    //Contact Information
    cy.get(':nth-child(13) > .form-control').type('0152163416')
    cy.get(':nth-child(14) > .form-control').type('01515151613')
    cy.get(':nth-child(15) > .form-control').type('01515151613')
    cy.get(':nth-child(16) > .form-control').type('9540013')
    cy.get(':nth-child(17) > .form-control').type('rangpur.zillaschool@govt.bd')
    cy.get(':nth-child(18) > .form-control').type('http://www.rangpurzillaschool.edu.bd/')

    //Institute Information
    cy.get(':nth-child(20) > :nth-child(1) > .form-control').select('3').should('have.value' ,'3')
    cy.get(':nth-child(21) > :nth-child(1) > .form-control').select('2').should('have.value' ,'2')
    cy.get(':nth-child(22) > .form-control').type('2')
    cy.get('label.ml-5 > input').first().check()
    cy.get(':nth-child(24) > :nth-child(1) > .form-control').select('258').should('have.value' ,'258')
    cy.get(':nth-child(25) > :nth-child(1) > .form-control').select('4').should('have.value' ,'4')
    cy.get(':nth-child(26) > :nth-child(1) > .form-control').select('7').should('have.value' ,'7')
    cy.get(':nth-child(27) > :nth-child(1) > .form-control').select('2').should('have.value' ,'2')
    cy.get(':nth-child(28) > :nth-child(1) > .form-control').select('4').should('have.value' ,'4')
    cy.get(':nth-child(29) > .form-control').type('3894')
    cy.get(':nth-child(30) > .form-control').type('23')
    cy.get(':nth-child(31) > .form-control').type('25.7578')
    cy.get(':nth-child(32) > .form-control').type('89.2430')

    //Save & Next
    cy.get('.mb-10 > .f-right').click()

     
  })

})

