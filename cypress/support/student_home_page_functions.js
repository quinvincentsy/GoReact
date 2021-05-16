// / <reference types='Cypress' />

import {pageElementsStudentHomePage} from '../fixtures/page_elements/student_home_page'

Cypress.Commands.add('clickClose', () => {
    cy.xpath(pageElementsStudentHomePage.closeBtn).click()
});

Cypress.Commands.add('agreeToTermsAndContinue', () => {
    cy.xpath(pageElementsStudentHomePage.termsCheckbox).check()
    cy.xpath(pageElementsStudentHomePage.continueBtn).click()
});

Cypress.Commands.add('assertCourseName', () => {
    cy.xpath(pageElementsStudentHomePage.courseName).should('have.text', 'Cypress 101')
});
