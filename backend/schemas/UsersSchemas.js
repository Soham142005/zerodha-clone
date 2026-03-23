const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
});

// Password hashing middleware
// NEW ASYNC WAY
userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  
  this.password = await bcrypt.hash(this.password, 12);
  // No next() needed here!
});

module.exports = userSchema; // Exporting the structure