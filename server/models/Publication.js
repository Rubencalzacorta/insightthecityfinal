const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const publicationSchema = new Schema({
    proposal: String,
    opportunity: String,
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    map: {
        type: Schema.Types.ObjectId,
        ref: 'map'
    },

    team: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    image: [String],

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

const Publication = mongoose.model('Publication', publicationSchema);
module.exports = Publication;
