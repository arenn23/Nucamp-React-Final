const router = require("express").Router();
const Feedback = require("../models/feedbackModel.js");
const e = require("express");

router.post("/", async (req, res) => {
  let response = {};
  console.log(req.body);
  try {
    let comment = new Feedback(req.body);
    await comment.save(function (err) {
      if (err) {
        console.log(err);
        return;
      }
    });

    response.message = "Successfully posted a comment";
    response.success = true;
    response.comment = comment;

    res.json(response);
  } catch (error) {
    response.message = `Could not post comment. Error: ${error}`;
    res.json(response);
  }
});

module.exports = router;
