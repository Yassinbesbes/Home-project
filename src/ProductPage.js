import React, { useState} from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Heart from 'react-animated-heart';
import Image from 'react-bootstrap/Image';
import imageData from './imageData'; // Importing image data from the same file as Home
import './product.css'

function ProductPage() {
    const stores = [
        { name: 'Megastore Tunis Charguia', status: 'En Stock' },
        { name: 'Magasin Av.liberté Tunis', status: 'En Stock' },
        { name: 'Magasin Bizerte', status: 'Epuisé' },
        { name: 'Magasin Sousse', status: 'En Stock' },
      ];
    const { id } = useParams();
    const [isClick, setClick] = useState(false);
    const product = imageData[id]; // Retrieve the product data from imageData using the id

    // Ensure product exists before rendering
    if (!product) {
        return <div>Product not found</div>; 
    }

    return (
        <Container style={{marginTop:'25px'}}>
            <Row>
                <Col className="Image-product">
                    <Image className='product-photo' src={product.src} alt={product.title} fluid />
                </Col>
            
            
                <Col md={6}>
                <Row className="product-title-row">
                    <Col>
                        <h2>{product.title}</h2>
                        <h5>{product.price} dt</h5>
                    </Col>
                    <Col xs={2} >
                        <Heart className="heart" isClick={isClick} onClick={() => setClick(!isClick)} fluid />
                    </Col>

                </Row> 

                    <p className='detaille'>{product.details}</p> 
                    <button className='myCustomButton' >Add to bunner</button>


                    <div className="Stock-Position">
                    <h2 className="titre">Disponibilité des Produits</h2>
                    <ul className="stock-list">
                        {stores.map((store) => (
                        <li key={store.name} className="stock-item">
                            <span className="store-name">{store.name}</span>
                            <span className={`stock-status ${store.status === 'En Stock' ? 'in-stock' : 'out-of-stock'}`}>{store.status}</span>
                        </li>
                        ))}
                    </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default ProductPage;
