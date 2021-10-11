const Product = require('../models/product')

const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const APIFeatures = require('../utils/apiFeatures');

//Create New Product => /api/v1/admin/product/new
exports.newProduct = catchAsyncErrors(async (req, res, next) => {
    try{
        const product = await Product.create(req.body);
        res.status(201).json({
            success: true,
            product
        }) 
 
    } catch (error) {
        return next(new ErrorHandler('Product Cannot Insert', 404));
    }
    

   
})


//Get all products => api/vq/products?keyword=keyword
exports.getProducts = catchAsyncErrors(async (req, res, next) => {

    //return next(new ErrorHandler('Error Web',400)) //fixit

    const resPerPage = 8;
    const productsCount = await Product.countDocuments();
    
    const apiFeatures = new APIFeatures(Product.find(),req.query)
                        .search()
                        .filter()
                        .pagination(resPerPage)

    //const products = await Product.find(); debug1
    const products = await apiFeatures.query;


        res.status(200).json({
            success: true,
            productsCount,
            resPerPage,
            products
        })
  

})

//only one => /api/vq/products

exports.getSingleProduct = catchAsyncErrors(async (req, res, next) => {
    
    try {
        const product = await Product.findById(req.params.id);
    
        res.status(200).json({
            success: true,
            product
        })
    } catch (error) {
        /*
        res.status(404).json({
            success: false,
            message: 'Product not found'
        })
        */
       return next(new ErrorHandler('Product not Found', 404));
    }   

})

//update Product => /api/v1/admin/product/:id
exports.updateProduct = catchAsyncErrors(async(req, res, next) => {

    try {
        let product = await Product.findById(req.params.id);
        
            try{
                product = await Product.findByIdAndUpdate(req.params.id, req.body, {
                    new: true,
                    runValidators: true,
                    useFindAndModify: false
                });
                res.status(200).json({
                    success: true,
                    product
                })

            } catch (error){
                res.status(404).json({
                    success: false,
                    message: 'Product not found'
                })            
            }

    } catch (error) {
        res.status(404).json({
            success: false,
            message: 'Product not found'
        })
    }  
}) 


//Delete Product => /api/v1/admin/product/:id
exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
    try{
        const product = await Product.findById(req.params.id)
        await product.remove();
    
        res.status(200).json({
            success: true,
            message: 'product deleted'
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: 'Product not found'
        })
    }
    
    


})

//debug 1
/*
exports.getProducts = (req, res, next) => {

    res.status(200).json({
        success: true,
        message: 'this route will show all product in database'
    })
}
*/

//debug 2
/*
exports.getProducts = catchAsyncErrors(async (req, res, next) => {

    const apiFeatures = new APIFeatures(Product.find(),req.query)
                        .search()
                        .filter()

    //const products = await Product.find(); debug1
    const products = await apiFeatures.query;

    res.status(200).json({
        success: true,
        count: products.length,
        products
    })
})
*/


//Create New Product => /api/v1/product/new
//exports.newProduct = async (req, res, next) => {


    /*
    working verygood
    try {
        const product = await Product.create(req.body);
    
        res.status(201).json({
            success: true,
            product
        })
    } catch (error) {
        res.status(500).json({
            success: true,
            reason: error
        })
    }
    */

//} 

//Get all products => /api/v1/products
/*
exports.getProducts = async (req, res, next) => {

    const products = await Product.find()
    
    res.status(200).json({
        success: true,
        count: products.length,
        message: 'this route will show all product in database'
    })
}
*/


/*
exports.getProducts = (req, res, next) => {
    
    res.status(200).json({
        success: true,
        message: 'this route will show all product in database'
    })
}
*/


/*S






const product = require('../models/product');




// Get all products   =>   /api/v1/products?keyword=apple
exports.getProducts = catchAsyncErrors(async (req, res, next) => {

    const resPerPage = 4;
    const productCount = await Product.countDocuments();

    const apiFeatures = new APIFeatures(Product.find(), req.query)  
                        .search()
                        .filter()
                        .pagination(resPerPage)
    
    const products = await apiFeatures.query;

    res.status(200).json({
        success: true,
        count: product.length,
        productCount,
        resPerPage,
        products
    })

})


//only one => /api/vq/products

exports.getSingleProduct = async (req, res, next) => {
    
    const product = await Product.findById(req.params.id);

    if(!product){
           return next(new ErrorHandler('Product not found', 404)); 
    }
   
    /*
    if(!product){
        return re.status(404).json({
            success: false,
            message: 'Not Found Product' //fix here
        })
    }
    */
/*
    res.status(200).json({
        success: true,
        product
    })

}




//Delete Product => /api/v1/admin/product/:id
exports.deleteProduct = async (req, res, next) => {
 
    const product = await Product.findById(req.params.id)

    if(!product){
        return re.status(404).json({
            success: false,
            message: 'Not Found Product' //fix here
        })
    }

    
    await product.remove();
    
    res.status(200).json({
        success: true,
        message: 'product deleted'
    })

}

*/