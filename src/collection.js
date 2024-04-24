import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import imageData from './imageData';
import { useNavigate } from 'react-router-dom';

function Collection() {
    const navigate = useNavigate();

    const handlePhotoClick = (productId) => {
        navigate(`/product/${productId}`);
    };

    return (
        <div>
            <Container className="products-section">
                {/* Loop to display the message three times */}
                {[...Array(3)].map((_, i) => (
                
                <Row>
                    {imageData.map((item, idx) => (
                        <Col key={idx} xs={6} sm={3} className="product-col">
                            <div className="product-card">
                                <Image
                                    src={item.src}
                                    alt={item.title}
                                    onClick={() => handlePhotoClick(idx)}
                                    style={{ cursor: 'pointer' }}
                                    fluid
                                />
                                <div className="overlay" />
                            </div>
                            <Row className="product-info">
                                <Col className="product-name">{item.title}</Col>
                                <Col className="product-price">{item.price} dt</Col>
                            </Row>
                        </Col>
                    ))}
                </Row>
                ))}
            </Container>
        </div>
    );
}

export default Collection;
