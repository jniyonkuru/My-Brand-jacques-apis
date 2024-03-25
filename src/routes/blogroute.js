import express from  'express'
import BlogController from '../controllers/blogcontroller.js'
import AuthMiddleware from "../middlewares/authmiddleware.js";
import multer from 'multer'
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null,`${file.originalname}`+uniqueSuffix)
    }
  })
const upload =multer({storage:storage})
const router= express.Router();
router.get('/searchByQuery',BlogController.search)
router.post('/',upload.single('image'),AuthMiddleware.isAuthenticated,BlogController.writeBlog);
router.put('/:id',upload.single('image'),BlogController.updateBlog);
router.get('/',BlogController.getAllBlogs);
router.get('/:id',BlogController.getOneBlog);
router.delete('/:id',AuthMiddleware.isAuthenticated,AuthMiddleware.checkRole,BlogController.deleteBlog);
router.post('/:id/like',AuthMiddleware.isAuthenticated,BlogController.likeBlog);

export default router;