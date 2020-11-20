const express = require('express');
const Class = require('./instructor-model');
const {checkInstructor} = require('../auth/instructor-middleware');
const restricted = require('../auth/restricted-middleware');
const usersModel = require('../users/users-model');

const router = express.Router();

router.use(restricted);
router.use(checkInstructor);

//get classes
router.get('/', (req, res) => {
  Class.getClass()
    .then(Class => {
      res.status(200).json({Class});
    })
    .catch(err => {
      res.status(500).json({error: err.message});
    });
});

//get users
router.get('/users', (req, res) => {
  Class.getUsers()
    .then(user => {
      res.status(200).json({user});
    })
    .catch(err => {
      res.status(500).json({error: err.message});
    });
});

//post a new class 
router.post('/', (req, res) => {
  const data = req.body;

  Class.addClass(data)
    .then(classes => {
      res.status(200).json({data: classes});
    })
    .catch(err => {
      res.status(500).json({message: 'could not add', error: err.message});
    });
});


//update a class 
router.put('/:id', (req, res) => {
  const changes = req.body;
  const {id} = req.params;

  Class.updateClass(id, changes)
    .then(Class => {
      if (Class) {
        res.status(200).json({Class});
      } else {
        res.status(404).json({error: 'please provide right information'});
      }
    })
    .catch(err => {
      res.status(500).json({message: 'There was an error updating', error: err.message});
    });
});

//delete a class 

router.delete('/:id', (req, res) => {
  const {id} = req.params;

  Class.removeClass(id)
    .then(clas => {
      if (clas) {
        res.status(200).json({data: clas, message: 'class deleted'});
      } else {
        res.status(404).json({error: 'please provide correct id'});
      }
    })
    .catch(err => {
      res.status(500).json({message: 'Error deleting class', err: err.message});
    });
});

//get class by id

router.get('/:id', (req, res) => {
  const {id} = req.params;

  Class.getClassById(id)
    .then(Class => {
      res.status(200).json({Class});
    })
    .catch(err => {
      res.status(500).json({error: err.message});
    });
});

module.exports = router;