import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from "../../images/logo2.png";
import "./Register.css";
const Register = () => {
    const {signInUsingGoogle,signInUsingFacebook,signInUsingGithub,handleEmail,handlePassword,handleName,registerNewUsers,message} =useAuth();
  return (
    <div className="container">
      
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4 mx-auto">
          <div className="d-flex justify-content-center top-img">
            <img className="img-fluid my-5" src={logo} alt="" />
            </div>
            <Form onSubmit={registerNewUsers}>
            <Form.Group className="mb-3" controlId="formBasicName">
                
                <Form.Control onBlur={handleName} className="input-field" type="text" placeholder="Name" />
                
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                
                <Form.Control onBlur={handleEmail} className="input-field" type="email" placeholder="Email" />
                
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                
                <Form.Control onBlur={handlePassword} className="input-field" type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                
                <Form.Control className="input-field" type="password" placeholder="Confirm Password" />
              </Form.Group>
              <p>{message}</p>
              <Button className="signup-btn" type="submit">
              Register
            </Button>
            </Form>
            <Link to="/login" className="link"><p>Already have an account?</p></Link>

            <div className="icon-section">
            <i onClick={signInUsingGoogle} className="fab fa-google login-icon"></i>
            <i onClick={signInUsingFacebook} className="fab fa-facebook login-icon"></i>
            <i onClick={signInUsingGithub} className="fab fa-github login-icon"></i>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default Register;
