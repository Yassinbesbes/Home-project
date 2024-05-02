import React from 'react';
import { useNavigate } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import brownback from './images/brownback.png';
import greysofa from './images/greysofa.png';
import Contact from './images/Contact.png';
import Bag from './images/Bag.png';
import { FaStar } from "react-icons/fa6";
import Shipping from './images/Shipping.png';
import imageData from './imageData';
import pub from './images/pub.png';
import Facebook from './images/Facebook.png';
import Twitter  from './images/Twitter.png' ;
import Linkedin from './images/Linkedin.png';

import './Home.css';



function Home() {
  const navigate = useNavigate();

    const handlePhotoClick = (productId) => {
        navigate(`/product/${productId}`);
    };
  return (
    <>
    <main>
    <Container>
      <Row>
        {/* Left column with text */}
        <Col md={12} xxl={5} className='all'>
          <div className='title'>Modern<br />Furniture</div>
          <p>We combine interior and exterior design services and often provide them as a single solution.</p>
          <div className='button-title'>
            <button className='Book-now'>Book now</button>
            <button className='Read-More'>Read More</button>
          </div>
        </Col>
        {/* Right column with image */}
        <Col md={12} xxl={7} className='description'>
          <Image className='brownback-image' src={brownback} />
          <Carousel>
            {[1, 2, 3].map(item => (
              <Carousel.Item key={item}>
                <Image fluid
                  className="d-block w-100"
                  src={greysofa}
                  alt={`Slide ${item}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
      
      <Row className='x'>
        {/* First feature */}
        <Col xs={4} md={4} className="col-border">
          <Image src={Shipping} fluid className="phone-image" />
          <div className='Nom'>Free Shipping</div>
          <div className='Detaille'>We offer free shipping on all orders.</div>
        </Col>
        {/* Second feature */}
        <Col xs={4} md={4} className="col-border">
          <Image src={Bag} fluid className="phone-image" />
          <div className='Nom'>Save Money</div>
          <div className='Detaille'>Our prices help you save money.</div>
        </Col>
        {/* Third feature */}
        <Col xs={4} md={4} className="">
          <Image src={Contact} fluid className="phone-image" />
          <div className='Nom'>Contact Us</div>
          <div className='Detaille'>Contact us for any inquiries.</div>
        </Col>
      </Row>
    </Container>

    <div className='xx'>
    <Container className="products-section">
      <h1>Enjoy our products</h1>
      <Row>
          {imageData.map((item, idx) => (
              <Col key={idx} xs={6} sm={3} className="product-col">
				        <div style={{ color: '#f6dc5b', float:'right' }}>
                  <a href="#action/3.3" style={{ color: 'black', fontSize: '13px', textDecoration:'none'}} >4.12</a> 
                  <FaStar />  
                </div>
                  <div>
                      <Image
                          src={item.src}
                          alt={item.title}
                          onClick={() => handlePhotoClick(idx)}
                          style={{ cursor: 'pointer' }}
                          fluid
                      />
                      
                  </div>
                  <Row>
                      <Col className="Name">{item.title}</Col>
                      <Col className="Price">{item.price} dt</Col>
                  </Row>
              </Col>
          ))}
      </Row>
      </Container>
    </div>

    <hr />

    <div className='title-detaille' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',margin:'10px'  }}>
      <h1 style={{ marginBottom: '30px' }}>Every Detail Matters</h1>
      <h6 style ={{textAlign:'center', color:'#d6d6d6'}}>WE ARE SPECIALIZED IN ADORNMENTS, THAT BRING CHARM TO ANY ENVIRONMENT.</h6>
      <p style ={{textAlign:'center'}}>There are multiples of high quality pieces, with styles that transition from classic to contemporary. An exclusive selection of lampshades, vases, murals, pillows, paintings and many gifts to compose great projects. In order selection, a mix of basic style, stricter customization and more compact dimensions, composing sophisticated and exclusive environments.</p>
    </div>
  <Image className='hand_made' src={pub} fluid />

  
    </main>
  

    <footer>
     
    <div className="footer-container">
      <div className="footer">
        <div className="footer-column">
          <h2 className="footer-heading">Product</h2>
          <ul className="footer-list">
            <li className="footer-item">Employee database</li>
            <li className="footer-item">Payroll</li>
            <li className="footer-item">Absences</li>
            <li className="footer-item">Time tracking</li>
            <li className="footer-item">Shift planner</li>
            <li className="footer-item">Recruiting</li>
          </ul>
        </div>
        <div className="footer-column">
          <h2 className="footer-heading">Information</h2>
          <ul className="footer-list">
            <li className="footer-item">FAQ</li>
            <li className="footer-item">Blog</li>
            <li className="footer-item">Support</li>
          </ul>
        </div>
        <div className="footer-column">
          <h2 className="footer-heading">Company</h2>
          <ul className="footer-list">
            <li className="footer-item">About us</li>
            <li className="footer-item">Careers</li>
            <li className="footer-item">Contact us</li>
            <li className="footer-item hutte-io">Lift Media</li>
          </ul>
        </div>
        <div className="footer-column subscribe">
        <div class="email">
          <h2 className="footer-heading">Subscribe</h2>
            <form className="subscribe-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="subscribe-input"
              />
              <button className="subscribe-btn">Subscribe</button>
            </form>
            <span className="subscribe-info">
              Hello, we are Lift Media. Our goal is to translate the way
              companies engage with their clients and their team.
            </span>
          </div>
        </div>
      </div>
      <div className="footer-divider" />
      <div className="footer-terms">
        <ul className="footer-liste-terms">
          <li className="footer-item">Terms</li>
          <li className="footer-item">Privacy</li>
          <li className="footer-item">Cookies</li>
        </ul>
      </div>
      <div className="footer-social">
        <Image className="social-icon" alt="Twitter" src={Twitter} />
        <Image className="social-icon" alt="Facebook" src={Facebook} />
        <Image className="social-icon" alt="Linkedin" src={Linkedin} />
      </div>
    </div>




    </footer>

    </>
  );
}

export default Home;
