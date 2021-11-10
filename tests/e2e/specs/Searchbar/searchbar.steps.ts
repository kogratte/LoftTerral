/// <reference types="cypress" />
import { Then, When } from 'cypress-cucumber-preprocessor/steps';

Then(/^a searchbar should be available$/, () => {
  cy.get('#searchbar').should('exist');
});

Then(/^searchBar label should be updated in time \(at T = (\d+)ms, should be "([^"]+)"\)$/, async (delay, placeholder) => {
  cy.clock().tick(delay);

  const raf = () => new Promise((resolve) => {
    cy.state('window').requestAnimationFrame(resolve);
  });

  await raf();

  cy.get('label[for=searchbar]').should('have.text', placeholder);
  cy.clock().invoke('restore');
});

When(/^I click on the searchbar$/, () => {
  cy.get('#searchbar').click();
});

Then(/^the placeholder should be "([^"]+)"$/, (placeholder) => {
  cy.get('#searchbar').should('have.attr', 'placeholder', placeholder);
});

Then(/^the label should not be displayed anymore$/, () => {
  cy.get('label[for=searchbar]').should('not.exist');
});
