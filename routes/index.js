const express = require("express");
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date().toLocaleString(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date().toLocaleString(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Message Board", messages });
});

/* GET new message form */
router.get("/new", function (req, res, next) {
  res.render("form", { title: "New Message" });
});

/* POST new message */
router.post("/new", function (req, res, next) {
  const { name, message } = req.body;
  const msg = {
    text: message,
    user: name,
    added: new Date().toLocaleString(),
  };

  messages.push(msg);
  res.redirect("/");
});

module.exports = router;
