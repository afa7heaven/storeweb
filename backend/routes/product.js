const express = require('express')
const router = express.Router();


const { 
      getProducts, 
      newProduct, 
      getSingleProduct, 
      updateProduct,
      deleteProduct 
   } = require('../controllers/productController')


router.route('/products').get(getProducts);
router.route('/product/:id').get(getSingleProduct);

router.route('/admin/product/new').post(newProduct);

router.route('/admin/product/:id')
                     .put(updateProduct)
                     .delete(deleteProduct);

module.exports = router;


//const { getProducts } = require('../controllers/productController')  //debug1

/*
const { getProducts, 
        newProduct, 
        getSingleProduct, 
        updateProduct, 
        deleteProduct
     } = require('../controllers/productController')


const { isAuthenticatedUser } = require('../middlewares/auth');


router.route('/products/:id').get(getSingleProduct);

router.route('/admin/product/new').post(newProduct);

router.route('/admin/product/:id')
                    .put(updateProduct)
                    .delete(deleteProduct);


                 */


