const express = require('express')

// controller functions
const { loginUser, signupUser,getUser } = require('../controllers/userController')

const router = express.Router()

// login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)
//get users
router.get('/users',getUser)

module.exports = router