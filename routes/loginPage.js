module.exports = (req, res) => {
  const { username, password } = req.body;
  if (
    username === process.env.USER_NAME.toString().trim() &&
    password === process.env.PASSWORD.toString().trim()
  ) {
    res.writeHead(200, {
      "Content-type": "text/html; charset=utf-8",
      "Set-Cookie": "username=kemal",
    });
    res.cookie("username", "kemal", {
      expires: new Date(Date.now() + 900000),
      httpOnly: true,
    });
    return res.json({ message: "Giriş başarılı" });
  } else {
    return res.json({ message: "Giriş başarısız!!!" });
  }
};
