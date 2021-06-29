@LogIn_Roles
Feature: Login with all the roles     

         Scenario Outline: Successful Login with ITOPS roles  

         Given User with ITOps role renders the URL
         When user enters Username, Password and click on Login button "<UserName>", "<Password>" 
         Then ITOps home page is displayed
         And click on logout button
         
           Examples: 
                 | UserName | Password |
                 | Itops_IE | qa123 |
                 | Itops_admin_new |qa123 |
                 | Itops_visitor | qa123 |
                 | itops_displayuser |qa123 |
                 | Itops_engineer | qa123 |
