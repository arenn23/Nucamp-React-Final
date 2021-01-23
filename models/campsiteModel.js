const mongoose = require("mongoose");
const campsiteSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  elevation: {
    type: [Number],
    required: true,
  },
  featured: {
    type: Boolean,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Campsite", campsiteSchema);
