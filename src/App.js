import React, { useEffect, useState } from 'react';
import './App.css';
import Product from './componets/Product/Product';
import { DropdownButton,Dropdown } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const [filterData ,setFilterData]=useState([]);
    useEffect(() =>{
        fetch('https://assessment-edvora.herokuapp.com')
        .then(res=>res.json())
        .then(data => setFilterData(data))
    } ,[])
   
  return (
    <div className="display-filed">
      <div className="filter-section">
      <h1 >Filter</h1>
    
      <DropdownButton id="dropdown-basic-button" variant='secondary' title="Product">
    
      {
        filterData.map(item =>{
          return(
            <div>
                <Dropdown.Item eventKey={item.product_name} style={{color:'white'}}>{item.product_name}</Dropdown.Item>

            </div>

          );
        }) 
       
         
        
      }
     
      

</DropdownButton>
<DropdownButton id="dropdown-basic-button" variant='secondary' title="State">
 
{
        filterData.map(item =>{
          return(
            <div>
                <Dropdown.Item eventKey={item.price} style={{color:'white'}}>{item.price}</Dropdown.Item>

            </div>

          );
        }) 
       
         
        
      }
 
</DropdownButton>
<DropdownButton id="dropdown-basic-button"variant='secondary' title="City">
  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton>
      </div>
      <div className="product-section">
      <Product/>
      </div>
     
    </div>
  );
}

export default App;
