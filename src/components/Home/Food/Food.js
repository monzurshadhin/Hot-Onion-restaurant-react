import React from "react";
import { Card, Col } from "react-bootstrap";
import useFoods from "../../../hooks/useFoods";

const Food = (props) => {
  const { id, name, description, price, img } = props.food;
  // console.log(props.food.img);
  const {handleFoodDetails} = useFoods();
  return (
    <div>
      <Col>
        <div onClick={()=>handleFoodDetails(id)} className="food-card">
          <Card.Img variant="top p-5 card-img mx-auto" src={img} />
          <Card.Body className="text-center px-4">
            <Card.Title >{name}</Card.Title>
            <Card.Text>{description.slice(0,48)}</Card.Text>
            <h5 className="text-center">Price:$ {price}</h5>
          </Card.Body>
          
        </div>
      </Col>
    </div>
  );
};

export default Food;
