const mongoose = require("mongoose");
const userSchema = require("../schemas/UsersSchemas"); // Import the schema

// Fix: Pass both the Name AND the Schema
const User = mongoose.model("User", userSchema); 

module.exports = User;

