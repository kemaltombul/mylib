module.exports = (req, res, next) => {
  const { username, password } = req.body;
  if (
    username === process.env.USER_NAME.toString().trim() &&
    password === process.env.PASSWORD.toString().trim()
  ) {
    res.header("Access-Control-Allow-Credentials", true);
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.cookie("username", "kemal", {
      expires: new Date(Date.now() + 900000),
      httpOnly: true,
    });
    return res.json({ message: "Giriş başarılı" });
  } else {
    return res.json({ message: "Giriş başarısız!!!" });
  }
};
