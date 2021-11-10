Feature: Research

	I want a searchbar to find my next trip!
	Background:
		Given I open the homepage

	Scenario: Search results are not visible when research is empty
		Then results should not be visible

	Scenario Outline: When I type something shorter than 2 caracters in the searchbar, then results should not be visible
		When I type "<input>" in the searchbar,
		Then results should not be visible
		Examples:
			| input |
			| b     |
			| ba    |
	Scenario: When I type something more than 2 caracters in the searchbar, then results should be visible
		When I type "bar" in the searchbar,
		Then results should be visible