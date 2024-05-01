import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Heart from 'react-animated-heart';
import Image from 'react-bootstrap/Image';
import imageData from './imageData';
import './product.css';
import CommentSection from './CommentSection';

function ProductPage() {
    const { id } = useParams();
    const [isClick, setClick] = useState(false);
    const product = imageData[id];
    const [count, setCount] = useState(1);

    const handleDecrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const handleIncrement = () => {
        if (count < 5) {
            setCount(count + 1);
        }
    };

    if (!product) {
        return <div>Product not found</div>;
    }

    const renderProductPlusTable = () => (
        <table className="product-plus-table" >
            <tbody>
                {Object.entries(product.plus).map(([key, value]) => (
                    <tr key={key}>
                        <th>{key}</th>
                        <td>{value}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );

    return (
        <Container style={{ marginTop: '25px' }}>
            <div></div>
            <Row>
                <Col md={6} style={{ height: "600px" }} className="Image-product">
                    <Image className="product-photo" src={product.src} alt={product.title} fluid />
                </Col>

                <Col>
                    <Row style={{ alignItems: 'center', justifyContent: 'space-between' }}>
                        <Col>
                            <h2 style={{ fontSize: '24px', margin: '0 auto' }}>{product.title}</h2>
                            <span style={{ paddingTop: "10px", fontSize: "20px" }}>{product.price} dt</span><br />
                            <hr />
                        </Col>
                        <Col xs={3} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Heart style={{ height: '25px', width: '25px' }} isClick={isClick} onClick={() => setClick(!isClick)} fluid />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className="detaille">{product.details}</p>
                            <span style={{fontSize:"20px"}}>Quentity</span><br></br>
                            <div style={{ padding: "10px", display: 'flex', alignItems: 'center' }}>
                                
                                <button
                                    onClick={handleDecrement}
                                    style={{
                                        padding: '10px 15px',
                                        borderRadius: '5px',
                                        backgroundColor: '#d9d9d9',
                                        border: 'none',
                                        cursor: 'pointer',
                                        marginLeft: '10px'
                                    }}
                                >
                                    -
                                </button>
                                <span style={{
                                    margin: '0 20px',
                                    padding: '5px 10px',
                                    fontWeight: 'bold',
                                    fontSize: '18px'
                                }}>
                                    {count}
                                </span>
                                <button
                                    onClick={handleIncrement}
                                    style={{
                                        padding: '10px 15px',
                                        borderRadius: '5px',
                                        backgroundColor: '#d9d9d9',
                                        border: 'none',
                                        cursor: 'pointer',
                                        marginRight: '10px'
                                    }}
                                >
                                    +
                                </button>
                                <button className="buyButton">Add to bunner</button>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>

            
            <div style={{ justifyContent: "center", alignItems: 'center' }}>
                <div  style={{ textAlign: 'center', fontSize:"30px"}}><span className='underline'>Product Description</span></div>
                <hr />
                <span>
                    Nous ne savons pas quand cet article sera de nouveau approvisionné ni s'il le sera:
                </span>
                
                <span>
                    <div style={{ fontSize: "15px" }}
                        className="product-propos-de-ces-article"
                        dangerouslySetInnerHTML={{ __html: product.propos_de_ces_article }}
                    >
                    </div>
                    <div
                        style={{
                            textAlign: "center", // Centers text horizontally
                            display: "flex", // Use flexbox layout
                            justifyContent: "center", // Center content horizontally
                            alignItems: "center", // Center content vertically
                            backgroundColor: "#f0f0f0", // Background color (adjust as needed)
                            padding: "10px", // Padding around the content
                            borderRadius: "5px" // Rounded corners for a smoother look
                        }}
                    >
                        {renderProductPlusTable()}
                    </div>
                </span>
            </div>
            <CommentSection/>
        </Container>
    );
}

export default ProductPage;
