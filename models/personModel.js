const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Person schema
const personSchema = new Schema({
    name: { type: String, required: true },
    party: { type: String, required: true },
    position: { type: String, required: true },
    startDatePos: String
});

const Person = mongoose.model('Person', personSchema);
module.exports = Person;