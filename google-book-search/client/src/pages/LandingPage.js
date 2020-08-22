import React, { Component } from "react";
import "../components/style.css";
import SearchBook from "./SearchBook";
import List from "../components/List/List"
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron'


function LandingPage() {
    return (
        <div>

            <Jumbotron fluid>
                <Container>
                    <h1>Google Book Club</h1>
                    <p>
                        Find a book today.
                    </p>
                </Container>
            </Jumbotron>

            <Container fluid>
                <Row>
                    <Col>
                <SearchBook />
                </Col>
                <Col>
                <List />
                </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LandingPage;
