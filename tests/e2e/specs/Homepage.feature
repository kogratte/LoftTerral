Feature: Homepage

  The homepage should be as minimalist as possible, when no destinations are selected

  Scenario: Website title should be "[Loft Terral]"
    Given I open the homepage
    Then page node title should be "[Loft Terral] Where do we go?"

  Scenario: A search bar should be available when no destination are selected
    Given I open the homepage
    Then a searchbar should be available

  Scenario Outline: Searchbar placeholder should rotate every 2500ms
    Given I open the homepage
    Then searchBar placeholder should be updated in time (at T = <delay>ms, should be "<placeholder>")
    Examples:
      | placeholder                 | delay |
      | I want to go to... London   | 0     |
      | I want to go to... New-York | 2500  |
