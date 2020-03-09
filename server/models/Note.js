const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({

    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    // map: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Note'
    // },

    text: String,

}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

const Note = mongoose.model('Comment', noteSchema);
module.exports = Note;
