# title.feature
Feature: Title check
  I should be able to go to a website
  and check its title

  Scenario: Get the title of webpage
    Given I go to the website
    Then I expect the title of the page
      | url                   | title  |
      | http://www.google.com | Google |
      | http://www.bing.com   | Bing   |
      | http://trello.com     | Trello |
