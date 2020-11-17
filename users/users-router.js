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


router.get('/:id', (req, res) => {
  const {id} = req.body;
  Users.getClassById(id)
    .then(classes => {
      res.status(200).json({data: classes});
    })
    .catch(err => {
      res.status(500).json({message: 'Could not fetch classes', error: err.message});
    });
});


router.get('/type', (req, res) => {
  const {type} = req.body;
   console.log(type);

  Users.getClassType(type)
    .then(clas => {
      if (clas.length > 0) {
        res.status(200).json({data: clas});
      } else {
        res.status(400).json({err: 'there is a big error'});
      }
    })
    .catch(err => {
      res.status(500).json({message: 'Error fetching type', error: err.message});
    });
});

router.get('/intensity', (req, res) => {
  const {intensity} = req.body;

  Users.getIntensity(intensity)
    .then(level => {
      if (level.length > 0) {
        res.status(200).json({data: level});
      } else {
        res.status(400).json({message: 'please choose between low, high or medium'});
      }
    })
    .catch(err => {
      res.status(500).json({message: 'Failed to fetch data', error: err.message});
    });
});

router.get('/location', (req, res) => {
  const {location} = req.body;

  Users.getByLocation(location)
    .then(clas => {
      if (clas) {
        res.status(200).json({data: clas});
      } else {
        res.status(400).json({error: 'could not find location'});
      }
    })
    .catch(err => {
      res.status(500).json({message: 'Error loading data', error: err.message});
    });
});

router.get('/duration', (req, res) => {
  const {duration} = req.body;

  Users.getByDuration(duration)
    .then(clas => {
      if (clas) {
        res.status(200).json({data: clas});
      } else {
        res.status(400).json({message: 'error'});
      }
    })
    .catch(err => {
      res.status(500).json({error: 'Error fetching data'});
    });
});

router.get('/instructor', (req, res) => {
  const {instructor_name} = req.body;

  Users.getByInstructor(instructor_name)
    .then(clas => {
      if (clas) {
        res.status(200).json({data: clas});
      } else {
        res.status(404).json({message: 'could not find class by instructor'});
      }
    })
    .catch(err => {
      res.status(500).json({message: 'Error fetching instructor'});
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