import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import './Home.css';

function CommentSection() {
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

    return (
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
                        / >
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
                <div>
                    <ReactStars
                        className="Stars"
                        count={5}
                        onChange={handleRatingChange}
                        size={24}
                        isHalf
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                        value={rating}
                    />
                </div>
            )}
        </div>
    );
}

export default CommentSection;
