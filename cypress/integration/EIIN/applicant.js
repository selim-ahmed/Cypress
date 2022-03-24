import React from 'react';

 <reference types="cypress" />

 import {applicantUser} from "./page-objects/applicant-page-objects"

// https://on.cypress.io/introduction-to-cypress

describe('login-as-applicant-EIIN', () => {

  const user = new applicantUser()

  beforeEach(() => {
    // we include it in our beforeEach function so that it runs before each test
    
    user.navigate()
        
  })

    //Apply for EIIN
  it('Apply for EIIN', () => {
    
   

    
    user.applyForEIIN()
      
  })
 
      //login
  it('Login EIIN', () => {
   
    
     user.login('mitu',123)

  })

   //Basic Information
  it('Basic Information of EIIN Application', () => {

    basicInfo('Jugipara School-4','জুগিপাড়া স্কুল-4')
    
  })
   
     //Address
  it('Address', () => {  

    user.address(8,60,492,7017,56942,496,
      'The school was established in 1832 as Rangpur Zamindar School,by the local Zaminders or landlords.')

    
  })

   //Contact Information
  it('Contact Information', () => { 

    user.contactInfo(
      0152163417,
      01515151615,
      01515151614,
      9540018,
      'rangpur12@govt.bd',
      'http://www.school4.edu.bd/')
    
  })


  //Institute Information
 it('Institute Information', () => { 

  user.instituteInfo(5,3,2,258,5,7,2,4,3895,24,22.757,80.243)
  
  })

    //Save & Next
  it('Save & Next', () => { 
    
    user.saveToNext()

  })
     

})

