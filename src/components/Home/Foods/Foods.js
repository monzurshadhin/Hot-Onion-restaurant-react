import React from "react";
import { Row } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import useFoods from "../../../hooks/useFoods";
import Food from "../Food/Food";
import './Food.css';

const Foods = (props) => {
  const {allContext,allFoods,allHandles} = useAuth();
const {handleFood,selectedFoods,foods,keyWord} = allFoods;
// console.log(matchedFood)
const {searcedResult} = props
const matchedFoods= keyWord===''?foods:foods?.filter(food=>food.category === keyWord);

  return (
    <div className="container my-5" id="items">
     
      <div className="d-flex justify-content-center food-link">
      <p className={keyWord===''&&"active"} onClick={()=>handleFood('')}>All</p>
      <p className={keyWord==='breakfast'&&"active"} onClick={()=>handleFood('breakfast')}>breakfast</p>
      <p className={keyWord==='lunch'&&"active"} onClick={()=>handleFood('lunch')}>lunch</p>
      <p className={keyWord==='dinner'&&"active"} onClick={()=>handleFood('dinner')}>dinner</p>
      </div>
      <Row xs={1} md={2} lg={3} className="g-4">
      {matchedFoods?.map((food) => (
        <Food key={food.id} food={food}></Food>
      ))}
      <button className="mx-auto checkout-btn" >Checkout Your Food</button>
      </Row>
      
    </div>
  );
};

export default Foods;
