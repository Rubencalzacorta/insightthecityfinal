const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mapSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    notes: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }],


    active: Schema.Types.Mixed,
    googleKWords: String,
    searchPoints: Schema.Types.Mixed,
    lng: Number,
    lat: Number,
    zoom: Number



}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

const MapGraph = mongoose.model('MapGraph', mapSchema);
module.exports = MapGraph;
