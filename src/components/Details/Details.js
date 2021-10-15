import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useFoods from '../../hooks/useFoods';
import useHandleCart from '../../hooks/useHandleCart';
import './Details.css';

const Details = () => {
    const {foodId} = useParams();
    const {handleAddToCart} = useHandleCart();
    const {foods,handleAddButton,handleRemoveButton,quantity} = useFoods();
    
    const details = foods?.find(food=>food.id===parseInt(foodId));
    
    return (
        <div className="container">
            
            <div className="row my-5">
                <div className="col-12 col-md-6 d-flex align-items-center">
                    <div className="px-5">
                    <h1>{details?.name}</h1>
                    <p>{details?.description}</p>
                    <h3>Price: ${(details?.price*quantity).toFixed(2)}</h3>
                    
                    <button className="quantity-btn" onClick={handleRemoveButton}>-</button>
                    <input className="quantity-input" type="text" value={quantity} />
                    <button className="quantity-btn" onClick={handleAddButton}>+</button>
                    
                    <br />
                    <Link to="/cart">
                    <button onClick={()=>handleAddToCart([details,quantity])} className="cart-btn"><i className="fas fa-shopping-cart"></i> Add</button>
                    </Link>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                <img className="img-fluid" src={details?.img} alt="" />
                
                </div>
            </div>
            
        </div>
    );
};

export default Details;