import express from "express";
import MessageController from "../controllers/messageController.js";
import AuthMiddleware from "../middlewares/authmiddleware.js";
const router=express.Router();
router.post('/',MessageController.messageRegister)
router.get('/',MessageController.getAllMessages)
router.get('/:id',AuthMiddleware.isAuthenticated,AuthMiddleware.checkRole,MessageController.getOneMessage);
router.delete('/:id',AuthMiddleware.isAuthenticated,AuthMiddleware.checkRole,MessageController.deleteOneMessage);
router.delete('/',AuthMiddleware.isAuthenticated,AuthMiddleware.checkRole,MessageController.deleteAllMessages)

export default router;