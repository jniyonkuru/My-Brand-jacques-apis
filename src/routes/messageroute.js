import express from "express";
import MessageController from "../controllers/messageController.js";
import AuthMiddleware from "../middlewares/authmiddleware.js";
const router=express.Router();
router.post('/inMessage',MessageController.messageRegister)
router.get('/allMessages',AuthMiddleware.isAuthenticated,AuthMiddleware.checkRole,MessageController.getAllMessages)
router.get('/oneMessage/:id',AuthMiddleware.isAuthenticated,AuthMiddleware.checkRole,MessageController.getOneMessage);
router.delete('/oneMessage/:id',AuthMiddleware.isAuthenticated,AuthMiddleware.checkRole,MessageController.deleteOneMessage);

export default router;