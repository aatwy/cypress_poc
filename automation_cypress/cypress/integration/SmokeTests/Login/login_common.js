/* global Given, When, Then */

import {Given} from "cypress-cucumber-preprocessor/steps";
import {Then} from "cypress-cucumber-preprocessor/steps";

const url = "www.foodlogiq.com";

Given('I open the foodlogiq homepage', () => { 
    cy.visit(url)
})

Then('I expect the page title to equal {string}', title => {
    cy.title().should('include', title)
})