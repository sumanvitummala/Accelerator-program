# Movie Ticket Booking — Problem Statement

You are building a **ticket booking system for a movie theatre**.  
The user can select ticket types (adult, child, senior), and the program should calculate the total cost.  

### Current Features Implemented
- Ticket types and prices are predefined (`adult=250`, `child=150`, `senior=200`).
- Users can add tickets in a loop until they cancel.
- A summary function displays tickets booked and the final cost.

### Your TODOs
1. **`getPrice(type)`** – Implement using a `switch` statement. For valid ticket types, return the correct price. For invalid types, return “Invalid type”.  
2. **`totalCost()`** – Write an arrow function that uses `reduce` to calculate the total cost of all tickets in the `cart` array.  
