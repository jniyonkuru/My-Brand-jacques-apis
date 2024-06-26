import express from 'express';
import _ from 'lodash';
import bcrypt from 'bcrypt';
import AuthMiddleware from '../middlewares/authmiddleware.js';
const router=express.Router();
import UserController from '../controllers/usercontroller.js';
router.post('/',UserController.registerUser);
router.post('/signup',UserController.registerUser);

router.get('/',UserController.getAllUsers);
router.get('/:id',UserController.getOneUser);
router.delete('/:id',AuthMiddleware.isAuthenticated,AuthMiddleware.checkRole,UserController.deleteOneUser);
router.put('/:id',AuthMiddleware.isAuthenticated,AuthMiddleware.checkRole,UserController.updateUser);
router.post('/login',UserController.loginUser);
 export default router;