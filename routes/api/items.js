

const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

//auth is added to protected routes
// Item Model
const Item = require('../../models/Item');

// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get('/', (req, res) => {
    Item.find()
      .sort({ date: -1 })
      .then(items => res.json(items));
  });

 



module.exports = router;