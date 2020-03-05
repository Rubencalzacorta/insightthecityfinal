const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mapSchema = new Schema({
    username: String,
    password: String,
    image: String,
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    notes: {
        type: Schema.Types.ObjectId,
        ref: 'Note'
    },

    filters: [{
        demografic: String,
        googleKWords: [String],
        zoom: String,
        center: String,
    }],

}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

const MapGraph = mongoose.model('MapGraph', mapSchema);
module.exports = MapGraph;
