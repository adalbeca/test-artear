import { Container, Nav, Navbar } from "react-bootstrap";
import React from "react";

const Navs = () => {
    return(
        <Navbar bg='light' expand='lg'>
            <Container>
                <Navbar.Brand href='/'>Test <b>Artear</b></Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='mr-auto'>
                        <Nav.Link href='/'>Ejercicio 1</Nav.Link>
                        <Nav.Link href='/test2'>Ejercicio 2</Nav.Link>
                        <Nav.Link href='/contact'>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}
export default Navs;
