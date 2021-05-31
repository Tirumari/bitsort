const express = require('express');
const router = express.Router();
// Load Bit model
const Bit = require('../../models/Bit');


router.get('/test', (req, res) => res.send('bit route testing'));

// @route GET api/bits
// @description Get all bits
// @access Public
router.get('/', (req, res) => {
  Bit.find()
    .then(bits => res.json(bits))
    .catch(err => res.status(404).json({ nobitsfound: 'No bits found' }));
});

// @route GET api/bits/:id
// @description Get single bit by id
// @access Public
router.get('/:id', (req, res) => {
  Bit.findById(req.params.id)
    .then(bit => res.json(bit))
    .catch(err => res.status(404).json({ nobitfound: 'No bit found' }));
});

// @route GET api/bits
// @description add/save bit
// @access Public
router.post('/', (req, res) => {
  Bit.create(req.body)
    .then(bit => res.json({ msg: 'Bit added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this bit' }));
});

// @route GET api/bits/:id
// @description Update bit
// @access Public
router.put('/:id', (req, res) => {
  Bit.findByIdAndUpdate(req.params.id, req.body)
    .then(bit => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/bits/:id
// @description Delete bit by id
// @access Public
router.delete('/:id', (req, res) => {
  Bit.findByIdAndRemove(req.params.id, req.body)
    .then(bit => res.json({ mgs: 'Bit entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a bit' }));
});

module.exports = router;