import mongoose from 'mongoose';

interface TodoDoc extends mongoose.Document {
  title: string;
  label: string;
  user: string;
}

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

export default mongoose.model<TodoDoc>('Todos', TodosSchema);
