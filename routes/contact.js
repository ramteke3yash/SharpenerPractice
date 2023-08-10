const path = require("path");
const express = require("express");
const rootDir = require("../util/path");

const router = express.Router();

router.get("/contactus", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "contact-us.html"));
});

router.post("/success", (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;

  res.send("Form successfully filled");
});

module.exports = router;
