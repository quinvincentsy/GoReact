// / <reference types='Cypress' />

import {pageElementsSignUp} from '../fixtures/page_elements/sign_up_page'

Cypress.Commands.add('goToInstuctorSignUpPage', () => {
    cy.get(pageElementsSignUp.instructorBtn).click()
});

Cypress.Commands.add('signUpInstructorWithInvalidCredentials', ($FirstName, $LastName, $PhoneNumber, $Email, $Password, $ConfirmPassword) => {
    cy.get(pageElementsSignUp.firstnameTxtbox).clear().type($FirstName, {force: true})
    cy.get(pageElementsSignUp.lastNameTxtbox).clear().type($LastName, {force: true})
    cy.get(pageElementsSignUp.phoneNumberTxtbox).clear().type($PhoneNumber, {force: true})
    cy.get(pageElementsSignUp.emailTxtbox).clear().type($Email, {force: true})
    cy.get(pageElementsSignUp.passwordTxtbox).clear().type($Password, {force: true})
    cy.get(pageElementsSignUp.confirmPasswordTxtbox).clear().type($ConfirmPassword, {force: true})
    cy.xpath(pageElementsSignUp.firstnameError).should('have.text', 'First name is required.')
    cy.xpath(pageElementsSignUp.lastnameError).should('have.text', 'Last name is required.')
    cy.xpath(pageElementsSignUp.emailError).should('have.text', 'Email is required.')
    cy.xpath(pageElementsSignUp.passwordMismatchError).should('have.text', 'Passwords do not match.')
});

Cypress.Commands.add('signUpInstructorWithValidCredentials', ($FirstName, $LastName, $PhoneNumber, $Password, $ConfirmPassword) => {
    const randomEmail = generateRandomEmail()
    cy.get(pageElementsSignUp.firstnameTxtbox).clear().type($FirstName, {force: true})
    cy.get(pageElementsSignUp.lastNameTxtbox).clear().type($LastName, {force: true})
    cy.get(pageElementsSignUp.phoneNumberTxtbox).clear().type($PhoneNumber, {force: true})
    cy.get(pageElementsSignUp.emailTxtbox).clear().type(randomEmail)
    cy.get(pageElementsSignUp.passwordTxtbox).clear().type($Password, {force: true})
    cy.get(pageElementsSignUp.confirmPasswordTxtbox).clear().type($ConfirmPassword, {force: true})
    cy.get(pageElementsSignUp.termsCheckbox).check()
    cy.get(pageElementsSignUp.continueBtn).click()
});

Cypress.Commands.add('signUpStudentWithInvalidCredentials', ($FirstName, $LastName, $Email, $Password, $ConfirmPassword) => {
    cy.get(pageElementsSignUp.firstnameTxtbox).clear().type($FirstName, {force: true})
    cy.get(pageElementsSignUp.lastNameTxtbox).clear().type($LastName, {force: true})
    cy.get(pageElementsSignUp.emailTxtbox).clear().type($Email, {force: true})
    cy.get(pageElementsSignUp.passwordTxtbox).clear().type($Password, {force: true})
    cy.get(pageElementsSignUp.confirmPasswordTxtbox).clear().type($ConfirmPassword, {force: true})
    cy.xpath(pageElementsSignUp.firstnameError).should('have.text', 'First name is required.')
    cy.xpath(pageElementsSignUp.lastnameError).should('have.text', 'Last name is required.')
    cy.xpath(pageElementsSignUp.emailError).should('have.text', 'Email is required.')
    cy.xpath(pageElementsSignUp.passwordMismatchError).should('have.text', 'Passwords do not match.')
});

Cypress.Commands.add('signUpStudentWithValidCredentials', ($FirstName, $LastName, $Password, $ConfirmPassword) => {
    const randomEmail = generateRandomEmail()
    cy.get(pageElementsSignUp.firstnameTxtbox).clear().type($FirstName, {force: true})
    cy.get(pageElementsSignUp.lastNameTxtbox).clear().type($LastName, {force: true})
    cy.get(pageElementsSignUp.emailTxtbox).clear().type(randomEmail)
    cy.get(pageElementsSignUp.passwordTxtbox).clear().type($Password, {force: true})
    cy.get(pageElementsSignUp.confirmPasswordTxtbox).clear().type($ConfirmPassword, {force: true})
    cy.get(pageElementsSignUp.termsCheckbox).check()
    cy.get(pageElementsSignUp.continueBtn).click()
});

function generateRandomEmail() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 10; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text + '@email.com';
}
