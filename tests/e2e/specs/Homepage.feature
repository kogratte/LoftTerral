Feature: Homepage

  The homepage should be as minimalist as possible, when no destinations are selected

  Scenario: Website title should be "[Loft Terral]"
    Given I open the homepage
    Then page node title should be "[Loft Terral] Where do we go?"
