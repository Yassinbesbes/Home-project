import React from 'react';
import Image from 'react-bootstrap/Image';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import brownback from './images/brownback.png';
import greysofa from './images/greysofa.png';
import Contact from './images/Contact.png';
import Bag from './images/Bag.png';
import Shipping from './images/Shipping.png';
import product1 from './images/product1.png';
import product2 from './images/product2.png';
import product3 from './images/product3.png';
import product4 from './images/product4.png';
import pub from './images/pub.png'
import Facebook from './images/Facebook.png';
import Twitter  from './images/Twitter.png' ;
import Linkedin from './images/Linkedin.png';

import './Home.css';

const imageData = [
  { title: 'white bag ', price: 100.00, src: product1 },
  { title: 'Light bag ', price: 45.00, src: product2 },
  { title: 'white bag ', price: 100.00, src: product3 },
  { title: 'Light bag ', price: 45.00, src: product4 },

  { title: 'white bag ', price: 100.00, src: product1 },
  { title: 'Light bag ', price: 45.00, src: product2 },
  { title: 'white bag ', price: 100.00, src: product3 },
  { title: 'Light bag ', price: 45.00, src: product4 },

];


function Home() {
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
      <Container >
        <h1>Enjoy our products </h1>
        {Array.from(Array(Math.ceil(imageData.length / 4)), (_, index) => (
          <Row key={index}>
            {imageData.slice(index * 4, index * 4 + 4).map((item, idx) => ( 

              <Col key={idx} xs={6} sm={3} className="image-col"> {/* Use idx for key */}
                <div className="image-container">
                  <Image className="I" src={item.src} fluid />
                  <div className="overlay">
                  </div>
                </div>
                <div>
                  <Row>
                    <Col className="Name">{item.title}</Col>
                    <Col className="Price">{item.price} dt</Col>
                  </Row>
                </div>

                {(idx === 3) && <div style={{marginTop: '50px'}}></div>} 
              </Col>
            ))}
          </Row>
        ))}
      </Container>
    </div>

    <hr />

    <div className='title-detaille' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',margin:'10px'  }}>
      <h1>Every Detail Matters</h1>
      <h6 style ={{textAlign:'center'}}>WE ARE SPECIALIZED IN ADORNMENTS, THAT BRING CHARM TO ANY ENVIRONMENT.</h6>
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
          <h2 className="footer-heading">Subscribe</h2>
          <form className="subscribe-form">
            <input
              type="email"
              placeholder="Enter your email"
              className="subscribe-input"
            />
            <button className="subscribe-btn">Subscribe</button>
          </form>
          <p className="subscribe-info">
            Hello, we are Lift Media. Our goal is to translate the way
            companies engage with their clients and their team.
          </p>
        </div>
      </div>
      <div className="footer-divider" />
      <div className="footer-terms">
        <ul className="footer-list">
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
