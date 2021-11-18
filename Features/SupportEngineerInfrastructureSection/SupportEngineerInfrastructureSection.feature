@InfrastructureSection @ITOps_suport_engineer @Regression

Feature: Support Engineer to Infrastructure Section/Configuration Section/Alert Console

    Scenario Outline: verify support engineer user having view access to infrastructure section/Configuration section - AI Resolve

        When "suport_engineer" navigates to ITOps home page
        And "suport_engineer" enters project name in project search field and click on enter
        And "suport_engineer" clicks on project name
        Then "suport_engineer" able to access alerts section
        Then "suport_engineer" able to access Tickets section
        Then "suport_engineer" able to access infrastructure section
        Then "suport_engineer" able to access configuration section
        When "SupportEngineer" navigates to Tickets page
        When "SupportEngineer" clicks on quick filter
        And "SupportEngineer" selects filter by status type as "Assigned"
        When "SupportEngineer" get the ticket number from ticket console
        And "SupportEngineer" enters the ticket number in search field
        And Admin click on state in ticket console
        Then "SupportEngineer" verifies recommended resolution should be available
        And "SupportEngineer" clicks on assign button
        And "SupportEngineer" clicks on "Individual" radio button
        And "SupportEngineer" selects user from the team member drop down as "<Group>", "<TeamMember>"
        And "SupportEngineer" clicks on assign button on the popup
        Then "SupportEngineer" verifies if "<SuccessMessage>" message is displayed
        And Admin click on state in ticket console
        And "SupportEngineer" clicks on "Hold" button
        Then "SupportEngineer" verifies if "<HoldSuccessMessage>" message is displayed
        And Admin click on state in ticket console
        And "SupportEngineer" clicks on "Resolve" button
        And "SupportEngineer" enters resolve note as "<ResolveNote>"
        And "SupportEngineer" clicks on resolve button after entering closure note
        Then "SupportEngineer" verifies if "<ResolveSuccessMessage>" message is displayed

        Examples:
            | ProjectName    | SuccessMessage                | Group            | TeamMember      | HoldSuccessMessage            | ResolveSuccessMessage        |
            | Auto_01Resolve | Tickets assigned successfully | Visibility - UST | Amjathsha Abdul | Ticket(s) holded successfully | Ticket resolved successfully |