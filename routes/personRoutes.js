const express = require('express');
const router = express.Router();
const personController = require('../controllers/personController');

router.get('/', personController.getAllPersons);
router.post('/persons', personController.createPerson);
router.put('/persons/:id', personController.updatePerson);
router.delete('/persons/:id', personController.deletePerson);

module.exports = router;