import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './contact.css';

const Contact = () => {
    return(
        <Container>
            <Row><h3 style={{ color:'#fff' }}>Contacto</h3></Row>
            <Row className={'contact-card'}>
                <Col>
                    <Row>
                        <Col lg={6}> Adelys Alberto Belen</Col>
                        <Col lg={6}> <a rel='noreferrer' target='_blank' href={'https://wa.me/5491127792625?text=Hola'}>1127792625</a> </Col>
                    </Row>
                    <Row>
                        <Col> Banfield, Buenos Aires </Col>
                        <Col><a rel='noreferrer' target='_blank' href={'https://www.linkedin.com/in/adelysalberto/'}>Linkedin</a> </Col>
                    </Row>
                    <Row>
                        <Col> adalbeca@gmail.com </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
export default Contact;
