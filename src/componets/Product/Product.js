import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import Card from '../Card/Card';
import ProductDetails from '../ProductDetails/ProductDetails';
import './product.css';



const Product = () => {
    const [product,setProducts]=useState([]);
    useEffect(() =>{
        fetch('https://assessment-edvora.herokuapp.com')
        .then(res=>res.json())
        .then(data => setProducts(data))
    } ,[])
    const settings = {
       
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3
      };
   
    return (
        <div className="total-div" >
            <div className="product">
            {/* <div className="product-filter">
               <h1>Filter area</h1>
              
            </div> */}
            <div className="product-details">
            <h1 className="heading-name">Edvora</h1>
            <h2><small className="product-items">Products</small></h2>
        
         
            </div>
           
          
            </div>
            <ProductDetails/>
            <div className="product-load">
                
                <Slider {...settings}>
               { 
                product.map(product =><Card product={product}></Card> )
            }
            </Slider>
           </div>
            </div>
         
           
            
       
        
       
              
       
         
        
       
    );
};

export default Product;