const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,

  password: String,

  imageURL: String,

  maps: [{
    type: Schema.Types.ObjectId,
    ref: 'MapGraph'
  }],

  projects: [{
    type: Schema.Types.ObjectId,
    ref: 'Project'
  }],

  organizations: [{
    type: Schema.Types.ObjectId,
    ref: 'Organization'
  }],

  favorites: [{
    type: Schema.Types.ObjectId,
    ref: 'project'
  }],

  name: String,

  lastName: String,

  email: String,

  description: String,

  experienceOverview: String,

  company: String,

  role: String,

  startDate: Date,

  endDate: Date,

  jobDescription: String

}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;



// workExperience: [{
//   company: String,
//   role: String,
//   startDate: Date,
//   endDate: Date,
//   jobDescription: String

// }]