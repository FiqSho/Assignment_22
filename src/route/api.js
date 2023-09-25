const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const cartController = require('../controllers/cartController');
const categoryController = require('../controllers/categoryController');
const customerController = require('../controllers/customerController');
const order_itemController = require('../controllers/order_itemController');
const orderController = require('../controllers/orderController');
const paymentController = require('../controllers/paymentController');
const postController = require('../controllers/postController');
const productController = require('../controllers/productController');
const shipmentController = require('../controllers/shipmentController');
const subAdminController = require('../controllers/subAdminController');
const userController = require('../controllers/userController');
const wishlistController = require('../controllers/wishlistController');


// Admin Controller Routes
router.get('/admin/create', adminController.create);
router.get('/admin/read', adminController.read);
router.get('/admin/delete', adminController.delete);
router.get('/admin/update', adminController.update);
// Cart Controller Routes
router.get('/cart/create', cartController.create);
router.get('/cart/read', cartController.read);
router.get('/cart/delete', cartController.delete);
router.get('/cart/update', cartController.update);
// category Controller Routes
router.get('/category/create', categoryController.create);
router.get('/category/read', categoryController.read);
router.get('/category/delete', categoryController.delete);
router.get('/category/update', categoryController.update);
// customer Controller Routes
router.get('/customer/create', customerController.create);
router.get('/customer/read', customerController.read);
router.get('/customer/delete', customerController.delete);
router.get('/customer/update', customerController.update);
// order_item Controller Routes
router.get('/order_item/create', order_itemController.create);
router.get('/order_item/read', order_itemController.read);
router.get('/order_item/delete', order_itemController.delete);
router.get('/order_item/update', order_itemController.update);
// order Controller Routes
router.get('/order/create', orderController.create);
router.get('/order/read', orderController.read);
router.get('/order/delete', orderController.delete);
router.get('/order/update', orderController.update);
// payment Controller Routes
router.get('/payment/create', paymentController.create);
router.get('/payment/read', paymentController.read);
router.get('/payment/delete', paymentController.delete);
router.get('/payment/update', paymentController.update);
// post Controller Routes
router.get('/post/create', postController.create);
router.get('/post/read', postController.read);
router.get('/post/delete', userController.delete);
router.get('/post/update', postController.update);
// product Controller Routes
router.get('/product/create', productController.create);
router.get('/product/read', productController.read);
router.get('/product/delete', productController.delete);
router.get('/product/update', productController.update);
// shipment Controller Routes
router.get('/shipment/create', shipmentController.create);
router.get('/shipment/read', shipmentController.read);
router.get('/shipment/delete', shipmentController.delete);
router.get('/shipment/update', shipmentController.update);
// subadmin Controller Routes
router.get('/subAdmin/create', subAdminController.create);
router.get('/subAdmin/read', subAdminController.read);
router.get('/subAdmin/delete', subAdminController.delete);
router.get('/subAdmin/update', subAdminController.update);
// User Controller Routes
router.get('/user/create', userController.create);
router.get('/user/read', userController.read);
router.get('/user/delete', userController.delete);
router.get('/user/update', userController.update);
// wishlist Controller Routes
router.get('/wishlist/create', wishlistController.create);
router.get('/wishlist/read', wishlistController.read);
router.get('/wishlist/delete', wishlistController.delete);
router.get('/wishlist/update', wishlistController.update);



module.exports = router;
