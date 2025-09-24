# ATM Withdrawal Simulator — Problem Statement

You are building a simple **ATM machine simulator** in JavaScript.  
The ATM should allow users to check balance, deposit, withdraw, and exit.  
The main flow is already implemented for you, but **two critical parts are missing**.  

### Current Features Implemented
- Initial balance is ₹1000.
- Deposits are supported with proper validation.
- Balance check and main menu loop are ready.

### Your TODOs
1. **`getMenuChoice()`** – Show a prompt with menu options (1: Check Balance, 2: Withdraw, 3: Deposit, 4: Exit). Validate input and return the correct choice.  
2. **`withdraw()`** – Prompt for withdrawal amount. Reject invalid input (NaN or ≤0). Reject if withdrawal > balance. Deduct amount and show updated balance.  
