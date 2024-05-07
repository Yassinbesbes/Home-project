import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import imageData from './imageData';
import { useNavigate } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

function Collection() {
    const navigate = useNavigate();

    const handlePhotoClick = (productId) => {
        navigate(`/product/${productId}`);
    };

    return (
        <div>
            <Container style={{marginTop:"50px"}} >
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
                                <Col className="Name">{item.title}</Col>
                                <Col className="Price">{item.price} dt</Col>
                            </Row>
                        </Col>
                    ))}
                </Row>
                ))}
            </Container>
            <footer>
            <Box sx={{ flexGrow: 1 }}>
            <Grid display="flex" justifyContent="center" alignItems="center" margin="50px">
            <Stack >
                <Pagination count={5} color="grey" />
            </Stack>
            </Grid>
            </Box>
            </footer>
        </div>
    );
}

export default Collection;
