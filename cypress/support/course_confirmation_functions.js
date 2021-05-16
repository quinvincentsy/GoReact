// / <reference types='Cypress' />

import {pageElementsCourseConfirmation} from '../fixtures/page_elements/course_confirmation_page'

Cypress.Commands.add('assertCourseConfirmation', () => {
    cy.xpath(pageElementsCourseConfirmation.confirmationMessage).should('have.text', 'Course Confirmation')
});

Cypress.Commands.add('clickContinue', () => {
    cy.xpath(pageElementsCourseConfirmation.confirmBtn).click()
});
