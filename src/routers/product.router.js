import express from 'express';
import productController from '~/controllers/product.controller';
import handleUpload from '~/middleware/loadImg.middleware';
const router = express.Router();
// const { authenticateAdmin } = require('../middlewares/auth.js');
router.put('/:masp', handleUpload, productController.updateProduct);
router.delete('/:masp', productController.deleteProductWithId);
router.post('/', handleUpload, productController.insertProduct);
router.get('/', productController.getAllProduct);
router.get('/:masp', productController.getById);
router.get('/tensp/:tensp', productController.getByName);
router.get('/loai/all', productController.getAllProType);
router.get('/loai/s/:loaisp', productController.getByType);
export default router;
