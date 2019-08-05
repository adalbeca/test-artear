import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import './footer.css';
import linkedin from '../../assets/icon-social-linkedin.png';
import whatsapp from '../../assets/icon-social-whatsapp.png';

const Footer = () => {
    return (
        <Container className={'mt-2'}>
            <Row className='footer'>
                <Col xs={6} lg={6}>
                    <p>Copyleft Adelys Belen | Developer.</p>
                    <p>Telefono: <a style={{ color:'#888' }} href='tel:11-2779-2625'>11-2779-2625</a> / <a style={{ color:'#888' }} href='tel:11-2779-2627'>11-2779-2627</a></p>
                    <p>Banfield, Buenos Aires</p>
                </Col>
                <Col xs={6} lg={6} className='d-flex flex-column align-items-end'>
                    <span className={'social-networks'}>
                        <a rel='noopener noreferrer' target='_blank' href={'https://wa.me/5491127792625?text=Hola'}><img alt={'whatsapp'} src={whatsapp} /> Whatsapp </a>
                    </span>
                    <span className={'social-networks'}><a href={'https://www.linkedin.com/in/adelysalberto/'} rel='noopener noreferrer' target='_blank'><img alt={'linkedin'} src={linkedin} /> Linkedin </a></span>
                </Col>
            </Row>
        </Container>
    );
}
export default Footer;
