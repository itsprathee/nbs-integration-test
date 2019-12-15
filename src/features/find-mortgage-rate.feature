Feature: Find a mortgage rate
  As a new customer
  I want to find the mortgage rates available
  So that I can decide whether to switch my mortgage to Nationwide

  Scenario: Find mortgage rates
    Given I am on the home page
    When I navigatge to "Mortgages" > "New mortgage customers: Mortgage rates"
    And I find mortgage rate for the following case
      | Nation wide mortgage | Type of mortgage    | Property value | Mortgage amount | Term |
      | No                   | I'm changing lender | 300000         | 150000          | 30   |
    And I filter the reults by "Mortgage Type" with "Fixed Rate"
    And I filter the reults by "Product Fee" with "With Fee"
    Then I should see the following Product results
      | 2 yr Fixed  |
      | 3 yr Fixed  |
      | 5 yr Fixed  |
      | 10 yr Fixed |
    When I click more info and apply button for the product "5 yr Fixed"
    Then I should see the page heading "Start your Remortgage application"
    
    