import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

// @desc     Fetch all product
// @route    GET /api/products
// @access   Public
const getProducts = asyncHandler(async (req, res) => {
    const products= await Product.find({})
    if (products) {
        //res.status(401)
        //throw new Error('Not authorized')
        res.json(products)
    } else {
        res.status(404)
        throw new Error('Product not found')
    }
})

//@desc     Fetch single product
//@route    GET /api/product/:id
//@access   Public
const getProductById = asyncHandler(async (req, res) => {

    const products = await Product.findById(req.params.id)
    if (products) {
        res.json(products)
    } else {
        res.status(404)
        throw new Error('Product not found')
    }

})

export {
    getProducts,
    getProductById
}