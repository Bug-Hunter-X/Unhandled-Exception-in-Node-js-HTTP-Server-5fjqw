# Node.js Unhandled Exception Example

This repository demonstrates a common error in Node.js applications: unhandled exceptions in HTTP servers.  Without proper error handling, these exceptions can cause the application to crash unexpectedly.

## The Problem

The `bug.js` file contains a simple HTTP server. However, it lacks error handling. If an error occurs during server operation (e.g., network issues, etc.), the application will crash without providing a useful error message.

## The Solution

The `bugSolution.js` file demonstrates how to add an `error` event listener to the server. This listener catches exceptions, logs them, and prevents the application from crashing abruptly.

## How to run

1. Clone the repository: `git clone <repository_url>`
2. Navigate to the repository directory: `cd <repository_directory>`
3. Run the buggy code: `node bug.js` (Observe the unexpected crash if error occurs)
4. Run the solution code: `node bugSolution.js` (Observe error logging and continued application operation)