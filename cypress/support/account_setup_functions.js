// / <reference types='Cypress' />

import {pageElementsAccountSetup} from '../fixtures/page_elements/account_setup_page'

Cypress.Commands.add('fillInAccountSetup', () => {
    cy.get(pageElementsAccountSetup.orgTypeDropdown).click()
    cy.xpath(pageElementsAccountSetup.personalUse).click()
    cy.get(pageElementsAccountSetup.trainingTypeDropdown).click()
    cy.xpath(pageElementsAccountSetup.teacherPreparation).click()
    cy.get(pageElementsAccountSetup.courseFormatDropdown).click()
    cy.xpath(pageElementsAccountSetup.online).click()
    cy.get(pageElementsAccountSetup.continueBtn).click()
});
