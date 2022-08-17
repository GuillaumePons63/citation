const express = require('express');
const router = express.Router()

const jokesCtrl = require('../controllers/jokes');



router.get('/all',
    jokesCtrl.getAllJoke
)

router.get('/one/:id',
    jokesCtrl.getOneJoke
)

router.delete('/delete/:id',
    jokesCtrl.deleteOneJoke
)


router.post('/new',
    jokesCtrl.createJoke
)

module.exports = router;