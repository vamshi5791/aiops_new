@Assign API @ITOps_Milestone_4 @Regression @ITOps_Admin
Feature: Assign API

    Scenario: Verify that while doing group assignment SNOW update calls are made with group id instead of group name
        When "user" Navigate to alert console
        Then  Assign any ticket to any group
        Then verify that SNOW update calls are happening using  group id's

