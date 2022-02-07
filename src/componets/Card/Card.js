import React from 'react';

import './Card.css'
const Card = (props) => {
    const {image ,product_name , brand_name ,price ,address ,time ,description}=props.product ;
    return (
        <div>
              
             <div className="product-card">
         
                <div className="card-image">
                    <img src={image} alt="" />
                   
                   
                </div>
                <div className="card-info">
                   
                    <p>{product_name}</p>
                    <p>{brand_name}</p>
                    <p>${price}</p>
                    <p>{time}</p>
                  
                 
                </div>
            </div>
            
        </div>
    );
};

export default Card;