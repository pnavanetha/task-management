const Task = require("../models/taskModel");

exports.createTask = async (req, res) => {
  try {
    const task = await Task.create({
      ...req.body,
      createdBy: req.user.id
    });

    res.json(task);
  } catch (err) {
    res.status(500).json(err.message);
  }
};


exports.getTasks = async (req, res) => {
  try {
    let tasks;

    if (req.user.role === "admin") {
      tasks = await Task.find().populate("createdBy", "email name");
    } else {
      tasks = await Task.find({ createdBy: req.user.id })
        .populate("createdBy", "email name");
    }

    res.json(tasks);
  } catch (err) {
    res.status(500).json(err.message);
  }
};
// exports.updateTask = async (req, res) => {
//   try {
//     const task = await Task.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     );

//     res.json(task);
//   } catch (err) {
//     res.status(500).json(err.message);
//   }
// };

// exports.deleteTask = async (req, res) => {
//   try {
//     await Task.findByIdAndDelete(req.params.id);
//     res.json("Deleted");
//   } catch (err) {
//     res.status(500).json(err.message);
//   }
// };