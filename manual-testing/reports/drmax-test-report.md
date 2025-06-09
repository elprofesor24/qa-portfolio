📄 Test Report – Guest Checkout on drmax.cz

Project: drmax.cz
Feature: Guest Checkout
Author: Pavel Dobeš
Date: 2025-06-08
Version: 1.0
Test Report ID: TR-001

⸻

🔍 Objective

This test report summarizes the results of testing the guest checkout process on drmax.cz. The goal was to ensure that users can complete the checkout up to the payment step without registering and that the system correctly handles invalid inputs and edge cases.

⸻

📋 Test Summary

Test Case ID	Title	Status	Defects Found
TC-001	Guest checkout – Happy path	Passed	None
TC-002	Guest checkout – Invalid email input	Failed	BUG-001
TC-003	Guest checkout – Missing required address fields	Passed	None
TC-004	Guest checkout – Unselected delivery method	Passed	None
TC-005	Guest checkout – Incomplete form submission	Passed	None


⸻

🐞 Defects Summary

Bug ID	Title	Severity	Status
BUG-001	Incorrect validation on email field	Medium	Open


⸻

✅ Test Environment
	•	OS: macOS Ventura 13+
	•	Browser: Chrome 125.0 (desktop)
	•	Resolution: 1920×1080
	•	URL: https://www.drmax.cz
	•	Product Tested: Paralen 500 mg tablety 24

⸻

📈 Overall Result
	•	Total Test Cases Executed: 5
	•	Passed: 4
	•	Failed: 1
	•	Blocked: 0
	•	Test Coverage: 100% of planned test cases executed

⸻

📌 Observations
	•	The guest checkout process functions correctly in most scenarios.
	•	Validation for the email field does not catch malformed inputs (e.g., test@@example.com), allowing users to proceed with invalid data. This issue is documented in BUG-001.
	•	All other form validations and selections operate as expected.

⸻

📝 Recommendations
	•	Implement stricter frontend validation for the email field to prevent malformed inputs.
	•	Consider adding automated tests to cover common negative scenarios, enhancing regression testing efficiency.

⸻

📎 Attachments
	•	Test Plan: drmax-test-plan.md
	•	Test Cases: drmax-checkout-lowlevel.md
	•	Bug Reports: drmax-bug-001.md
