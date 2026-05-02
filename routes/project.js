const express = require("express");
const router = express.Router();
const Project = require("../models/Project"); // 

// CREATE PROJECT
router.post("/", async (req, res) => {
  try {
    const { name, description } = req.body;

    const project = new Project({
      name,
      description
    });

    await project.save();

    res.status(201).json(project);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET ALL PROJECTS
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;