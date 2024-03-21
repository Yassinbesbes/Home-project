import React from 'react';
import Image from 'react-bootstrap/Image';
import { Container, Row, Col } from 'react-bootstrap';
import brownback from './images/brownback.png';
import './Home.css';
import Carousel from 'react-bootstrap/Carousel';
import greysofa from './images/greysofa.png';
import Contact from './images/Contact.png';
import Bag from './images/Bag.png';
import Shipping from './images/Shipping.png';

function Home() {
  return (
    <>
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
            <Image className='brownback-image' src={brownback} fluid />
            <Carousel>
              <Carousel.Item>
                <Image
                  className="d-block w-100"
                  src={greysofa}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  className="d-block w-100"
                  src={greysofa}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  className="d-block w-100"
                  src={greysofa}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
      
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
        <Col xs={4} md={4} className="col-border">
          <Image src={Contact} fluid className="phone-image" />
          <div className='Nom'>Contact Us</div>
          <div className='Detaille'>Contact us for any inquiries.</div>
        </Col>
      </Row>
    </>
  );
}

export default Home;