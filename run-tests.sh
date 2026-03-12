#!/bin/bash

# T-Logical HR System - Cypress Test Runner
# This script runs all Cypress tests and generates a report

echo "================================"
echo "T-Logical HR System Test Suite"
echo "================================"
echo ""

# Install dependencies if needed
echo "Installing dependencies..."
npm install

# Run Cypress tests
echo ""
echo "Running Cypress tests..."
npx cypress run --headless --browser chrome

# Generate Excel report
echo ""
echo "Generating Excel report..."
npm run generate-report

echo ""
echo "================================"
echo "Tests completed!"
echo "Report generated in: cypress/reports/"
echo "================================"
