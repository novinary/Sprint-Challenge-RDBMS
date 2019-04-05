const router = require("express").Router();

const Action = require("./action-model");

// get all actions
router.get("/", async (req, res) => {
  try {
    const action = await Action.find();
    res.status(200).json(action);
  } catch (error) {
    res
      .status(500)
      .json({ message: "We ran into an error retrieving the actions" });
  }
});

// get actions by id
router.get("/:id", async (req, res) => {
  try {
    const action = await Action.findById(req.params.id);
    if (action) {
      res.status(200).json(action);
    } else {
      res.status(404).json({ message: "We could not find the action" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "We ran into an error retrieving the action" });
  }
});

// post a new action
router.post("/", async (req, res) => {
  const action = req.body;

  if (action.description) {
    try {
      const inserted = await Action.add(action);
      res.status(201).json(inserted);
    } catch (error) {
      res
        .status(500)
        .json({ message: "We ran into an error creating the action" });
    }
  } else {
    res
      .status(400)
      .json({ message: "Please provide description of the action" });
  }
});

module.exports = router;
