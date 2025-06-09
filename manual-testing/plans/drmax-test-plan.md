📝 Test Plan – Guest Checkout on drmax.cz

Project: drmax.cz
Feature: Guest Checkout
Author: Pavel Dobeš
Date: 2025-06-07
Version: 1.0
Test Plan ID: TP-001

⸻

🔍 Objective

The objective of this test plan is to validate the guest checkout process on drmax.cz. This includes confirming that users can complete the checkout up to the payment step without registering, and that the system correctly handles invalid inputs and edge cases.

⸻

📦 Scope

In Scope:
	•	Product search and add-to-cart functionality
	•	Checkout without login
	•	Form validation for guest users
	•	Selection of delivery and payment options

Out of Scope:
	•	Payment gateway processing
	•	User registration or login flows
	•	Mobile and tablet responsiveness

⸻

🛠 Environment
	•	OS: macOS Ventura 13+
	•	Browser: Chrome 125.0 (desktop)
	•	Resolution: 1920×1080
	•	URL: https://www.drmax.cz
	•	Product: Paralen 500 mg tablety 24

⸻

🔄 Test Approach
	•	Manual black-box testing
	•	Positive and negative test scenarios
	•	Focus on functional validation, usability, and form error handling

⸻

📋 Test Cases

ID	Title	Priority
TC-001	Guest checkout – Happy path	High
TC-002	Guest checkout – Invalid email input	High
TC-003	Guest checkout – Missing required address fields	Medium
TC-004	Guest checkout – Unselected delivery method	Medium
TC-005	Guest checkout – Incomplete form submission	Medium


⸻

✅ Entry Criteria
	•	drmax.cz is available and accessible
	•	Test product and sample user data is prepared
	•	Guest checkout path is enabled

⸻

✅ Exit Criteria
	•	All test cases are executed
	•	All critical issues are reported or resolved
	•	Guest checkout is validated up to payment step

⸻

📎 Deliverables
	•	Test Cases: drmax-checkout-lowlevel.md
	•	Bug Reports: drmax-bug-001.md etc.
	•	Test Report: drmax-test-report.md

⸻

👥 Team
	•	Tester: Pavel Dobeš
	•	Purpose: Personal portfolio demonstration

⸻

📌 Risks & Mitigation

Risk	Mitigation
Frequent UI updates	Maintain and revise test steps regularly
Inconsistent form validations	Expand coverage with negative scenarios


⸻

📅 Schedule

Activity	Date
Test Design	2025-06-07
Test Execution	2025-06-07
Reporting	2025-06-08

