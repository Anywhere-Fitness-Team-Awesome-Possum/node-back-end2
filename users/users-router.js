const express = require('express');
const Users = require('./users-model');
const restricted = require('../auth/restricted-middleware');
//const { getUsers } = require('./users-model');

const router = express.Router();

router.use(restricted);

//get classes 
router.get('/', (req, res) => {
  Users.getClass()
    .then(classes => {
      res.status(200).json({data: classes});
    })
    .catch(err => {
      res.status(500).json({message: 'Could not fetch classes', error: err.message});
    });
});

//get users
router.get('/users', (req, res) => {
  Users.getUsers()
     .then(user => {
       res.status(200).json({user});
     })
     .catch(err => {
       res.status(500).json({error: err.message});
     });
 });

 //get all saved classes by user id
 router.get('/savedclasses/:id', (req, res) => {
  const { id } = req.params;
  Users.getFavoriteClass(id)
     .then(user => {
       res.status(200).json({data:user });
     })
     .catch(err => {
       res.status(500).json({error: err.message});
     });
 });

//get classes by class id
router.get('/:id', (req, res) => {
  const { id } = req.params;
  Users.getClassById(id)
 
    .then(classes => {
      res.status(200).json({data: classes});
    })
    .catch(err => {
      res.status(500).json({message: 'Could not fetch classes', error: err.message});
    });
});




//get users by user id
router.get('/users/:id', (req, res) => {
  const { id } = req.params;
  Users.getUserById(id)
 
    .then(users => {
      res.status(200).json({data: users});
    })
    .catch(err => {
      res.status(500).json({message: 'Could not fetch users', error: err.message});
    });
});




//search classes by details 
router.get("/search", (req, res) => {
  const filter = req.body;
  console.log(filter);
  Users.findClassesBy(filter)
    .then((classes) => {
  
      res.status(200).json({ data:classes});
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});


// router.post('/users/:id/newclass', (req, res) => {
//   const {class_id} = req.body;
//   const user_id = req.params.id;

//   Users.addClassToClient(user_id, class_id)
//     .then(clas => {
//       if (clas) { 
//         res.status(200).json({data: clas,user_id});
//       } else {
//         res.status(404).json({message: 'invalid id'});
//       }
//     })
//     .catch(err => {
//       res.status(500).json({message: err.message});
//     });
// });

// router.get('/users/:id/enrolled', (req, res) => {
//   const user_id = req.params.id;

//   Users.getClientClasses(user_id)
//     .then(clas => {
//       res.status(200).json({data: clas});
//     })
//     .catch(err => {
//       res.status(500).json({error: err.message});
//     });
// });



//add new class to user
router.post('/:id/newclass', (req, res) => {
  const {class_id} = req.body;
  const user_id = req.params.id;

  Users.addFavorite(user_id, class_id)
    .then(clas => {
      if (clas) {
        res.status(200).json({class:class_id, user_id});
      } else {
        res.status(404).json({message: 'invalid id'});
      }
    })
    .catch(err => {
      res.status(500).json({message: err.message});
    });
});



//get class by type- not working 
router.get('/:type', (req, res) => {
  const {type} = req.body;
   console.log(type);

  Users.getClassType(type)
    .then(clas => {
      if (clas.length > 0) {
        res.status(200).json({data: clas});
      } else {
        res.status(400).json({errr: 'there is a big error'});
      }
    })
    .catch(err => {
      res.status(500).json({message: 'Error fetching type', error: err.message});
    });
});












module.exports = router;