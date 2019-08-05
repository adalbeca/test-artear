import React from "react";
import { Col, Row } from "react-bootstrap";

const CardInfo =({ data }) => {
    let count=0;
    const calcultate = data.filter( item => {
        if((item.first_name.length + item.last_name.length) > 12 ){
            count++
        }
    });
    const porcentaje= (count*100)/data.length;
    return(
        <Row>
            <Col>
                <div>Porcentaje de personas cuyo nombre y apellido tienen mas de 12 caracteres  { porcentaje.toFixed(2) }% </div>
            </Col>
        </Row>
    )
};
export default CardInfo;
