const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
    allowedHeaders: ["Origin, X-Requested-With, Content-Type, Accept"],
  })
);
app.use(cookieParser());

const db = require("./config/db");
const error = require("./middlewares/error");
const login = require("./middlewares/login");

//Routes
const booksRouter = require("./routes/books");
const catRouter = require("./routes/cat");
const publishersRouter = require("./routes/publishers");
const loginPage = require("./routes/loginPage");

db(); //db bağlantı ayarları
app.use(express.json()); //req.body içindeki json değerleri alır.

app.post("/login", loginPage);
//middlewares
app.use(login);

app.use("/books", booksRouter);
app.use("/cat", catRouter);
app.use("/publishers", publishersRouter);

app.use(error);

module.exports = app;
