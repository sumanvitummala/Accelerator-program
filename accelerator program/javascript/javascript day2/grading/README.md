# Student Grading System — Problem Statement

You are designing a **student grading tool** that accepts multiple scores and assigns letter grades (A–F).  
It should also calculate the class average.  

### Current Features Implemented
- Students can input multiple scores using prompts.
- Results are displayed in both console (using `console.table`) and alerts.

### Your TODOs
1. **`getLetterGrade(score)`** – Implement grade logic (A: 90+, B: 80–89, C: 70–79, D: 60–69, F: <60). Reject out-of-range inputs as “Invalid”.  
2. **`computeAverage(scores)`** – Write an arrow function to compute the average of all scores. If no scores are entered, return NaN.  
