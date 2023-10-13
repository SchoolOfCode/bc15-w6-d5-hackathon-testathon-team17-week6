// Import vitest
// Also, run vitest to check if it's up-to-date
// Test completed
import { test, expect } from "vitest";

// import the Express app from app.js
import app from "../app.js";

// import the function from Supertest (maybe call it `request` like the documentation did)
import request from "supertest";

// Import resetUsersTable function (this resets our database)te
import { resetUsersTable } from "../db/helpers.js";

