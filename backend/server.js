const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const port = 5000;
const uri = "mongodb://127.0.0.1:27017/todo-list";
// Require Routes
const taskRoutes = require("./src/routes/Task.route");
// Create Express App
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Connect to MongoDB
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"));

// use Routes
app.use("/tasks", taskRoutes);

// start server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
