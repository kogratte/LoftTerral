Feature: Searchbar

  I want a searchbar to find my next trip!
  Background:
    Given I open the homepage

  Scenario: A search bar should be available when no destination are selected
    Then a searchbar should be available

  Scenario: Searchbar label
    When I click on the searchbar
    Then the placeholder should be "Where do I want to go?"
    And the label should not be displayed anymore

