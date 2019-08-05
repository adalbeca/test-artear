import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const CardInfo =({ data }) => {
    return(
        <Row>
            { data.map((item, key)=> {
                return(
                    <Col lg={3} key={key}>
                        <Card className={'card-box'} >
                            <Card.Body>
                                <div className='d-flex justify-content-center mb-1'>
                                    <img alt={item.first_name} src={item.avatar} />
                                </div>
                                <div>
                                    <div className={'d-flex'}>
                                        <span className={'card-tag'}>Name: </span> <span className={'card-name'}>{item.first_name} {item.last_name}</span>
                                    </div>
                                    <div className={'d-flex'}>
                                        <span className={'card-tag'}>Email: </span> <span className={'card-email'}> { item.email } </span>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col> )
            }) }

        </Row>
    )
}
export default CardInfo;
