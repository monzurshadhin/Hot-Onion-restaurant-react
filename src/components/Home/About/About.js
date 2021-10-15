import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './About.css';

const About = () => {
    const [abouts,setAbouts] = useState([]);
    useEffect(()=>{
        fetch("./about.json")
        .then(res=>res.json())
        .then(data=>setAbouts(data))
    },[])
    return (
        <div className='container my-5' id="about_us">
            <h3>Why you choose us</h3>
            <p className=" my-4">Barton waited twenty always repair in within we do. An delighted offending <br /> curiosity my is dashwoods at.Boy prosperous increasing Surrounded</p>

            <Row xs={1} md={2} lg={3}className="g-4">
            {
                abouts.map(about => (
                
                  <Col  key={about.id}>
                    
                      <Card.Img  variant="top" src={about.img} />
                      <Card.Body >
                        <Card.Title>{about.name}</Card.Title>
                        <Card.Text className="d-flex">
                          <img className="icon" src={about.icon} alt="" />
                          <p>{about.description}</p>
                        </Card.Text>
                      </Card.Body>
                    
                  </Col>
            
              ))
            }
         </Row>
            
        </div>
    );
};

export default About;