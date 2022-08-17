const express = require('express');
const router = express.Router()

const usersCtrl = require('../controllers/users')

router.post('/signin',
    usersCtrl.createUser
)

router.post('/connect',
    usersCtrl.connectUser
)

module.exports = router