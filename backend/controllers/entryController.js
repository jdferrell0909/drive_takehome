import Entry from '../models/EntryModel.js';

const entryController = {};

entryController.getEntries = async (req, res, next) => {
  try {
    const entries = await Entry.find({});
    res.locals.entries = entries;
    return next();
  } catch (error) {
    console.error(`Error message in entryController ==> ${error.message}`);
    return next(error);
  }
}

entryController.postEntry = async (req, res, next) => {
  const { title, textBody } = req.body;
  try{
    await Entry.create({ title, textBody })
      .then(response => res.locals.id = response._id);
    return next();
  } catch (error) {
    console.error(`Error message in entryController ==> ${error.message}`);
    return next(error);
  }
}

entryController.deleteEntry = async (req, res, next) => {
  const id = req.params.id;
  try {
    await Entry.deleteOne({_id: id});
    return next();
  } catch (error) {
    console.error(`Error message in entryController ==> ${error.message}`);
    return next(error);
  }
}

export default entryController;