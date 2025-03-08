const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const boardSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  ownerAuth0Id: {  // Auth0 ID of the board owner
    type: String,
    required: true,
  },
  members: [  // Stores users and their roles
    {
      auth0Id: { type: String, required: true },  // Auth0 user ID
      role: { type: String, enum: ["admin", "editor", "viewer"], required: true },
    }
  ],
}, { timestamps: true });

module.exports = mongoose.model("board", boardSchema);
