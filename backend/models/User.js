import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const UserSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true, select: false },
  full_name: String,
  target_language: String,
  learning_purpose: String,
  current_level: String,
  profile_completed: { type: Boolean, default: false },
  jam_gender: { type: String, enum: ['male','female'], default: 'female' },
  points: { type: Number, default: 0 }
}, { timestamps: true })

UserSchema.pre('save', async function(next){
  if (!this.isModified('password')) return next()
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
  next()
})

UserSchema.methods.comparePassword = function(candidate){
  return bcrypt.compare(candidate, this.password)
}

export default mongoose.model('User', UserSchema)
