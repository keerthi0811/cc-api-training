var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("requests", {
    title: "Received HTTP GET Request",
    description: "Retrieved user data",
  });
});

router.put("/", function (req, res, next) {
  res.render("requests", {
    title: "Received HTTP PUT Request",
    description: "Updated user data",
  });
});

router.post("/", function (req, res, next) {
  res.render("requests", {
    title: "Received HTTP POST Request",
    description: "Submitted user data",
  });
});

router.delete("/", function (req, res, next) {
  res.render("requests", {
    title: "Received HTTP DELETE Request",
    description: "Deleted user data",
  });
});

module.exports = router;
