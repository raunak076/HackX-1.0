import React from "react";
import { useState } from "react";
import "./Mng.css";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Button from '@mui/material/Button'

function Mng() {
    

    const products = [
        {
          name: "Boat Watch",
          Item: 2,
          price: 320,
          quantity: 3,
          category: "Electronic",
        },
        {
          name: "Product 2",
          Item: 5,
          price: 450,
          quantity: 2,
          category: "Gadget",
        },
        {
          name: "Product 2",
          Item: 5,
          price: 450,
          quantity: 2,
          category: "Gadget",
        },{
          name: "Product 2",
          Item: 5,
          price: 450,
          quantity: 2,
          category: "Gadget",
        },{
          name: "Product 2",
          Item: 5,
          price: 450,
          quantity: 2,
          category: "Gadget",
        },
        {
          name: "Product 2",
          Item: 5,
          price: 450,
          quantity: 2,
          category: "Gadget",
        },
        {
          name: "Product 2",
          Item: 5,
          price: 450,
          quantity: 2,
          category: "Gadget",
        },
        {
          name: "Product 2",
          Item: 5,
          price: 450,
          quantity: 2,
          category: "Gadget",
        },
        {
          name: "Product 2",
          Item: 5,
          price: 450,
          quantity: 2,
          category: "Gadget",
        }
      ];
    
  return (
    <div className="manageproduct">
      <h2>Inventory Item</h2>
      <div className="product">
        <div className="header_product">
          <div className="field">
            Sr no
          </div>
          <div className="field">Name</div>
          <div className="field">Item</div>
          <div className="field">Price</div>
          <div className="field">Quantity</div>
          <div className="field">Category</div>
          <div className="edit_delete_product">
            Action
          </div>
        </div>
    
        <div className="">
  {products.map((product, index) => (
    <div key={index} className="all_product">
      <div className="field">{index + 1}</div>
      <div className="field">{product.name}</div>
      <div className="field">{product.Item}</div>
      <div className="field">{product.price}</div>
      <div className="field">{product.quantity}</div>
      <div className="field">{product.category}</div>
      <div className="edit_product">
        <Button variant="outlined" color="secondary">
        <VisibilityIcon style={{ margin: "0 15px", color: "blue" }} />
        </Button>
        <Button variant="outlined" color="secondary">
        <EditIcon style={{ margin: "0 15px", color: "green" }} />
          </Button>
          <Button variant="outlined" color="secondary">
          <DeleteIcon style={{ margin: "0 15px", color: "red" }} />
          </Button>
      
       
      
      </div>
    </div>
  ))}
</div>

        

      </div>
    </div>
  );
}

export default Mng;