Feature: User Management using DA UI

@Sanity
Scenario Outline: Creating the Users
Given Login to the DA UI with "Administrator" and "Password@123"
When creating a user "<userName>" and "<email>" and "<userPassword>" in the new user page
Then search for the new user "<userName>" 
Then verify the user "<userName>" gets created in the repository

Examples:
    | userName | email | userPassword |
    | hakuna   | hakuna@ot.com | Password@9876543 |
    | matata   | matata@ot.com | Password@8765432 |
    | daddys   | daddys@ot.com | Password@7654321 |
    | lotus    | lotus@ot.com  | Password@6543210 |
    | spice    | spice@ot.com  | Password@5432109 |


@Regression
Scenario Outline: Deleting the Users
Given Login to the DA UI with "Administrator" and "Password@123"
Then search for the user "<userName>"
Then verify the user "<userName>" is present in the repository 
When deletes the user "<userName>"
Then verify the user "<userName>" is not present in the repository

Examples:
| userName |
| hakuna   |
| matata   |
| daddys   |
| lotus    |
| spice    |

