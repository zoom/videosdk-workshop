const express = require('express');
const router = express.Router();


const userControllers = require('./Controllers/userControllers')


router.post('/generate', userControllers.generateToiken, (req, res) => {
  res.status(200).json(res.locals.signature)
})

module.exports = router;