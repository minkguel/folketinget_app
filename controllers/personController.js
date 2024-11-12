const personModel = require('../models/personModel');

exports.getAllPersons = async (req, res) => {
    try {
        const persons = await personModel.find({});
        return res.status(200).send(persons);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching persons', error: error.message });
    }
};

exports.createPerson = async (req, res) => {
    try {
        const newPerson = new personModel(req.body);
        const person = await newPerson.save();
        return res.status(200).send(person)
    } catch (error) {
        return res.status(500).send(error);
    }
};

exports.updatePerson = async (req, res) => {
   try{
       const person = await personModel.findByIdAndUpdate(req.params.id,req.body, {new: true})
       return res.status(200).send(person)
   } catch (error){
       return res.status(500).send(error)
   }
};

exports.deletePerson = async (req,res) =>{
    try{
      await personModel.findByIdAndDelete(req.params.id)
        return res.status(200).send({message: 'Person has succesfully been deleted'})
    } catch (error){
        return res.status(500).send(error)
    }
};