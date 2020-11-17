const express = require('express');
const Users = require('./users-model');
const restricted = require('../auth/restricted-middleware');

const router = express.Router();

router.use(restricted);

router.get('/', (req, res) => {
  Users.getClass()
    .then(classes => {
      res.status(200).json({data: classes});
    })
    .catch(err => {
      res.status(500).json({message: 'Could not fetch classes', error: err.message});
    });
});


router.get("/search", (req, res) => {
  const filter = req.body;
  console.log(filter);
  Users.findClassesBy(filter)
    .then((classes) => {
      //   console.log("user router classes", classes);
      res.status(200).json({ data: classes });
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});


router.post('/:id/newclass', (req, res) => {
  const {class_id} = req.body;
  const user_id = req.params.id;

  Users.addClassToClient(user_id, class_id)
    .then(clas => {
      if (clas) {
        res.status(200).json({data: clas});
      } else {
        res.status(404).json({message: 'invalid id'});
      }
    })
    .catch(err => {
      res.status(500).json({message: err.message});
    });
});

router.get('/:id/enrolled', (req, res) => {
  const user_id = req.params.id;

  Users.getClientClasses(user_id)
    .then(clas => {
      res.status(200).json({data: clas});
    })
    .catch(err => {
      res.status(500).json({error: err.message});
    });
});



module.exports = router;