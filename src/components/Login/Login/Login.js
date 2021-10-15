import React from "react";
import { Form } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import logo from "../../../images/logo2.png";
import './Login.css';
const Login = () => {
  const { signInUsingGoogle,signInUsingFacebook,signInUsingGithub,loginProcess,handleEmail,handlePassword,handleResetPassword,message,setIsLoading,setUser,setMessage } = useAuth();

  
  const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/shop';
  
  const handleGoogleLogin =()=>{
    signInUsingGoogle()
    .then((result) => {
        console.log(result.user);
        setUser(result.user);
        setMessage('Successfully register');
        history.push(redirect_uri);
      })
      .catch((error) => {
        setMessage('registration failed');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }
  const handleFacebookLogin = () =>{
    signInUsingFacebook()
    .then((result) => {
        setUser(result.user);
        setMessage('Successfully register');
        history.push(redirect_uri);
      })
      .catch((error) => {
        setMessage('registration failed');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  const handleGithubLogin = () =>{
    signInUsingGithub()
    .then((result) => {
        setUser(result.user);
        setMessage('Successfully register');
        history.push(redirect_uri);
      })
      .catch((error) => {
        setMessage('registration failed');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }
  const handleLoginProcess =(e) =>{
    e.preventDefault();
    loginProcess()
    .then((result) => {
        setUser(result.user);
        setMessage('Successfully register');
        history.push(redirect_uri);
        //  console.log(result.user)
      })
      .catch(()=>{
        setMessage('registration failed');
      })
  }
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4 mx-auto">
            <div className="d-flex justify-content-center top-img">
              <img className="img-fluid my-5" src={logo} alt="" />
            </div>
            <Form onSubmit={handleLoginProcess}>
              
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control onBlur={handleEmail}
                  className="input-field"
                  type="email"
                  placeholder="Email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control onBlur={handlePassword}
                  className="input-field"
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <p>{message}</p>
              <input className="signup-btn" type="Submit" value="Sign in" />
            </Form>
            <span className="link" onClick={handleResetPassword}>Forgot password?</span>
            <Link to="/register" className="link">
              <p>create a new account?</p>
            </Link>

            
            <div className="icon-section">
            <i onClick={handleGoogleLogin} className="fab fa-google login-icon"></i>
            <i onClick={handleFacebookLogin} className="fab fa-facebook login-icon"></i>
            <i onClick={handleGithubLogin} className="fab fa-github login-icon"></i>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Login;
