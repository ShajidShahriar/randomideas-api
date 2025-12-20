const express = require("express");
const router = express.Router();
const Idea = require("../models/Idea");

//get all ideas
router.get("/", async (req, res) => {
  try {
    const ideas = await Idea.find();
    res.json({ success: true, data: ideas });
  } catch (error) {
    res.status(500).json({ success: false, error: "something went wrong" });
  }
});
// get a single idea
router.get("/:id", async (req, res) => {
  const idea = ideas.find((idea) => idea.id === +req.params.id);
  try {
    const idea = await Idea.findById(req.params.id);
    res.json({ success: true, data: idea });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "something went wrong" });
  }
});
//add an idea

router.post("/", async (req, res) => {
  const idea = new Idea({
    text: req.body.text,
    username: req.body.username,
    tag: req.body.tag,
  });
  try {
    const savedIdea = await idea.save();
    res.json({ success: true, data: savedIdea });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: true, error: "sometitng went wrong" });
  }
});
// update  idea
router.put("/:id", async (req, res) => {
  try {

    const idea = await Idea.findById(req.params.id)
    if(idea.username === req.body.username){
      const updatedIdea = await Idea.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          text: req.body.text,
          tag: req.body.tag,
        },
      },
      {
        new: true,
      }
    );
    res.json({ success: true, data: updatedIdea });
    }
    //usernames do not match
    return res.status(403).json({ success: false, error: "you are not authorised to update this resource" })
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "something went wrong" });
  }
});
// delete  idea
router.delete("/:id", async (req, res) => {
  try {
    const idea = await Idea.findById(req.params.id)
    //match the username
    if(idea.username === req.body.username){
      await Idea.findByIdAndDelete(req.params.id);
      return res.json({ success: true, data: {} });
    }
    //usernames do not match
    res.status(403).json({ success: false, error: "your are not authorized to delete this resource" })
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "something went wrong" });
  }
});
module.exports = router;
