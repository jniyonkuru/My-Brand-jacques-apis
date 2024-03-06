import express from "express"
import AuthMiddleware from "../middlewares/authmiddleware.js"
import CommentsController from "../controllers/commentcontroller.js";
const router=express.Router();
router.post('/:id',AuthMiddleware.isAuthenticated,CommentsController.writeComment)
router.get('/',AuthMiddleware.isAuthenticated,CommentsController.getAllComments);
router.put('/:id',AuthMiddleware.isAuthenticated,CommentsController.updateComment);
router.delete('/:id',AuthMiddleware.isAuthenticated,CommentsController.deleteComment);
export default router;




