const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  auth0Id: {  // Store Auth0 user ID
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
}, { timestamps: true });

module.exports = mongoose.model("user", userSchema);
