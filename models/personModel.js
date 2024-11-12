const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Person schema
const personSchema = new Schema({
    name: { type: String, required: true, trim: true },
    party: { type: String, required: true, trim: true },
    position: { type: String, required: true, trim: true },
    startDatePos: { type: String, trim: true }
});

// Export the model
const Person = mongoose.model('Person', personSchema);
module.exports = Person;