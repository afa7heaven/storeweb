
import React, { useEffect, useState } from 'react'
import {Carousel} from 'react-bootstrap'

import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails, clearErrors  } from '../../actions/productActions'
import { addItemToCart } from '../../actions/cartActions'

const ProductDetails = ({match}) => {
    
    const [quantity, setQuantity] = useState(1)

    const dispatch = useDispatch();
    const alert = useAlert();

    const { loading, error, product } = useSelector(state => state.productDetails)

    useEffect(() => {
        dispatch(getProductDetails(match.params.id))
        

        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }

    }, [dispatch, alert, error, match.params.id])
    
    const addToCart = () => {
        dispatch(addItemToCart(match.params.id, quantity));
        alert.success('Item Added to Cart')
    }

    const increaseQty = () => {
        const count = document.querySelector('.count')

        if (count.valueAsNumber >= product.stock) return;

        const qty = count.valueAsNumber + 1;
        setQuantity(qty)
    }

    const decreaseQty = () => {

        const count = document.querySelector('.count')

        if (count.valueAsNumber <= 1) return;

        const qty = count.valueAsNumber - 1;
        setQuantity(qty)

    }

    return (
        <div>
            <div className="row f-flex justify-content-around">
                    <div className="col-12 col-lg-5" id="product_image">
                        <Carousel>
                            <Carousel.Item>
                                <img src={product.images ? product.images[0].url : ''} alt="sdf" height='500' width='500'/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={product.images ? product.images[0].url : ''} alt="sdf" height='500' width='500'/>
                            </Carousel.Item>
                        </Carousel>
                   </div>
   
                   <div className="col-12 col-lg-5 mt-5">
                       { <h3>{product.name}</h3> }
                       <p id="product_id">Product # sklfjdk35fsdf5090</p>
   
                       <hr />
   
                       <div className="rating-outer">
                           <div className="rating-inner">ccw</div>
                       </div>
                       <span id="no_of_reviews">(5 Reviews)</span>
   
                       <hr />
   
                       <p id="product_price">Rp{product.price}</p>
                       <div className="stockCounter d-inline">
                           <span className="btn btn-danger minus" onClick={decreaseQty}>-</span>
   
                           <input type="number" id='count' className="form-control count d-inline" value={quantity} readOnly />
   
                           <span className="btn btn-primary plus" onClick={increaseQty}>+</span>
                       </div>
                       <button type="button" id="cart_btn" className="btn btn-primary d-inline ml-4" disabled={product.stock === 0} onClick={addToCart}>Add to Cart</button>
   
                       <hr />
   
                       <p>Status: <span id="stock_status">In Stock</span></p>
   
                       <hr />
   
                       <h4 className="mt-2">Description:</h4>
                       <p>Binge on movies and TV episodes, news, sports, music and more! We insisted on 720p High Definition for this 32" LED TV, bringing out more lifelike color, texture and detail. We also partnered with Roku to bring you the best possible content with thousands of channels to choose from, conveniently presented through your own custom home screen.</p>
                       <hr />
                       <p id="product_seller mb-3">Product by: <strong>Electonic City</strong></p>
                       
                    </div>
   
            </div>           
        </div>
    )
}


export default ProductDetails
/*
import React, { Fragment, useEffect } from 'react'

import Loader from '../layout/Loader'
import MetaData from '../layout/MetaData';


import {useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { getProductDetails, clearErrors } from '../../action/productActions'

const ProductDetails = ({ match }) => {

    const dispatch = useDispatch();
    const {loading , error , product} = useSelector(state => state.productDetails)

    useEffect(() => {
        dispatch(getProductDetails(match.params.id))  
        
        if (error) {
            dispatch(clearErrors())
        }

    }, [dispatch,error,match.params.id])

    return (

     
         <Fragment>
             <MetaData title={product.name} />
            <div className="row f-flex justify-content-around">
                   <div className="col-12 col-lg-5 img-fluid" id="product_image">
                       <img src="https://i5.walmartimages.com/asr/1223a935-2a61-480a-95a1-21904ff8986c_1.17fa3d7870e3d9b1248da7b1144787f5.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="sdf" height="500" width="500" />
                   </div>
   
                   <div className="col-12 col-lg-5 mt-5">
                       <h3>{product.name}</h3>
                       <p id="product_id">Product # sklfjdk35fsdf5090</p>
   
                       <hr />
   
                       <div className="rating-outer">
                           <div className="rating-inner">ccw</div>
                       </div>
                       <span id="no_of_reviews">(5 Reviews)</span>
   
                       <hr />
   
                       <p id="product_price">Rp.108.00</p>
                       <div className="stockCounter d-inline">
                           <span className="btn btn-danger minus">-</span>
   
                           <input type="number" className="form-control count d-inline" value="1" readOnly />
   
                           <span className="btn btn-primary plus">+</span>
                       </div>
                       <button type="button" id="cart_btn" className="btn btn-primary d-inline ml-4">Add to Cart</button>
   
                       <hr />
   
                       <p>Status: <span id="stock_status">In Stock</span></p>
   
                       <hr />
   
                       <h4 className="mt-2">Description:</h4>
                       <p>Binge on movies and TV episodes, news, sports, music and more! We insisted on 720p High Definition for this 32" LED TV, bringing out more lifelike color, texture and detail. We also partnered with Roku to bring you the best possible content with thousands of channels to choose from, conveniently presented through your own custom home screen.</p>
                       <hr />
                       <p id="product_seller mb-3">Product by: <strong>Electonic City</strong></p>
                       
                       
                       
                               
                   </div>
   
               </div>
         </Fragment>

 
    )
}

export default ProductDetails

*/