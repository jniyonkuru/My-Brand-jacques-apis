import express from  'express'
import PortfolioController from '../controllers/portfoliocontroller.js';
import AuthMiddleware from "../middlewares/authmiddleware.js";
import multer from 'multer'
const router= express.Router()
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null,`${file.originalname}`+uniqueSuffix)
    }
  })
  const upload= multer({storage:storage})
  router.post('/',upload.single('image'),PortfolioController.writePortfolio);
  router.get('/',PortfolioController.getPortfolio);
  router.delete('/:id',AuthMiddleware.isAuthenticated,PortfolioController.deletePortfolio)




  export default router;

  