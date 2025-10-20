import mongoose from 'mongoose'
const LessonSchema = new mongoose.Schema({
  title: String,
  language: String,
  level: { type: String, enum: ['basic','intermediate','advanced'] },
  content: Object
}, { timestamps: true })
export default mongoose.model('Lesson', LessonSchema)
