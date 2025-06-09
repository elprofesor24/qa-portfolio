Test ID: TC-001  
Name: Guest checkout on drmax.cz  
Author: Pavel Dobeš  
Description: Verify guest checkout flow without login

---

Preconditions: 
- User is on https://www.drmax.cz  
- Cookies accepted (if prompted)  
- Chrome browser 125.0, desktop resolution 1920×1080

---

Steps:

| Step | Action |                                           | Expected Result |
|------|--------|                                           |------------------|
| 1 | Open `https://www.drmax.cz`                           | Homepage is displayed 
| 2 | Type `Paralen` into the search bar and press Enter    | Product results are shown 
| 3 | Click on `Paralen 500 mg tablety 24`                  | Product detail page is loaded 
| 4 | Click `Do košíku` (Add to cart)                       | Product is added, confirmation popup appears 
| 5 | Click the cart icon (top-right)                       | Cart overlay with correct item and price 
| 6 | Click `Pokračovat k objednávce`                       | Redirects to checkout page 
| 7 | Select `Pokračovat bez přihlášení`                    | Guest checkout form is displayed 
| 8 | Fill required fields (name, address, email, phone)    | Fields validate and accept input 
| 9 | Select delivery method (`Doručení na adresu`)         | Option is selected 
|10 | Select payment method (`Platba kartou online`)        | Option is selected 
|11 | Tick `Souhlasím s podmínkami`                         | Checkbox is checked 
|12 | Click `Dokončit objednávku`                           | User is taken to summary or payment screen 

---

Expected Result: 
User completes checkout flow as a guest up to payment page without errors or validation issues.