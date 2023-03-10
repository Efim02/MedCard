import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import './footer.scss';

export default function Footer() {
    return (
        <>
            <Container className='footer_container'>
                <p className='footer_logo'>NST Medicine card</p>
            </Container>
        </>
    );
}
