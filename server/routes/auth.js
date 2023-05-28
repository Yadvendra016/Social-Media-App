import express from 'express';
import {currentUser, forgotPassword, login, register, profileUpdate} from '../controllers/auth.js'
// middleware
import { requireSignIn } from "../middlewares";

const router = express.Router();

router.post('/register', register);
router.post('/login', login );
router.get('/current-user',requireSignIn, currentUser); // this is to check is user authorised to access the protected page,
router.post('/forgot-password',forgotPassword);
//to update user
router.put('/profile-update',requireSignIn, profileUpdate)

module.exports = router; // each file in node.js treated as module