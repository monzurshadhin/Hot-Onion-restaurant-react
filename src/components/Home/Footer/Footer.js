import React from 'react';
import img from '../../../images/logo2.png';
import './Footer';
const Footer = () => {
    return (
        <div classNameName="footer">
            
    <footer className="bg-dark py-5">
      <section className="container">
        <div className="top-footer">
          <div className="row">
            <div className="col-lg-7 col-md-6 col-12 mb-4">
              <img className="img-fluid w-25" src={img} alt="" />
            </div>
            <div className="col-lg-5 col-md-6 col-12">
              <div className="row">
                <div className="col-md-6 col-12 mb-4">
                  <a href="/" className="text-decoration-none text-light"
                    >About Online Food
                  </a>
                  <br />
                  <a href="/" className="text-decoration-none text-light"
                    >Read our blog
                  </a>
                  <br />
                  <a href="/" className="text-decoration-none text-light"
                    >Sign up to deliver
                  </a>
                  <br />
                  <a href="/" className="text-decoration-none text-light"
                    >Add your restaurant
                  </a>
                </div>
                <div className="col-md-6 col-12">
                  <a href="/" className="text-decoration-none text-light"
                    >Get help
                  </a>
                  <br />
                  <a href="/" className="text-decoration-none text-light"
                    >Read FAQs
                  </a>
                  <br />
                  <a href="/" className="text-decoration-none text-light"
                    >View all cities
                  </a>
                  <br />
                  <a href="/" className="text-decoration-none text-light"
                    >Restaurant near me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom-footer row mt-5">
          <div className="col-md-7 col-12">
            <p>
              <small className="text-muted">Copyright @ 2021 Online Food</small>
            </p>
          </div>
          <div className="col-md-5 col-12">
            <a href="/" className="text-decoration-none text-light"
              >Privacy Policy
            </a>

            <a
              href="/"
              className="text-decoration-none text-light ms-lg-5 ms-md-3 ms-2"
              >Terms of Use
            </a>

            <a
              href="/"
              className="text-decoration-none text-light ms-lg-5 ms-md-3 ms-2"
              >Pricing
            </a>
          </div>
        </div>
      </section>
    </footer>
        </div>
    );
};

export default Footer;