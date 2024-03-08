import express from "express";
import MessageController from "../controllers/messageController.js";
import AuthMiddleware from "../middlewares/authmiddleware.js";
const router=express.Router();
router.post('/',MessageController.messageRegister)
router.get('/',AuthMiddleware.isAuthenticated,AuthMiddleware.checkRole,MessageController.getAllMessages)
router.get('/:id',AuthMiddleware.isAuthenticated,AuthMiddleware.checkRole,MessageController.getOneMessage);
router.delete('/:id',AuthMiddleware.isAuthenticated,AuthMiddleware.checkRole,MessageController.deleteOneMessage);

export default router;