import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button'

function SearchBook() {
    return (
        <div className="container">
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label style={{color: "white"}}>Search a book here....</Form.Label>
                <Form.Control type="email" placeholder="Book..." />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>
            
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </div>
    )
}

export default SearchBook;
