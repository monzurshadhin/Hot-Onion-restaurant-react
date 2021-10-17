import React from "react";
import { Button, Form } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import useFoods from "../../hooks/useFoods";
import useHandleCart from "../../hooks/useHandleCart";
import "./cart.css";

const Cart = () => {
  // console.log(cart)
  const {allContext,allFoods,allHandles} = useAuth();
  // const { foodCart,handleRemove,handleOrder } = useHandleCart();
  const { foodCart,handleRemove,handleOrder } = allHandles;

  const {handleAddButton,handleRemoveButton,quantity} = useFoods();
  console.log(foodCart);
  const total = foodCart.reduce((prev,current)=>prev+current.price*current.quantity,0);
  const tax = (total*10)/100;
  const deliveryFee = 2.00;
  const grandTotal = (total+tax+deliveryFee).toFixed(2)
  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-12 col-md-6 col-lg-8">
          <h1 className="form-title my-5">Edit Delivery Details</h1>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control
                className="input-field"
                type="text"
                value="Delivery to door"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control
                className="input-field"
                type="text"
                value="107 Rd No 8"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control
                className="input-field"
                type="text"
                placeholder="Flat,suit or floor"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control
                className="input-field"
                type="text"
                placeholder="Business Name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control
                className="input-field"
                type="text"
                placeholder="Add delivery instructor"
              />
            </Form.Group>
            

            
            

            <Button className="signup-btn" type="submit">
              Save and Continue
            </Button>
          </Form>
        </div>
        <div className="col-12 col-md-6 col-lg-4 mt-5">
          <p>From <b>Gulshan Pizza Restaurant GPR</b></p>
          <p>Arriving in 20-30 min</p>
          <p>107 Rd No 8</p>
            <div className="my-4">
              <div className="d-flex justify-content-between px-2 ">
                <p><b>Subtotal . {foodCart.length} item</b></p>
                <p><b>${total.toFixed(2)}</b></p>
              </div>
              <div className="d-flex justify-content-between px-2 ">
                <p><b>Tax</b></p>
                <p><b>${tax.toFixed(2)}</b></p>
              </div>
              <div className="d-flex justify-content-between px-2 ">
                <p><b>Delivery fee</b></p>
                <p><b>$ {deliveryFee}</b></p>
              </div>
              <div className="d-flex justify-content-between px-2 ">
                <p><b>Total</b></p>
                <p><b>$ {grandTotal}</b></p>
              </div>
              <Button onClick={handleOrder} className="signup-btn" type="submit">
              Place order
            </Button>
            </div>
            <div className="cart-container">
              
            {foodCart.map((food) => (
              
              <div className="d-flex  align-items-center ps-2 mb-2 food-cart-card">
                <img className="img-fluid cart-img me-4" src={food.img} alt="" />
                <div>
                  <p>{food.name}</p>
                  <h6><b>$ {(food.price * food.quantity).toFixed(2)}</b></h6>
                  <p><small>Free delivery</small></p>
                  <button className="quantity-btn" onClick={handleRemoveButton}>-</button>
                    <input className="quantity-input" type="text" value={food.quantity} />
                    <button className="quantity-btn" onClick={handleAddButton}>+</button>

                    <button onClick={()=>handleRemove(food.id)} className="d-block mt-2 btn btn-danger">Remove</button>
                </div>
                
                
                
              </div>

            ))}
            </div>
            
          
        </div>
      </div>
    </div>
  );
};

export default Cart;
