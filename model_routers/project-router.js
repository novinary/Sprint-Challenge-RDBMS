const router = require('express').Router();

const Project = require('./project-model')

router.get('/', async (req, res) => {
  try {
    const project = await Project.find();
    res.status(200).json(project);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'We ran into an error retrieving the projects' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (project) {
      res.status(200).json(project);
    } else {
      res.status(404).json({ message: 'We could not find the project' });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: 'We ran into an error retrieving the project' });
  }
});

router.get("/:id/actions", async (req, res) => {
  try {
    const action = await db("action").where({ project_id: req.params.id });
    res.status(200).json(action);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/', async (req, res) => {
  const project = req.body;

  if (project.name) {
    try {
      const inserted = await Project.add(project);
      res.status(201).json(inserted);
    } catch (error) {
      res
        .status(500)
        .json({ message: 'We ran into an error creating the project' });
    }
  } else {
    res.status(400).json({ message: 'Please provide name of the project' });
  }
});


module.exports = router;
