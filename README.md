# TypeScript Silent Type Error

This repository demonstrates a subtle type error in TypeScript where adding a string and a number does not produce a compile-time error, but rather a runtime error (NaN).  The issue highlights the need for careful consideration of type handling, especially when dealing with potential type mismatches.

## Bug Report

The code in `bug.ts` attempts to add a string to a number.  While this would result in a runtime error in JavaScript, TypeScript does not throw an error during compilation.  This can lead to unexpected behavior in production, and makes debugging more difficult. 

## Solution

The solution demonstrated in `bugSolution.ts` uses type guards to enforce type checking at compile time and prevent this silent type error. This makes the error more explicit, improving the overall development experience.