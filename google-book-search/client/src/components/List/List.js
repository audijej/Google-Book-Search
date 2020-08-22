import ListGroup from 'react-bootstrap/ListGroup';
import React, { Component } from "react";

function List () {
    return(
        <div>
            <ListGroup>
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default List;