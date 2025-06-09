Bug ID: BUG-001  
Title: Incorrect validation on email field in guest checkout  
Author: Pavel Dobeš  
Date: 2025-06-07  
Severity: Medium  
Priority: High  
Environment: Chrome 125.0, macOS, 1920×1080

---

Related Test Case: TC-002 – Guest checkout – Invalid email input

---

**Steps to Reproduce:**

| Step | Action | Expected Result | Actual Result |
|------|--------|------------------|----------------|
| 1 | Go to `https://www.drmax.cz` | Homepage loads | OK |
| 2 | Add `Paralen` to cart | Product added | OK |
| 3 | Proceed to checkout | Checkout page shown | OK |
| 4 | Select guest checkout | Form appears | OK |
| 5 | Enter invalid email: `test@@example.com` | Email validation error | No error shown – invalid email accepted |
| 6 | Submit order | Should block submission | Submission allowed |

---

**Actual Behavior:**  
System allows submitting form with malformed email address (`@@`), which bypasses frontend validation.

**Expected Behavior:**  
System should block input and show inline error under email field before submission.

**Screenshot:**  
_Add screenshot here if available_

---

**Notes:**  
Issue tested and reproducible on Chrome and Firefox. Not tested on mobile.