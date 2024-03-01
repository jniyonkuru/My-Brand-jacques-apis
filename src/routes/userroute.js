import express from 'express';
import _ from 'lodash';
import bcrypt from 'bcrypt';
const router=express.Router();
import User from '../models/usermodel.js';
import { validateUser } from '../utils/validateUsers.js';
import UserController from '../controllers/usercontroller.js';
router.post('/',UserController.registerUser);
router.get('/',UserController.getAllUsers);
router.get('/:id',UserController.getOneUser);
router.delete('/:id',UserController.deleteOneUser)
 export default router;