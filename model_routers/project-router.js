const router = require("express").Router();

const Project = require("./project-model");
const Action = require("./action-model");

// get all projects
router.get("/", async (req, res) => {
  try {
    const project = await Project.find();

    res.status(200).json(project);
  } catch (error) {
    res
      .status(500)
      .json({ message: "We ran into an error retrieving the projects" });
  }
});

// get projects by id
router.get("/:id", async (req, res) => {
  try {
    const project = await Project.find()
      .where({ id: req.params.id })
      .first();
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json(error);
  }
});

// get a project by its id and return an nested object of actions
router.get("/:id/actions", async (req, res) => {
  try {
    const project = await Project.find()
      .where({ id: req.params.id })
      .first();

    const action = await Action.find().where({ project_id: req.params.id });

    const fullProject = {
      id: project.id,
      name: project.name,
      description: project.description,
      completed: project.isCompleted === 0 ? false : true, // the database will return 1 for true and 0 for false
      action: action.map(i => {
        return {
          id: i.id,
          description: i.description,
          notes: i.notes,
          completed: i.isCompleted === 0 ? false : true
        };
      })
    };
    res.status(200).json(fullProject);
  } catch (error) {
    res.status(500).json({ message: "Oops, we ran into an error." });
  }
});

// post a new project
router.post("/", async (req, res) => {
  const project = req.body;

  if (project.name) {
    try {
      const inserted = await Project.add(project);
      res.status(201).json(inserted);
    } catch (error) {
      res
        .status(500)
        .json({ message: "We ran into an error creating the project" });
    }
  } else {
    res.status(400).json({ message: "Please provide name of the project" });
  }
});

module.exports = router;
