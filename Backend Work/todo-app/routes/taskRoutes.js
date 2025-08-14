const express = require('express');
const router = express.Router();
const Task = require('../model/Task');

router.get('/', async (req, res) => {
  const tasks = await Task.find().sort({ deadline: 1 });
  res.render('index', { tasks });
});

router.post('/add', async (req, res) => {
  const { title, description, priority, deadline } = req.body;
  await Task.create({ title, description, priority, deadline });
  res.redirect('/');
});

router.post('/delete/:id', async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.redirect('/');
});

router.post('/edit/:id', async (req, res) => {
  const { title, description, priority, deadline } = req.body;
  await Task.findByIdAndUpdate(req.params.id, { title, description, priority, deadline });
  res.redirect('/');
});

router.post('/complete/:id', async (req, res) => {
  await Task.findByIdAndUpdate(req.params.id, { completed: true });
  res.redirect('/');
});

module.exports = router;
