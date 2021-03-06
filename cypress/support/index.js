// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './sign_up_functions'
import './account_setup_functions'
import './instructor_home_page_functions'
import './course_confirmation_functions'
import './student_home_page_functions'

// Alternatively you can use CommonJS syntax:
// require('./commands')
require('cypress-xpath')

Cypress.Server.defaults({
    delay: 500,
    force404: false,
    whitelist: (xhr) => { // handle custom logic for whitelisting
        return true;
    }
})
