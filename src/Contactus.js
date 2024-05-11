import React, { useState } from 'react';

function Contact() {
    // Initialize form state with useState
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // Handler to update form state on input change
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handler to process form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Implement form submission logic here
        console.log('Form submitted:', formData);
    };

    return (
        <div className="container mt-5">
            <h1>Contact Us</h1>
            <p>
                Welcome to our furniture e-commerce site! If you have any questions, concerns, or feedback, feel free to reach out to us using the form below. We're here to help!
            </p>

            {/* Contact form */}
            <form className="mt-4" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows="4"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

            {/* Contact information section */}
            <div className="mt-5">
                <h3>Contact Information</h3>
                <p>
                    <strong>Address:</strong> 123 Furniture Lane, Furniture City, FC 12345<br />
                    <strong>Phone:</strong> (+216) 456-7890<br />
                    <strong>Email:</strong> contact@furnitureecommerce.com
                </p>
            </div>
        </div>
    );
}

export default Contact;
