const mongoose = require("mongoose");

const db = () => {
  mongoose.Promise = global.Promise;
  mongoose.connect(
    process.env.DB_URL,
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (!err) {
        console.log("MongoDB Bağlantısı başarılı!");
      } else {
        console.log("DB Bağlantı hatası: " + err);
      }
    }
  );
};

module.exports = db;
