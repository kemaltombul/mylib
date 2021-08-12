module.exports = (req, res) => {
  const { username, password } = req.body;
  if (
    username === process.env.USER_NAME.toString().trim() &&
    password === process.env.PASSWORD.toString().trim()
  ) {
    res.cookie("username", "kemal", { maxAge: 1000 * 60 * 60 * 24 });
    return res.json({ message: "Giriş başarılı" });
  } else {
    return res.json({ message: "Giriş başarısız!!!" });
  }
};
