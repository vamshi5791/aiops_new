Feature:Ticket Template

    Feature Description : Ticket Template

    Scenario Outline: Verify that ticket getting created should have details as per the ticket template

        When "Admin" sends an alert with source Forescout and "<AlertMessage>"
        Then "Admin" verifies from service now, the details of new ticket created

        Examples:
            | AlertMessage                                   |
            | creating a new cluster and ticket gets created |