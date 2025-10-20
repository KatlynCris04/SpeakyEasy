import mongoose from 'mongoose'
const ProgressSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  lesson: { type: mongoose.Schema.Types.ObjectId, ref: 'Lesson' },
  score: Number,
  timeSpentMinutes: Number
}, { timestamps: true })
export default mongoose.model('Progress', ProgressSchema)
