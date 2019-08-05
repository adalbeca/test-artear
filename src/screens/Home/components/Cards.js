import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const CardInfo =({ data }) => {
    return(
        <Row>
            { data.map((item, key)=> {
                const sumName=item.first_name.length+item.last_name.length;
                return(
                    <Col lg={3} key={key}>
                        <Card className={'card-box'} >
                            <Card.Body>
                                <div>
                                    <div className={'d-flex'}>
                                        <span className={'card-tag'}>Name: </span> <span className={'card-name'}>{item.first_name} {item.last_name}</span>
                                    </div>
                                    <div className={'d-flex'}>
                                        <span className={'card-tag'}>Email: </span> <span className={'card-email'}> { item.email } </span>
                                    </div>
                                    <div className={'d-flex'}>
                                        <span className={'card-tag'}>Caracteres en Nombre & Apellido: </span> <span className={'card-name'}>{sumName}</span>
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
