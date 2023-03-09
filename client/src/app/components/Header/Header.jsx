import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/NavBar';
import './Header.scss';

export default function Header() {
    return(
        <>
            <Navbar collapseOnSelect expand="md">
                <Container>
                    <Navbar.Brand className='header_logo' as={Link} to='/'>
                        NST Medicine card
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className='me-auto'></Nav>
                        <Nav>
                            <Nav.Link className='header_link' as={Link} to='/'>
                                Главная
                            </Nav.Link>
                            <Nav.Link className='header_link' as={Link} to='/'>
                                Сотрудники
                            </Nav.Link>
                            <Nav.Link className='header_link_exit' as={Link} to='/'>
                                Выход
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}