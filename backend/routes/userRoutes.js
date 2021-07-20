import express from 'express'
const router = express.Router()
import { getUsers, authUsers, getUserProfile, registerUser } from '../controllers/userController.js'
import protect from '../middleware/authMiddleware.js'

router.route('/').get(getUsers)
router.post('/login',authUsers)
router.route('/profile').get(protect, getUserProfile)
router.route('/registration').post(registerUser)
export default router