@ShortDescriptionOfTickets  @ITOps_Milestone_3 @ITOps_Admin

Feature: Verifying Short Description Of Tickets

    Scenario Outline: Verify Short description of tickets created for SW with alerts having AlertMessage

        Given User pushes an solarwinds alert
        Given User pushes an solarwinds alert
        Given User pushes an solarwinds alert
        Given User with ITOps role renders the URL
        And "admin" selects project and open alerts "<ProjectName>"
        Then enter alertname in search box and verify alert details "<AlertName>"
        And "Admin" gets the ticket number
        And "Admin" clicks on the ticket number
        And "Admin" gets the short description
        Given User verifies short description in service now
        And "Admin" verifies the short description

        Examples:
            | ProjectName     | AlertName | size | TicketNumber |
            | Automation_01M3 | Alert1    | 2    | INC0819544   |


    Scenario Outline: Verify Short description of tickets created for SW with alerts having no AlertMessage

        Given User pushes an solarwinds alert with no message
        Given User pushes an solarwinds alert with no message
        Given User pushes an solarwinds alert with no message
        Given User with ITOps role renders the URL
        And "admin" selects project and open alerts "<ProjectName>"
        Then enter alertname in search box and verify alert details "<AlertName>"
        And "Admin" gets the ticket number
        And "Admin" clicks on the ticket number
        And "Admin" gets the short description
        Given User verifies short description in service now
        And "Admin" verifies the short description

        Examples:
            | ProjectName     | AlertName | size |
            | Automation_01M3 | Alert1    | 2    |

        Scenario Outline: Verify Short description of tickets created for Verba with alerts having AlertMessage

            Given User pushes an Verba alert with message
            Given User pushes an Verba alert with message
            Given User pushes an Verba alert with message
            Given User with ITOps role renders the URL
            And "admin" selects project and open alerts "<ProjectName>"
            Then enter alertname in search box and verify alert details "<AlertName>"
            And "Admin" gets the ticket number
            And "Admin" clicks on the ticket number
            And "Admin" gets the short description
            Given User verifies short description in service now
            And "Admin" verifies the short description

            Examples:
                | ProjectName     | AlertName | size |
                | Automation_01M3 | Alert1    | 2    |

    Scenario Outline: Verify Short description of tickets created for Verba with alerts having no AlertMessage

    Given User pushes an Verba alert with no message
    Given User pushes an Verba alert with no message
    Given User pushes an Verba alert with no message
    Given User with ITOps role renders the URL
    And "admin" selects project and open alerts "<ProjectName>"
    Then enter alertname in search box and verify alert details "<AlertName>"
    And "Admin" gets the ticket number
    And "Admin" clicks on the ticket number
    And "Admin" gets the short description
    Given User verifies short description in service now
    And "Admin" verifies the short description

        Examples:
            | ProjectName     | AlertName | size |
            | Automation_01M3 | Alert1    | 2    |

    Scenario Outline: Verify Short description of tickets created for Forescout with alerts having AlertMessage and IP

        Given User pushes an Forescout alert with message and IP address
        Given User pushes an Forescout alert with message and IP address
        Given User pushes an Forescout alert with message and IP address
        Given User with ITOps role renders the URL
        And "admin" selects project and open alerts "<ProjectName>"
        Then enter alertname in search box and verify alert details "<AlertName>"
        And "Admin" gets the ticket number
        And "Admin" clicks on the ticket number
        And "Admin" gets the short description
        Given User verifies short description in service now
        And "Admin" verifies the short description

        Examples:
            | ProjectName     | AlertName | size |
            | Automation_01M3 | Alert1    | 2    |

    Scenario Outline: Verify Short description of tickets created for Forescout with alerts having no AlertMessage and no IP

        Given User pushes an Forescout alert with no message and no IP address
        Given User pushes an Forescout alert with no message and no IP address
        Given User pushes an Forescout alert with no message and no IP address
        Given User with ITOps role renders the URL
        And "admin" selects project and open alerts "<ProjectName>"
        Then enter alertname in search box and verify alert details "<AlertName>"
        And "Admin" gets the ticket number
        And "Admin" clicks on the ticket number
        And "Admin" gets the short description
        Given User verifies short description in service now
        And "Admin" verifies the short description

        Examples:
            | ProjectName     | AlertName | size |
            | Automation_01M3 | Alert1    | 2    |

    Scenario Outline: Verify Short description of tickets created for Forescout with alerts having no AlertMessage and IP

        Given User pushes an Forescout alert with no message and IP address
        Given User pushes an Forescout alert with no message and IP address
        Given User pushes an Forescout alert with no message and IP address
        Given User with ITOps role renders the URL
        And "admin" selects project and open alerts "<ProjectName>"
        Then enter alertname in search box and verify alert details "<AlertName>"
        And "Admin" gets the ticket number
        And "Admin" clicks on the ticket number
        And "Admin" gets the short description
        Given User verifies short description in service now
        And "Admin" verifies the short description

        Examples:
            | ProjectName     | AlertName | size |
            | Automation_01M3 | Alert1    | 2    |

    Scenario Outline: Verify Short description of tickets created for Forescout with alerts having AlertMessage and no IP

        Given User pushes an Forescout alert with message and no IP address
        Given User pushes an Forescout alert with message and no IP address
        Given User pushes an Forescout alert with message and no IP address
        Given User with ITOps role renders the URL
        And "admin" selects project and open alerts "<ProjectName>"
        Then enter alertname in search box and verify alert details "<AlertName>"
        And "Admin" gets the ticket number
        And "Admin" clicks on the ticket number
        And "Admin" gets the short description
        Given User verifies short description in service now
        And "Admin" verifies the short description

        Examples:
            | ProjectName     | AlertName | size |
            | Automation_01M3 | Alert1    | 2    |

