/// <reference types="cypress" />
import { Then } from 'cypress-cucumber-preprocessor/steps';

Then(/^page node title should be "([^"]*)"$/, (expectedTitle) => {
  cy.title().should('eq', expectedTitle);
});

Then(/^a searchbar should be available$/, () => {
  cy.get('#searchbar').should('be.visible');
});
