import express from "express"
import AuthMiddleware from "../middlewares/authmiddleware.js"
import CommentsController from "../controllers/commentcontroller.js";
const router=express.Router();
router.post('/:blogId/comments',AuthMiddleware.isAuthenticated,CommentsController.writeComment)
router.get('/:blogId/comments',AuthMiddleware.isAuthenticated,CommentsController.getAllComments);
router.put('/:blogId/comments/:commentId',AuthMiddleware.isAuthenticated,CommentsController.updateComment);
router.delete('/:blogId/comments/:commentId',AuthMiddleware.isAuthenticated,CommentsController.deleteComment);
router.delete('/:blogId/comments',AuthMiddleware.isAuthenticated,CommentsController.deleteAllComments)
export default router;




