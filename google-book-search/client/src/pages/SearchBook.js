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
import axios from 'axios';



function SearchBook() {

    const [books, setBooks] = useState('')
    const [formObject, setFormObject] = useState({
        savedBook: [],
        title: [],
        author: [],
        synopsis: []
    })
    const [bookList, setbookList] = useState({listing: []})

    useEffect(() => {
        loadBooks()
    }, [])

    function searchForBook(event) {
        event.preventDefault();
        const query =  books;
        const BASEURL = `https://www.googleapis.com/books/v1/volumes?q=`
        axios.get(BASEURL + query)
            .then(res => {
                console.log(res.data.items)
                console.log("hello")
                setbookList({listing: res.data.items})
                setFormObject({savedBook: res.data.items, title: res.data.items, author: res.data.items, synopsis: res.data.items})
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

    // function handleInputChange(event) {
    //     const { name, value } = event.target;
    //     setFormObject({ ...formObject, [name]: value })
    // };

    function handleFormSubmit(event) {
        event.preventDefault();
            API.saveBook({
                title: formObject.title,
                author: formObject.author,
                synopsis: formObject.synopsis
            })
                .then(res => loadBooks())
                .catch(err => console.log(err));
                console.log("your book has been saved")
        
    };

    return (
        <div>
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
                    <form onSubmit={searchForBook}>
                        <Input 
                         placeholder='Book Search'
                        onChange={event => setBooks(event.target.value)} />
                    <br></br>

                    <FormBtn
                        // enabled={!(formObject.title)}
                        // onClick={handleFormSubmit}
                    >Save your book</FormBtn>
                    </form>
            </Container>
            </div>
            <br></br>
            <br></br>

        <div>
        <h1>Results</h1>
                <List>

                {bookList.listing.map((bookListing, item) => (
                    <ListItem key={item}>
                        <Row>
                        <Col>
                        <h5>ID: {bookListing.id}</h5>
                        <h5>Title: {bookListing.volumeInfo.title}</h5>
                        <h5>Author: {bookListing.volumeInfo.authors}</h5>
                        <p style={{color: "black"}}>Synopsis: {bookListing.volumeInfo.description}</p>
                        </Col>
                        <Col>
                        <a href= {bookListing.volumeInfo.previewLink} target="_blank"  >
                        <img src= {bookListing.volumeInfo.imageLinks.smallThumbnail} alt="bookImage" />
                        </a>
                        </Col>
                        <Col>
                        <ViewBtn /><SaveBtn onClick={handleFormSubmit} />
                        </Col>
                        </Row>

                    </ListItem>

                ))}
                </List>
        </div>
            
                </div>

    )
}

export default SearchBook;
