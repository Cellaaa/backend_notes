import express from 'express'
import notesRoute from './notes.route.js'

const router = express.Router()

router.use(notesRoute)

export default router