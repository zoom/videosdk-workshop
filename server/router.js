const express = require('express');
const router = express.Router();


const userControllers = require('./Controllers/userControllers')

//add in middleware
router.post('/generate', userControllers.generateToken, (req, res) => {
  res.status(200).json(res.locals.signature)
})

module.exports = router;