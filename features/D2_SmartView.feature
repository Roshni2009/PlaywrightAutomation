Feature: D2 SmartView

    Scenario: Verify File upload and download using SmartView UI
        Given I login to the SmartView UI as "coordinator" and "Password@123"
        When I upload a file using Upload file button
        Then I should see the file uploaded successfully
        Then I download the uploaded file