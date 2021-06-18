@LogIn_Roles
Feature: Login with all the roles     

         Scenario Outline: Successful Login with ITOPS roles  

         Given User with ITOps role is available "<url>"
         When enter Username and Password "<UserName>", "<Password>" 
         And click on Login button
         Then ITOps home page is displayed
         
           Examples: 
                 | UserName | Password |
                 | Itops_IE | qa123 |
                 | Itops_admin_new |qa123 |
                 | Itops_visitor | qa123 |
                 | itops_displayuser |qa123 |
                 | Itops_engineer | qa123 |
