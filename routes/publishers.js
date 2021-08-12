var express = require("express");
var router = express.Router();
const Publishers = require("../models/PublishersSchema");

//###
router.get("/", async (req, res) => {
  const publish = await Publishers.find();
  return res.json(publish);
});

//###
router.post("/", async (req, res) => {
  const publisherName = req.body.publisherName;

  if (publisherName === "" || publisherName === undefined) {
    return res.json({ message: "Yayıncı adı geçersiz." });
  } else {
    const publish = await Publishers.create({ publisherName });
    return res.json(publish);
  }
});

//###
router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const publisherName = req.body.publisherName;

  if (id === "" || id === undefined) {
  } else {
    const publish = await Publishers.findByIdAndUpdate(
      id,
      { publisherName },
      { new: true }
    );
    res.json(publish);
  }
});

//###
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const result = await Publishers.findByIdAndDelete(id);
  res.json(result);
});

module.exports = router;
