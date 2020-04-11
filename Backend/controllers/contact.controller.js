const mongoose = require('mongoose');
const contact = mongoose.model('contact');

exports.list_all_tasks = (req, res) => {
  contact.find({}, (err, contacts) => {
    if (err) res.send(err);
    res.json(contacts);
  });
};

/*exports.create_a_task = (req, res) => {
  const newTask = new task(req.body);
  newTask.save((err, task) => {
    if (err) res.send(err);
    res.json(task);
  });
};

exports.read_a_task = (req, res) => {
  task.findById(req.params.taskId, (err, task) => {
    if (err) res.send(err);
    res.json(task);
  });
};

exports.update_a_task = (req, res) => {
  task.findOneAndUpdate(
    { _id: req.params.taskId },
    req.body,
    { new: true },
    (err, task) => {
      if (err) res.send(err);
      res.json(task);
    }
  );
};

exports.delete_a_task = (req, res) => {
  task.deleteOne({ _id: req.params.taskId }, err => {
    if (err) res.send(err);
    res.json({
      message: 'task successfully deleted',
     _id: req.params.taskId
    });
  });
};*/