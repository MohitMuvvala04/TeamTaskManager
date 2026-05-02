const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

// CREATE TASK
router.post("/", async (req, res) => {
    try {
        const { title, project, assignedTo, dueDate } = req.body;

        const task = await Task.create({
            title,
            project,
            assignedTo,
            dueDate
        });

        res.json(task);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET ALL TASKS
router.get("/", async (req, res) => {
    try {
        const tasks = await Task.find()
            .populate("assignedTo", "name");

        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// UPDATE TASK STATUS
router.put("/:id", async (req, res) => {
    try {
        const { status } = req.body;

        const task = await Task.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true }
        );

        res.json(task);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

//  DASHBOARD API (keep BEFORE export)
router.get("/dashboard", async (req, res) => {
    try {
        const total = await Task.countDocuments();

        const completed = await Task.countDocuments({
            status: "Completed"
        });

        const pending = await Task.countDocuments({
            status: "Pending"
        });

        const overdue = await Task.countDocuments({
            dueDate: { $lt: new Date() },
            status: { $ne: "Completed" }
        });

        res.json({
            total,
            completed,
            pending,
            overdue
        });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 
module.exports = router;