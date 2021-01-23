const router = require("express").Router();
const Promotion = require("../models/promotionModel.js");
const e = require("express");

router.get("/", async (req, res) => {
  let response = {};
  try {
    let promotion = await Promotion.find({});
    response.success = true;
    response.body = promotion;
    res.json(response);
  } catch (error) {
    response.message = error;
    res.json(response);
  }
});

module.exports = router;
