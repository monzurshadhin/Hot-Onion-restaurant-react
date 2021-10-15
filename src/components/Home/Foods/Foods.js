import React from "react";
import { Row } from "react-bootstrap";
import useFoods from "../../../hooks/useFoods";
import Food from "../Food/Food";
import './Food.css';

const Foods = () => {

const {handleFood,selectedFoods,matchedFood} = useFoods();
// console.log(matchedFood)

  return (
    <div className="container my-5" id="items">
     
      <div className="d-flex justify-content-center food-link">
      
      <p className="" onClick={()=>handleFood('breakfast')}>breakfast</p>
      <p onClick={()=>handleFood('lunch')}>lunch</p>
      <p onClick={()=>handleFood('dinner')}>dinner</p>
      </div>
      <Row xs={1} md={2} lg={3} className="g-4">
      {matchedFood?.map((food) => (
        <Food key={food.id} food={food}></Food>
      ))}
      <button className="mx-auto checkout-btn" >Checkout Your Food</button>
      </Row>
      
    </div>
  );
};

export default Foods;
