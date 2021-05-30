const path = require("path");

const express = require("express");

const router = express.Router();

// const
router.get("/", (req, res, next) => {
  //   res.sendFile(path.join(__dirname, "..", "views", "index.html"));
  res.render("index", { pageTitle: "Main Page", mainHeading: "Main Content" });
});

router.post("/users", (req, res, next) => {
  const usr_name = req.body.txt;
  console.log(usr_name);
  //   res.sendFile(path.join(__dirname, "..", "views", "users"));
  res.render("users", {
    pageTitle: "Users Page",
    mainHeading: "Submitted User Name:",
    userName: usr_name,
  });
});

module.exports = router;
