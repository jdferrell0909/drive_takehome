import express from 'express';
import entryController from '../controllers/entryController.js';

const entryRoute = express.Router();

entryRoute.get('/api', entryController.getEntries, (req, res) => {
  res.status(200).json("API running......");
})

entryRoute.post('/api/newEntry', entryController.postEntry, (req, res) => {
  res.status(201).json('Entry Created!');
})

entryRoute.put('/api/updateEntry/:id', (req, res) => {
  res.status(200).json(`Entry number ${req.params.id} has been updated!`);
})

entryRoute.delete(`/api/delete/:id`, (req, res) => {
  res.status(200).json(`item number ${req.params.id} deleted`);
})

export default entryRoute;