const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    name: String,
    proposal: String,
    opportunity: String,
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    maps: [{
        type: Schema.Types.ObjectId,
        ref: 'MapGraph'
    }],

    team: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    images: [String],

    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],

}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

const Project = mongoose.model('Publication', projectSchema);
module.exports = Project;
