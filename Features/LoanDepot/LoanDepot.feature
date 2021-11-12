Feature: Loan Depot

    Scenario Outline: Verify the correlation and severity rules work as expected for loan Depot

        When "ITOps_Admin" navigates to ITOps home page
        And "Admin" enters project name in project search field and click on enter
        And "admin" clicks on project name

        When "Admin" sends "1" new Http alerts with "<NodeName1>", "<AlertSeverity>", "<channelJson>"
        And "admin" clicks on Alerts page
        And "admin" enters "NodeName1" and clicks on enter "<NodeName1>"
        And "admin" verifies the severity strip color

        When "Admin" sends "1" new Http alerts with "<NodeName2>", "<AlertSeverity>", "<channelJson>"
        And "admin" clicks on Alerts page
        And "admin" enters "NodeName2" and clicks on enter "<NodeName2>"
        And "admin" verifies the severity strip color

        When "Admin" sends "1" new Http alerts with "<NodeName3>", "<AlertSeverity>", "<channelJson>"
        And "admin" clicks on Alerts page
        And "admin" enters "NodeName3" and clicks on enter "<NodeName3>"
        And "admin" verifies the severity strip color


        Examples:
            | ProjectName     | AlertName | ChannelName | channelJson       | NodeName1 | RecoveryJson   | valueForAutoCloseCluster | TimeIntervalInMin | SuccessMessage                 | AlertSeverity | NodeName2 | NodeName3       |
            | Automation_01M3 | Alert1    | Solarwinds  | HttpChannelAlerts | IAMSYSBC1 | RecoveryPolicy | 2                        | 3                 | Auto Closure Conditions Saved. | Major         | IAMSYSBC2 | AUMECO-50A-FPA2 |

Scenario Outline: Verify adding External format API to have business time alert in ES with value true or false

    When "Admin" sends "1" new Http alerts with "<NodeName>", "<AlertSeverity>", "<channelJson>"
    And "admin" clicks on Alerts page
    And "admin" enters "NodeName" and clicks on enter "<NodeName>"
    And Admin gets the alertId


    When "Admin" sends "1" new Http alerts with out "<WithOutNodeName>", "<AlertSeverity>", "<channelJson>"
    And "admin" clicks on Alerts page
    And Admin gets the alertId
    And "admin" enters alertId "alertId" and clicks on enter


    Examples:
        | ProjectName     | AlertName | ChannelName | channelJson       | NodeName        | RecoveryJson   | valueForAutoCloseCluster | TimeIntervalInMin | SuccessMessage                 | BusinessTimeZone | AlertTime   | WithOutNodeName |
        | Automation_01M3 | Alert1    | Solarwinds  | HttpChannelAlerts | IAMCFSCPRDDC1-1 | RecoveryPolicy | 2                        | 3                 | Auto Closure Conditions Saved. | CST              | 10:15:00 PM |                 |

Scenario Outline:Verify that device inventory details are added to alert before calling external formatting API
    When "Admin" sends "1" new Http alerts with "<NodeName>", "<AlertSeverity>", "<channelJson>"
    And "admin" clicks on Alerts page
    And "admin" enters "NodeName" and clicks on enter "<NodeName>"

    Examples:
        | ProjectName     | AlertName | ChannelName | channelJson  | NodeName        | RecoveryJson   | valueForAutoCloseCluster | TimeIntervalInMin | SuccessMessage                 |
        | Automation_01M3 | Alert1    | Solarwinds  | QueueChannel | CNHKGG-00A-SSC1 | RecoveryPolicy | 2                        | 3                 | Auto Closure Conditions Saved. |

Scenario Outline: Verify that Business Timezone/Data source/Data point fields will have data to ES if they are pushed with Alert


    When "Admin" sends "1" new Http alerts with "<NodeName>", "<AlertSeverity>", "<channelJson>"
    And "admin" clicks on Alerts page
    And "admin" enters "NodeName" and clicks on enter "<NodeName>"
    And Admin gets the alertId
    When "admin" clicks on three dots of an alert
    And "admin" verify the Business timeZone "<BusinessTimeZone>"
    And "admin" verify the Alert time "<AlertTime>"

    Examples:
        | ProjectName     | AlertName | ChannelName | channelJson       | NodeName        | RecoveryJson   | valueForAutoCloseCluster | TimeIntervalInMin | SuccessMessage                 | BusinessTimeZone | AlertTime   |
        | Automation_01M3 | Alert1    | Solarwinds  | HttpChannelAlerts | BWGAFG-01A-SBC1 | RecoveryPolicy | 2                        | 3                 | Auto Closure Conditions Saved. | CST              | 10:15:00 PM |

Scenario Outline: Verify that alert time is calculated based on business time zone of alert - where incoming alert have business time zone

    When "Admin" sends "1" new Http alerts with "<NodeName>", "<AlertSeverity>", "<channelJson>"
    And "admin" clicks on Alerts page
    And "admin" enters "NodeName" and clicks on enter "<NodeName>"
    And Admin gets the alertId
    When "admin" clicks on three dots of an alert
    And "admin" verify the Business timeZone "<BusinessTimeZone>"
    And "admin" verify the Alert time "<AlertTime>"
    Examples:
        | ProjectName     | AlertName | ChannelName | channelJson       | NodeName        | RecoveryJson   | valueForAutoCloseCluster | TimeIntervalInMin | SuccessMessage                 | BusinessTimeZone | AlertTime   |
        | Automation_01M3 | Alert1    | Solarwinds  | HttpChannelAlerts | BWGAFG-01A-SBC1 | RecoveryPolicy | 2                        | 3                 | Auto Closure Conditions Saved. | CST              | 10:15:00 PM |

Scenario Outline: Verify that alert time is calculated based Business Timezone from device inventory if incoming alert do not have business timezone


    When "Admin" sends "1" new Http alerts with "<NodeName>", "<AlertSeverity>", "<channelJson>"
    And "admin" clicks on Alerts page
    And "admin" enters "NodeName" and clicks on enter "<NodeName>"
    And Admin gets the alertId
    When "admin" clicks on three dots of an alert
    And "admin" verify the Business timeZone "<BusinessTimeZone>"
    And "admin" verify the Alert time "<AlertTime>"

    Examples:
        | ProjectName     | AlertName | ChannelName | channelJson        | NodeName        | RecoveryJson   | valueForAutoCloseCluster | TimeIntervalInMin | SuccessMessage                 | BusinessTimeZone | AlertTime   |
        | Automation_01M3 | Alert1    | Solarwinds  | HttpChannelAlerts2 | GGSPDC-01A-FPA2 | RecoveryPolicy | 2                        | 3                 | Auto Closure Conditions Saved. | PDT              | 11:15:00 PM |


Scenario Outline: Verify that alert time is calculated based timezone from channel created if incoming alert do not have business timezone or device inventory do not have Business Timezone.



    When "Admin" sends "1" new Http alerts with "<NodeName>", "<AlertSeverity>", "<channelJson>"
    And "admin" clicks on Alerts page
    And "admin" enters "NodeName" and clicks on enter "<NodeName>"
    And Admin gets the alertId
    When "admin" clicks on three dots of an alert
    And "admin" verify the Business timeZone "<BusinessTimeZone>"
    And "admin" verify the Alert time "<AlertTime>"

    Examples:
        | ProjectName     | AlertName | ChannelName | channelJson        | NodeName        | RecoveryJson   | valueForAutoCloseCluster | TimeIntervalInMin | SuccessMessage                 | BusinessTimeZone | AlertTime   |
        | Automation_01M3 | Alert1    | Solarwinds  | HttpChannelAlerts2 | ZACTHS-03A-SSA1 | RecoveryPolicy | 2                        | 3                 | Auto Closure Conditions Saved. | IST              | 10:45:00 AM |

# Scenario Outline: Verify that user can add more offset values to lookup data that too with same value and different code

#     When "ITOps_Admin" navigates to ITOps home page
#     And "Admin" enters project name in project search field and click on enter
#     And "admin" clicks on project name

#     When "Admin" sends "1" new Http alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
#     And "admin" clicks on Alerts page
#     And "admin" enters "NodeName" and clicks on enter "<NodeName>"
#     And Admin verifies the bussiness time zone

#     Examples:
#         | ProjectName     | AlertName | ChannelName | channelJson  | NodeName        | RecoveryJson   | valueForAutoCloseCluster | TimeIntervalInMin | SuccessMessage                 |
#         | Automation_01M3 | Alert1    | Solarwinds  | QueueChannel | CNHKGG-00A-SSC1 | RecoveryPolicy | 2                        | 3                 | Auto Closure Conditions Saved. |

Scenario Outline: Verify editing timezone from Device details page will calculate alertime based on new timezone from next alert.


    When "Admin" opens infrastructure page
    And "Admin" searches device name "<NodeName>"
    And "ITOps_Admin" clicks on resource name in the device inventory list "<NodeName>"
    And "Admin" selects bussiness timezone as "<BusinessTimeZone>"
    And "Admin" clicks on update and save
    Then "Admin" verifies if "<SuccessMessage>" message is displayed

    When "Admin" sends "1" new Http alerts with "<NodeName>", "<AlertSeverity>", "<channelJson>"
    And "admin" clicks on Alerts page
    And "admin" enters "NodeName" and clicks on enter "<NodeName>"
    And Admin gets the alertId
    When "admin" clicks on three dots of an alert
    And "admin" verify the Business timeZone "<BusinessTimeZone>"
    And "admin" verify the Alert time "<AlertTime>"
    #DefaultBusinessTimeZone
    When "Admin" opens infrastructure page
    And "Admin" searches device name "<NodeName>"
    And "ITOps_Admin" clicks on resource name in the device inventory list "<NodeName>"
    And "Admin" selects bussiness timezone as "<DefaultBusinessTimeZone>"
    And "Admin" clicks on update and save
    Then "Admin" verifies if "<SuccessMessage>" message is displayed

    Examples:
        | ProjectName     | AlertName | ChannelName | channelJson        | NodeName        | RecoveryJson   | valueForAutoCloseCluster | TimeIntervalInMin | BusinessTimeZone | AlertTime   | SuccessMessage                | DefaultBusinessTimeZone |
        | Automation_01M3 | Alert1    | Solarwinds  | HttpChannelAlerts2 | ZACTHS-03A-SSA1 | RecoveryPolicy | 2                        | 3                 | IST              | 10:45:00 AM | Resource updated successfully | Select Business Time... |
