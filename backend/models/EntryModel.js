import mongoose from 'mongoose';

const EntrySchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  textBody: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    required: true,
    default: Date.now()
  }
})

const Entry = mongoose.model('Entry', EntrySchema);

export default Entry;