const router = require("express").Router();
const Comment = require("../models/commentModel.js");
const e = require("express");

router.get("/", async (req, res) => {
  let response = {};
  try {
    let comment = await Comment.find({});
    response.success = true;
    response.body = comment;
    res.json(response);
  } catch (error) {
    response.message = error;
    res.json(response);
  }
});

router.post("/", async (req, res) => {
  let response = {};
  console.log(req.body);
  try {
    if (req.body.text) {
      let comment = new Comment(req.body);
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
    } else {
      response.message = "Could not post comment";
      res.json(response);
    }
  } catch (error) {
    response.message = `Could not post comment. Error: ${error}`;
    res.json(response);
  }
});

module.exports = router;
