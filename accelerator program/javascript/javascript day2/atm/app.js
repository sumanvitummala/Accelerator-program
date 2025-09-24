"use strict";

let balance = 1000; // starting balance

// TODO-1: Implement getMenuChoice()
// Show a prompt with options: 1) Check Balance 2) Withdraw 3) Deposit 4) Exit
// Return the user's numeric choice (1..4). Validate and re-prompt if invalid.

function getMenuChoice() {
  // TODO
  while (true) {
    let input = prompt("Choose an option:\n1) Check Balance\n2) Withdraw\n3) Deposit\n4) Exit");
    if (input === null) return 4; // if user cancels, treat as exit
    let num = parseInt(input, 10);
    if ([1, 2, 3, 4].includes(num)) {
      return num;
    }
    alert("Invalid choice. Please enter 1, 2, 3, or 4.");
  }
}

function checkBalance() {
  alert(`Current balance: ₹${balance.toFixed(2)}`);
}

function deposit() {
  const input = prompt("Enter amount to deposit:");
  if (input === null) return;
  const amount = parseFloat(input);
  if (Number.isNaN(amount) || amount <= 0) {
    alert("Invalid amount. Please enter a positive number.");
    return;
  }
  balance += amount;
  alert(`Deposited ₹${amount.toFixed(2)}. New balance: ₹${balance.toFixed(2)}`);
}

// TODO-2: Implement withdraw()
// Prompt for amount; reject NaN/≤0; reject if amount > balance; deduct & alert.
function withdraw() {
  const amnt = prompt("Enter amount to withdraw:");
  if (amnt === null) return;
  const amount = parseFloat(amnt);
  if (Number.isNaN(amount) || amount <= 0) {
    alert("Invalid amount. Please enter a positive number.");
    return;
  }
  if (amount > balance) {
    alert("Insufficient balance.");
    return;
  }
  balance -= amount;
  alert(`Withdrew ₹${amount.toFixed(2)}. Remaining balance: ₹${balance.toFixed(2)}`);

}

function runATM() {
  while (true) {
    const choice = getMenuChoice();
    console.log("User chose:", choice);
    switch (choice) {
      case 1:
        checkBalance();
        break;
      case 2:
        withdraw();
        break;
      case 3:
        deposit();
        break;
      case 4:
        alert("Thank you for using the ATM. Goodbye!");
        return; // exit loop
    }
  }
}

document.getElementById("start").addEventListener("click", runATM);
