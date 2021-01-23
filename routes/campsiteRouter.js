const router = require("express").Router();
const Campsite = require("../models/campsiteModel");
const e = require("express");

router.get("/", async (req, res) => {
  let response = {};
  try {
    let campsite = await Campsite.find({});
    response.success = true;
    response.body = campsite;
    res.json(response);
  } catch (error) {
    response.message = error;
    res.json(response);
  }
});

module.exports = router;
