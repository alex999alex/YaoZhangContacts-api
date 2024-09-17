import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Contacts route');
});

// Get all contacts
router.get('/all', (req, res) => {
    res.send('All contacts');
  });
  
  // Get a contact by id
  router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.send('Contact by id ' + id);
  });

// to-do: add post, put, and delete routers

router.post('/create', (req, res) => {
    const id = req.params.id;
    res.send('Create a new contact ' + id);
  });


// router.post('/create', (req, res) => {
//     const newContact = req.body;
//     res.send('Create a new contact: ' + newContact);
//   });


router.put('/update', (req, res) => {
    const id = req.params.id;
    res.send('Update a new contact ' + id);
  });


// router.put('/update/:id', (req, res) => {
//     const id = req.params.id;
//     const updateContact = req.body;
//     res.send('Update a new contact with ID: ' + id  + updateContact);
//   });


router.delete('/delete', (req, res) => {
    const id = req.params.id;
    res.send('Delete a new contact ' + id);
  });


// router.delete('/delete/:id', (req, res) => {
//     const id = req.params.id;
//     res.send('Delete a contact with ID: ' + id);
//   });

  
  

  

export default router;
