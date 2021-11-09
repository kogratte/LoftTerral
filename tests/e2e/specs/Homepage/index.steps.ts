/// <reference types="cypress" />
import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I open the homepage', () => {
  cy.visit('/');
});

Then(/^page node title should be "([^"]*)"$/, (expectedTitle) => {
  cy.title().should('eq', expectedTitle);
});

Then(/^a searchbar should be available$/, () => {
  cy.get('#searchbar').should('be.visible');
});

Then(/^searchBar placeholder should be updated in time \(at T = (\d+)ms, should be "([^"]+)"\)$/, async (delay, placeholder) => {
  cy.clock().tick(delay);

  const raf = () => new Promise((resolve) => {
    cy['state']('window').requestAnimationFrame(resolve);
  });

  await raf();

  cy.get('#searchbar').should('have.attr', 'placeholder', placeholder);
  cy.clock().invoke('restore');
});
