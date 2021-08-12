module.exports = (req, res, next) => {
  if (req.cookies.username === "kemal") {
    next();
  } else {
    next({ message: "Giriş yapınız" });
  }
};
