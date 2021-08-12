var express = require("express");
var router = express.Router();
const Category = require("../models/CategoriesSchema");

//###
router.get("/", async (req, res) => {
  const cat = await Category.find();

  return res.json(cat);
});

//###
router.post("/", async (req, res) => {
  const catName = req.body.catName;

  if (catName === "" || catName === undefined) {
    return res.json({ message: "Kategori adı geçersiz." });
  } else {
    const cat = await Category.create({ catName });
    return res.json(cat);
  }
});

//###
router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const catName = req.body.catName;

  if (id === "" || id === undefined) {
  } else {
    const cat = await Category.findByIdAndUpdate(
      id,
      { catName },
      { new: true }
    );
    res.json(cat);
  }
});

//###
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const result = await Category.findByIdAndDelete(id);
  res.json(result);
});

module.exports = router;
