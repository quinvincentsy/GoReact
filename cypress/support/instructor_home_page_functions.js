// / <reference types='Cypress' />

import {pageElementsInstructorHomePage} from '../fixtures/page_elements/instructor_home_page'

Cypress.Commands.add('assertHomePage', () => {
    cy.xpath(pageElementsInstructorHomePage.welcomeTxt).should('be.visible')
    cy.xpath(pageElementsInstructorHomePage.welcomeTxt).should('have.text', 'Welcome to GoReact!')
});

Cypress.Commands.add('createCourse', ($courseName) => {
    cy.xpath(pageElementsInstructorHomePage.createCourseBtn).click()
    cy.get(pageElementsInstructorHomePage.courseNameTxtbox).clear().type($courseName)
    cy.xpath(pageElementsInstructorHomePage.confirmCourse).click()
    cy.xpath(pageElementsInstructorHomePage.courseCreationMessageCloseBtn).click()
    cy.xpath(pageElementsInstructorHomePage.courseDots).click()
    cy.xpath(pageElementsInstructorHomePage.inviteUsers).click()
});

Cypress.Commands.add('getCourseLink', () => {
    cy.xpath(pageElementsInstructorHomePage.courseLink).invoke('attr', 'copy-to-clipboard').then(function (element) {
        cy.xpath(pageElementsInstructorHomePage.closeBtn).click()
        cy.xpath(pageElementsInstructorHomePage.moreOptionsBtn).click()
        cy.xpath(pageElementsInstructorHomePage.logoutBtn).click()
        cy.visit(element)
    })
});
