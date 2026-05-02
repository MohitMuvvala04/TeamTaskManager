const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/tasks", require("./routes/task"));

console.log("Loading project routes...");
app.use("/api/projects", require("./routes/project"));

// Root
app.get("/", (req, res) => {
  res.send("API Running");
});

// PORT (Railway support)
const PORT = process.env.PORT || 5000;

// Start server AFTER DB connect
async function startServer() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected");
    console.log("DB Ready");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (err) {
    console.error("Failed to connect DB:", err.message);
  }
}

startServer();