const express = require("express");
const router = express.Router();
const Books = require("../models/BookSchema");

router.get("/", async (req, res) => {
  const books = await Books.find()
    .populate("category")
    .populate("publisherName");
  res.json(books);
});

router.post("/", async (req, res) => {
  const { bookname, authorName, page, publisherName, category } = req.body;

  const book = await Books.create({
    bookname,
    authorName,
    page,
    publisherName,
    category,
  });

  return res.json(book);
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const { bookname, authorName, page, publisherName, category } = req.body;

  const book = await Books.findByIdAndUpdate(
    id,
    {
      bookname,
      authorName,
      page,
      publisherName,
      category,
    },
    {
      new: true,
    }
  );

  return res.json(book);
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const result = await Books.findByIdAndDelete(id);

  res.json(result);
});

module.exports = router;
