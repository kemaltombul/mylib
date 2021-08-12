const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema(
  {
    bookname: { type: String, required: true },
    authorName: { type: String, required: true },
    page: { type: Number, required: true },
    publisherName: {
      type: mongoose.Types.ObjectId,
      ref: "Publisher",
    },
    category: {
      type: mongoose.Types.ObjectId,
      ref: "Category",
    },
  },
  {
    timestamps: true,
  }
);

const Books = mongoose.model("Book", BookSchema);
module.exports = Books;
