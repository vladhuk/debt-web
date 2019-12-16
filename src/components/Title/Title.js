import Row from "react-bootstrap/Row";
import React from "react";

export function Title(props) {
    return <Row className='border-bottom pb-2'>
        <h1>{props.title}</h1>
    </Row>
}
