import React, { useState, useEffect } from "react";
import { Input, TextArea, FormBtn } from '../components/Form/SearchForm';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { DeleteBtn, ViewBtn, SaveBtn } from '../components/Button/Btn';
import API from "../utils/API";
import Container from 'react-bootstrap/Container';
import { List, ListItem } from "../components/List/List";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';




function SearchBook() {

    const [books, setBooks] = useState([])
    const [formObject, setFormObject] = useState({
        search: ""
    })

    useEffect(() => {
        loadBooks()
    }, [])

   function searchForBook (event) {
        event.preventDefault();
        const query = formObject;
        const BASEURL = "https://www.googleapis.com/books/v1/volumes"
        fetch(BASEURL + query)
        .then((data) => {
            console.log(data)
        })
    }

    function loadBooks() {
        API.getBooks()
            .then(res =>
                setBooks(res.data)
            )
            .catch(err => console.log(err));
    };

    function deleteBook(id) {
        API.deleteBook(id)
            .then(res => loadBooks())
            .catch(err => console.log(err));
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.title) {
            API.saveBook({
                title: formObject.title,
                
            })
                .then(res => loadBooks())
                .catch(err => console.log(err));
        }
    };

    return (
        <div className="container">

            <Jumbotron fluid>
                <Container>
                    <h1>Google Book Club</h1>
                    <p>
                        Find a book today.
                </p>
                </Container>
            </Jumbotron>

            <Container fluid id="booksearch">
                <h1>Search A Book</h1>
                <Row>
                    <Col>
                        <Input books ={setBooks}/>
                    </Col>
                    <br></br>

                    <FormBtn
                    enabled={!(formObject.title)}
                    onClick={handleFormSubmit}
                    >Save your book</FormBtn>
                </Row>
            </Container>

            <br></br>
            <br></br>

            <Container fluid id="resultsdiv" >
                <h1>Results</h1>
                <List /><ViewBtn /><SaveBtn />

            </Container>
        </div>
    )
}

export default SearchBook;
