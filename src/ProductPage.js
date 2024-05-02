import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Heart from 'react-animated-heart';
import Image from 'react-bootstrap/Image';
import imageData from './imageData';
import ReactStars from 'react-rating-stars-component';
import './product.css';

function ProductPage() {
        // State variables
        const [comments, setComments] = useState([]);
        const [inputValue, setInputValue] = useState('');
        const [rating, setRating] = useState(0);
        const [isRatingVisible, setIsRatingVisible] = useState(false);
    
        // Handle form submission
        const handleSubmit = (event) => {
            event.preventDefault();
            setIsRatingVisible(true);
        };
    
        // Handle rating change
        const handleRatingChange = (newRating) => {
            const newComment = { text: inputValue, rating: newRating };
            setComments([...comments, newComment]);
            setInputValue('');
            setRating(0);
            setIsRatingVisible(false);
        };
    
        // Update input value
        const handleInputChange = (event) => {
            setInputValue(event.target.value);
        };
    
        // Define styles
        const styles = {
            container: {
                padding: '16px',
                borderRadius: '8px',
                backgroundColor: '#f9f9f9',
                marginBottom: '16px',
            },
            heading: {
                fontSize: '24px',
                marginBottom: '16px',
                color: '#333',
            },
            form: {
                display: 'flex',
                alignItems: 'center',  // Align input and button
                marginBottom: '16px',
            },
            inputContainer: {
                display: 'flex',
                position: 'relative',
                width: '100%',
            },
            input: {
                padding: '8px',
                borderRadius: '20px',
                border: '1px solid #ccc',
                width: 'calc(100% - 40px)', // Adjust input width
            },
            button: {
                position: 'absolute',
                right: '4px',
                top: '50%',
                transform: 'translateY(-50%)',
                padding: '8px 16px',
                borderRadius: '4px',
                border: 'none',
                backgroundColor: '#007bff',
                color: '#fff',
                cursor: 'pointer',
            },
            commentList: {
                listStyleType: 'none',
                paddingLeft: '0',
            },
            commentItem: {
                marginBottom: '8px',
                padding: '8px',
                borderRadius: '4px',
                border: '1px solid #ccc',
                backgroundColor: '#fff',
            },
        };
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
            <div style={styles.container}>
            <h2 style={styles.heading}>Comments:</h2>
            {/* Display comments */}
            <ul style={styles.commentList}>
                {comments.map((comment, index) => (
                    <li key={index} style={styles.commentItem}>
                        {comment.text} - 
                        {/* Display rating with ReactStars (read-only) */}
                        <ReactStars
                        
                            count={5}
                            value={comment.rating}
                            size={18}
                            edit={false}
                            isHalf
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#ffd700"
                        />
                    </li>
                ))}
            </ul>

            {/* Form for adding comments */}
            <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.inputContainer}>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder="Add a comment"
                        required
                        style={styles.input}
                    />
                    <button type="submit" style={styles.button}>Submit</button>
                </div>
            </form>

            {/* Show the rating stars if isRatingVisible is true */}
            {isRatingVisible && (
    <div
        className="app-container"
        style={{
            position: 'fixed', // Keeps the div centered in the user's view as they scroll
            top: '50%', // Center the div vertically
            left: '50%', // Center the div horizontally
            transform: 'translate(-50%, -50%)', // Use translate to center precisely
            zIndex: 1000, // Control the z-index (layering)
            width: '350px', // Adjust the width based on content
            height: '200px', // Adjust the height based on content
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '10px', // Optional: adjust padding as needed
            backgroundColor: 'white', // Optional: set background color
            borderRadius: '8px', // Optional: round the corners
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Optional: add shadow for visual effect
        }}
    >
        <div style={{ textAlign: 'center' }}>
            <ReactStars
                className="stars"
                count={5}
                onChange={handleRatingChange}
                size={50}
                isHalf
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
                value={rating}
            />
        </div>
    </div>
)}

        </div>
        </Container>
    );
}

export default ProductPage;