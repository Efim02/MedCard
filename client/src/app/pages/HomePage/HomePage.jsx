import React, { useState } from 'react';
import './HomePage.scss';
import Container from 'react-bootstrap/esm/Container';
import InputIndicators from '../../components/Modals/InputIndicators/InputIndicators';


const HomePage = () => {
    const [handInputVisible, setHandInputVisible] = useState(true);

    return (
        <Container fluid={"md"} className="main_page">
            <InputIndicators show={handInputVisible} onHide={ () => setHandInputVisible(false) }/>
        </Container>
    );
}

export default HomePage;