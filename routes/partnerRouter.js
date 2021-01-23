const router = require("express").Router();
const Partner = require("../models/partnerModel.js");
const e = require("express");

router.get("/", async (req, res) => {
  let response = {};
  try {
    let partner = await Partner.find({});
    response.success = true;
    response.body = partner;
    res.json(response);
  } catch (error) {
    response.message = error;
    res.json(response);
  }
});

module.exports = router;
