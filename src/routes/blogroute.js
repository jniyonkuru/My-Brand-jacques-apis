import express from  'express'
import BlogController from '../controllers/blogcontroller.js'
import AuthMiddleware from "../middlewares/authmiddleware.js";
const router= express.Router();
router.post('/',AuthMiddleware.isAuthenticated,BlogController.writeBlog);
router.put('/:id',BlogController.updateBlog);
router.get('/',BlogController.getAllBlogs);
router.get('/:id',BlogController.getOneBlog);
router.delete('/:id',BlogController.deleteBlog);
router.post('/:id/like',AuthMiddleware.isAuthenticated,BlogController.likeBlog);
export default router;