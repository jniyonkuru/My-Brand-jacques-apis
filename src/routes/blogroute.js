import express from  'express'
import BlogController from '../controllers/blogcontroller.js'
import AuthMiddleware from "../middlewares/authmiddleware.js";
const router= express.Router();
router.post('/',BlogController.writeBlog);
router.put('//:id',BlogController.updateBlog);
router.get('/',BlogController.getAllBlogs);
router.get('/:id',BlogController.getOneBlog);
router.delete('/:id',BlogController.deleteBlog);
router.post('/:id/like',AuthMiddleware.isAuthenticated,BlogController.likeBlog);
router.post('/:id/dislike',AuthMiddleware.isAuthenticated,BlogController.dislikeBlog)
export default router;