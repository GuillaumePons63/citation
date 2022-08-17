const express = require('express');
const router = express.Router()

const notesCtrl = require('../controllers/notes')

router.get('/:id',
    notesCtrl.getNotes
)

router.post('/:id/newnote',
    notesCtrl.createNote
)



module.exports = router
