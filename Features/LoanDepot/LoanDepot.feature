Feature: Loan Depot

    Scenario Outline: Verify the correlation and severity rules work as expected for loan Depot

        When "ITOps_Admin" navigates to ITOps home page
        And "Admin" enters project name in project search field and click on enter
        And "admin" clicks on project name

        When "Admin" sends "1" new Http alerts with "<NodeName>", "<AlertSeverity>"
        And "admin" clicks on Alerts page
        And "admin" enters "NodeName" and clicks on enter "<NodeName>"
        And "admin" verifies the severity strip color

        When "Admin" sends "1" new Http alerts with "<NodeName>", "<AlertSeverity>"
        And "admin" clicks on Alerts page
        And "admin" enters "NodeName" and clicks on enter "<NodeName2>"
        And "admin" verifies the severity strip color

        When "Admin" sends "1" new Http alerts with "<NodeName>", "<AlertSeverity>"
        And "admin" clicks on Alerts page
        And "admin" enters "NodeName" and clicks on enter "<NodeName3>"
        And "admin" verifies the severity strip color


        Examples:
            | ProjectName     | AlertName | ChannelName | channelJson  | NodeName        | RecoveryJson   | valueForAutoCloseCluster | TimeIntervalInMin | SuccessMessage                 | AlertSeverity |
            | Automation_01M3 | Alert1    | Solarwinds  | QueueChannel | GBLNGS-04A-SUA1 | RecoveryPolicy | 2                        | 3                 | Auto Closure Conditions Saved. | Major         |

    Scenario Outline: Verify adding External format API to have business time alert in ES with value true or false

        When "ITOps_Admin" navigates to ITOps home page
        And "Admin" enters project name in project search field and click on enter
        And "admin" clicks on project name

        When "Admin" sends "1" new Http alerts with "<NodeName>", "<AlertSeverity>"
        And "admin" clicks on Alerts page
        And "admin" enters "NodeName" and clicks on enter "<NodeName>"
        And Admin gets the alertId
        And Admin verifies the bussiness time alert in elastic search index

        When "Admin" sends "1" new Http alerts without NodeName
        And "admin" clicks on Alerts page
        And "admin" enters "NodeName" and clicks on enter "<NodeName>"
        And Admin gets the alertId
        And Admin verifies the bussiness time alert in elastic search index


        Examples:
            | ProjectName     | AlertName | ChannelName | channelJson  | NodeName        | RecoveryJson   | valueForAutoCloseCluster | TimeIntervalInMin | SuccessMessage                 |
            | Automation_01M3 | Alert1    | Solarwinds  | QueueChannel | CNHKGG-00A-SSC1 | RecoveryPolicy | 2                        | 3                 | Auto Closure Conditions Saved. |

       Scenario Outline:Verify that device inventory details are added to alert before calling external formatting API

            When "ITOps_Admin" navigates to ITOps home page
            And "Admin" enters project name in project search field and click on enter
            And "admin" clicks on project name

            When "Admin" sends "1" new Http alerts with "<NodeName>", "<AlertSeverity>"
            And "admin" clicks on Alerts page
            And "admin" enters "NodeName" and clicks on enter "<NodeName>"

            And Admin verifies the bussiness time alert in elastic search index


            Examples:
                | ProjectName     | AlertName | ChannelName | channelJson  | NodeName        | RecoveryJson   | valueForAutoCloseCluster | TimeIntervalInMin | SuccessMessage                 |
                | Automation_01M3 | Alert1    | Solarwinds  | QueueChannel | CNHKGG-00A-SSC1 | RecoveryPolicy | 2                        | 3                 | Auto Closure Conditions Saved. |

    Scenario Outline: Verify that Business Timezone/Data source/Data point fields will have data to ES if they are pushed with Alert

        When "ITOps_Admin" navigates to ITOps home page
        And "Admin" enters project name in project search field and click on enter
        And "admin" clicks on project name

        When "Admin" sends "1" new Http alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        And "admin" clicks on Alerts page
        And "admin" enters "NodeName" and clicks on enter "<NodeName>"
        And Admin gets the alertId
        And Admin verifies the bussiness time alert in elastic search index


        Examples:
            | ProjectName     | AlertName | ChannelName | channelJson  | NodeName        | RecoveryJson   | valueForAutoCloseCluster | TimeIntervalInMin | SuccessMessage                 |
            | Automation_01M3 | Alert1    | Solarwinds  | QueueChannel | CNHKGG-00A-SSC1 | RecoveryPolicy | 2                        | 3                 | Auto Closure Conditions Saved. |

    Scenario Outline: Verify that alert time is calculated based on business time zone of alert - where incoming alert have business time zone

        When "ITOps_Admin" navigates to ITOps home page
        And "Admin" enters project name in project search field and click on enter
        And "admin" clicks on project name

        When "Admin" sends "1" new Http alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        And "admin" clicks on Alerts page
        And "admin" enters "NodeName" and clicks on enter "<NodeName>"
        And Admin verifies the bussiness time zone

        Examples:
            | ProjectName     | AlertName | ChannelName | channelJson  | NodeName        | RecoveryJson   | valueForAutoCloseCluster | TimeIntervalInMin | SuccessMessage                 |
            | Automation_01M3 | Alert1    | Solarwinds  | QueueChannel | CNHKGG-00A-SSC1 | RecoveryPolicy | 2                        | 3                 | Auto Closure Conditions Saved. |

    Scenario Outline: Verify that alert time is calculated based Business Timezone from device inventory if incoming alert do not have business timezone

        When "ITOps_Admin" navigates to ITOps home page
        And "Admin" enters project name in project search field and click on enter
        And "admin" clicks on project name

        When "Admin" sends "1" new Http alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        And "admin" clicks on Alerts page
        And "admin" enters "NodeName" and clicks on enter "<NodeName>"
        And Admin verifies the bussiness time zone

        Examples:
            | ProjectName     | AlertName | ChannelName | channelJson  | NodeName        | RecoveryJson   | valueForAutoCloseCluster | TimeIntervalInMin | SuccessMessage                 |
            | Automation_01M3 | Alert1    | Solarwinds  | QueueChannel | CNHKGG-00A-SSC1 | RecoveryPolicy | 2                        | 3                 | Auto Closure Conditions Saved. |


    Scenario Outline: Verify that alert time is calculated based timezone from channel created if incoming alert do not have business timezone or device inventory do not have Business Timezone.

        When "ITOps_Admin" navigates to ITOps home page
        And "Admin" enters project name in project search field and click on enter
        And "admin" clicks on project name

        When "Admin" sends "1" new Http alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        And "admin" clicks on Alerts page
        And "admin" enters "NodeName" and clicks on enter "<NodeName>"
        And Admin verifies the bussiness time zone

        Examples:
            | ProjectName     | AlertName | ChannelName | channelJson  | NodeName        | RecoveryJson   | valueForAutoCloseCluster | TimeIntervalInMin | SuccessMessage                 |
            | Automation_01M3 | Alert1    | Solarwinds  | QueueChannel | CNHKGG-00A-SSC1 | RecoveryPolicy | 2                        | 3                 | Auto Closure Conditions Saved. |

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

        When "ITOps_Admin" navigates to ITOps home page
        And "Admin" enters project name in project search field
        And "admin" clicks on project name and navigates to dashboard
        When "Admin" opens infrastructure page
        And "Admin" searches device name "<DeviceName>"
        And "ITOps_Admin" clicks on resource name in the device inventory list "<Device>"
        And "Admin" selects bussiness timezone
        And "Admin" clicks on update and save
        When "Admin" sends "1" new Http alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"

        Examples:
            | ProjectName     | AlertName | ChannelName | channelJson  | NodeName        | RecoveryJson   | valueForAutoCloseCluster | TimeIntervalInMin | SuccessMessage                 |
            | Automation_01M3 | Alert1    | Solarwinds  | QueueChannel | CNHKGG-00A-SSC1 | RecoveryPolicy | 2                        | 3                 | Auto Closure Conditions Saved. |
