/// <reference types="cypress" />
import { Then, When } from 'cypress-cucumber-preprocessor/steps';

Then(/^results should not be visible$/, () => {
  cy.get('.results-area').should('not.be.visible');
});

When(/^I type "([^"]+)" in the searchbar,$/, (input) => {
  cy.get('#searchbar').click().type(input);
});

Then(/^results should be visible$/, () => {
  cy.get('.results-area').should('be.visible');
});
