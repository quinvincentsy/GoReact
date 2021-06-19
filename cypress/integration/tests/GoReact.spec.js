// / <reference types="Cypress"/>

describe("GoReact Test", function () {
    beforeEach(function () {
        cy.fixture("test_data/instructor.json").as("instructorData").then((instructorData) => {
            this.instructorData = instructorData;
        });

        cy.fixture("test_data/course.json").as("courseData").then((courseData) => {
            this.courseData = courseData;
        });

        cy.fixture("test_data/student.json").as("studentData").then((studentData) => {
            this.studentData = studentData;
        });
    });

    it("Sign-up instructor using invalid credentials", function () {
        cy.visit(Cypress.env('url') + '/dashboard/auth/signup')
        cy.goToInstuctorSignUpPage()
        cy.signUpInstructorWithInvalidCredentials(this.instructorData.InvalidCredentials.firstName, this.instructorData.InvalidCredentials.lastName, this.instructorData.InvalidCredentials.phoneNumber, this.instructorData.InvalidCredentials.email, this.instructorData.InvalidCredentials.password, this.instructorData.InvalidCredentials.confirmPassword)
    });

    it("Sign-up instructor using valid credentials ", function () {
        cy.signUpInstructorWithValidCredentials(this.instructorData.ValidCredentials.firstName, this.instructorData.ValidCredentials.lastName, this.instructorData.ValidCredentials.phoneNumber, this.instructorData.ValidCredentials.password, this.instructorData.ValidCredentials.confirmPassword)
        cy.fillInAccountSetup()
    });

    // it("Login instructor and create course", function () {
    //     cy.assertHomePage()
    //     cy.createCourse(this.courseData.courseName)
    //     cy.wait(2000)
    //     cy.getCourseLink()
    // });

    // it("Course confirmation", function () {
    //     cy.assertCourseConfirmation()
    //     cy.clickContinue()
    // });

    // it("Sign-up student using invalid credentials", function () {
    //     cy.signUpStudentWithInvalidCredentials(this.studentData.invalidCredentials.firstName, this.studentData.invalidCredentials.lastName, this.studentData.invalidCredentials.email, this.studentData.invalidCredentials.password, this.studentData.invalidCredentials.confirmPassword)
    // });

    // it("Sign-up, login and enroll student to course using valid credentials", function () {
    //     cy.signUpStudentWithValidCredentials(this.studentData.ValidCredentials.firstName, this.studentData.ValidCredentials.lastName, this.studentData.ValidCredentials.password, this.studentData.ValidCredentials.confirmPassword)
    //     cy.wait(5000)
    //     cy.clickClose()
    //     cy.agreeToTermsAndContinue()
    //     cy.wait(2000)
    //     cy.assertCourseName()
    // });

});
