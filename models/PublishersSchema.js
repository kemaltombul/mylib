const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PublisherSchema = new Schema(
  {
    publisherName: {
      type: String,
      maxLength: 50,
      minLength: 2,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Publishers = mongoose.model("Publisher", PublisherSchema);
module.exports = Publishers;
