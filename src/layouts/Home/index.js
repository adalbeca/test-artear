import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import Navs from '../../commons/Navs';
import Footer from '../../commons/Footer';


const HomeLayout = ({ children, ...rest }) => {
    return (
        <Container fluid style={{ backgroundColor:'#b5c1c3' }}>
            <Row>
                <Col md={12} className='pl-0 pr-0 mb-2'>
                    <Navs/>
                </Col>
            </Row>
            <Container>
                <Row>
                    <Col md={12} style={{ minHeight:'500px' }}>
                        { children }
                    </Col>
                </Row>
            </Container>
            <Row>
                <Col md={12} className='pl-0 pr-0'>
                    <Footer/>
                </Col>
            </Row>
        </Container>
    )
};

export default HomeLayout;
