import express from 'express';
import entryController from '../controllers/entryController.js';

const entryRoute = express.Router();

entryRoute.get('/api', entryController.getEntries, (req, res) => {
  res.status(200).json(res.locals.entries);
})

entryRoute.get('/api/getOneEntry/:id', entryController.getOneEntry, (req, res) => {
  res.status(200).json(res.locals.entry);
})

entryRoute.post('/api/newEntry', entryController.postEntry, (req, res) => {
  res.status(201).json(res.locals.id);
})

entryRoute.put('/api/updateEntry/:id', entryController.updateEntry, (req, res) => {
  res.status(200).json(`Entry number ${req.params.id} has been updated!`);
})

entryRoute.delete(`/api/delete/:id`, entryController.deleteEntry, (req, res) => {
  res.status(200).json(`item number ${req.params.id} deleted`);
})

export default entryRoute;