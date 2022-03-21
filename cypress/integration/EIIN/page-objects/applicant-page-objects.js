export class applicantUser{
    navigate() {
        cy.visit('http://192.168.1.15:8005/')
        cy.viewport(1024, 1080)
    }

    logInEIIN(userName, password) {
        cy.get('[href="/login"] > .btn').click()
        cy.wait(2000)
        cy.get(':nth-child(1) > .form-control', {timeout: 5000}).type(userName + "{enter}")
        cy.get(':nth-child(2) > .form-control').type(password)
        cy.get('.btn-md').click()
        cy.wait(2000)
    }

    applyForEIIN(){
        cy.get(':nth-child(3) > .accordion-item > .d-flex > :nth-child(1)', {timeout: 5000}).click()
        cy.wait(2000)
        cy.get(':nth-child(3) > .accordion-item > .accordion-collapse > .multi-level > .flex-column > :nth-child(1) > .nav-link > :nth-child(1) > .sidebar-text').click()

    }

    basicInfo(instituteNameEN, instituteNameBN ){
        cy.get(':nth-child(2) > .form-control').type(instituteNameEN)
        cy.get(':nth-child(3) > .form-control').type(instituteNameBN)
    }

    address(){
        
    }

    contactInfo(){
        
    }

    instituteInfo(){
        
    }

    saveToNext(){
        
    }

}

// export const habijabi = new applicantUser();