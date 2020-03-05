const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const organizationSchema = new Schema({
    name: String,
    description: String,
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    maps: [{
        type: Schema.Types.ObjectId,
        ref: 'Map'
    }],

    publications: [{
        type: Schema.Types.ObjectId,
        ref: 'Project'
    }],
    team: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    image: [String]

}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

const Organization = mongoose.model('Organization', organizationSchema);
module.exports = Organization;
