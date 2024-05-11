import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './Home.css'; // Custom CSS for additional styles (optional)


const Aboutus = () => {
  return (
    <div className="containerAbout mt-4">
      <div className="row">
        <div className="col-12">
          <h1>About Us</h1>
          <p>
            Welcome to our furniture e-commerce site! We are passionate about providing you with high-quality home furniture that combines comfort, style, and durability. Our carefully curated selection includes a variety of pieces for every room in your home.
          </p>
          <p>
            At our company, we believe in offering exceptional customer service and strive to make your shopping experience as smooth as possible. Whether you're looking for modern or traditional furniture, we've got you covered.
          </p>
          <p>
            We take pride in our commitment to sustainability and ethical sourcing. Our products are designed with the environment in mind, and we work closely with our suppliers to ensure responsible practices.
          </p>
          <p>
            Thank you for choosing us as your go-to destination for home furniture. We look forward to helping you create a beautiful and comfortable living space!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
