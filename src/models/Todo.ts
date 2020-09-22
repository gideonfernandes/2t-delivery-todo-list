import mongoose from 'mongoose';

const TodosSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
});

export default mongoose.model('Todos', TodosSchema);
