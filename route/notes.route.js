import express from 'express'
import { deleteNotes, getNotes, insertNotes, updateNotes } from '../controller/notes.controller.js'

const router = express.Router()

router.get('/notes', getNotes)
router.post('/notes',insertNotes)
router.put('/notes/:id',updateNotes)
router.delete('/notes/:id',deleteNotes)

export default router