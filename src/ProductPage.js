import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Heart from 'react-animated-heart';
import Image from 'react-bootstrap/Image';
import imageData from './imageData';
import cross from './images/cross.gif';
import './product.css';

function ProductPage() {
    const { id } = useParams();
    const [isClick, setClick] = useState(false);
    const product = imageData[id];

    if (!product) {
        return <div>Product not found</div>;
    }

    const renderProductPlusTable = () => (
        <table className="product-plus-table">
            <tbody>
                {Object.entries(product.plus).map(([key, value]) => (
                    <tr key={key}>
                        <td>{key}</td>
                        <td>{value}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );

    return (
        <Container style={{ marginTop: '25px' }}>
            <Row>
                <Col md={5} style={{height: "600px" }} className="Image-product">
                    <Image  className="product-photo" src={product.src} alt={product.title} fluid />
                    
                </Col>
                
                <Col md={5}>
                    <Row style={{ alignItems: 'center',justifyContent:'space-between' }}>
                        <Col>
                            <h2 style={{ fontSize: '24px', margin: '0 auto' }}>{product.title}</h2>
                            <hr />
                        </Col>
                        <Col xs={3} >
                            <Heart style={{height:'25px', width:"25px"}} isClick={isClick} onClick={() => setClick(!isClick)} fluid />
                        </Col>
                    </Row>

                    <p className="detaille">{product.details}</p>
                    <hr />
                    <span style={{ color: 'green' }}>Actuellement indisponible</span><br />
                    <span className="detaille">
                        Nous ne savons pas quand cet article sera de nouveau approvisionné ni s'il le sera.
                    </span>
                    {renderProductPlusTable()}<hr></hr>
                    <span className="detaille">
                        <div style={{marginTop:'-30px'}}
                        className="product-propos-de-ces-article"
                        dangerouslySetInnerHTML={{ __html: product.propos_de_ces_article }}
                        ></div>
                    </span>

                </Col>
                <Col style={{ border: '1px solid black', borderRadius: '20px', width: '0px', height:'300px', padding:'20px' }}>
                    <span style={{paddingTop: "10px", fontSize : "25px"}}>{product.price} dt</span><br></br>
                    <span style={{ fontSize: "14px"}}>Livraison à 8,15 dt <strong>26 avril - 7 mai</strong></span>
                    <Col xxl={10}>
                        <div style={{ display: 'flex', alignItems: 'center' ,justifyContent:'space-between' }}>
                            <span style={{color: 'red', fontSize: '18px', margin: 0}}>Hors Stock</span>
                            <img style={{height:'25px', width:'25px', color:'red', float:'right'}} src={cross} alt="cross"/>
                        </div>
                    </Col>
                    <select 
                style={{
                    fontSize: '18px',
                    marginLeft: '5px',
                    padding: '5px',
                    borderRadius: '10px',
                    border: '1px solid #ccc',
                    backgroundColor: '#f8f8f8',
                    cursor: 'pointer',
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    margin:'10px auto'
                }} 
                value={product.quantity} 
            >
                {/* Generate options from 0 to 10 */}
                {[...Array(5)].map((_, index) => (
                    <option
                        key={index}
                        value={index + 1}
                        style={{ padding: '5px', backgroundColor: index % 2 === 0 ? '#e6f7ff' : '#ffffff' }}
                    >
                        {index+1}
                    </option>
                ))}
            </select>
        
                    <button className="myCustomButton">Add to bunner</button>
                    <button className="buyButton">Buy It</button>

                </Col>
<hr/>
            </Row>
        </Container>
    );
}

export default ProductPage;
