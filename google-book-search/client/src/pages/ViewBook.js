import "../components/style.css";
import SearchBook from "./SearchBook";
import {List, ListItem} from "../components/List/List"
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import {DeleteBtn, ViewBtn, SaveBtn} from '../components/Button/Btn';
import API from "../utils/API";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';




function ViewBook () {

    const [savedbooks, setSaveBooks] = useState([])
    const [formObject, setFormObject] = useState({})
    const [books, setBooks] = useState('')
    const [bookList, setbookList] = useState({listing: []})


    useEffect(() => {
        loadBooks()
    }, [])

    // function searchForBook(event) {
    //     event.preventDefault();
    //     const query =  books;
    //     const BASEURL = `https://www.googleapis.com/books/v1/volumes?q=`
    //     axios.get(BASEURL + query)
    //         .then(res => {
    //             console.log(res.data.items)
    //             console.log("hello")
    //             setbookList({listing: res.data.items})
    //             setFormObject()
    //         })
    // }

    function loadBooks() {
        API.getBooks()
            .then(res =>
                setSaveBooks(res.data)
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

    // function handleFormSubmit(event) {
    //     event.preventDefault();
    //     if (formObject.title && formObject.author) {
    //         API.saveBook({
    //             title: formObject.title,
    //             author: formObject.author,
    //             synopsis: formObject.synopsis
    //         })
    //             .then(res => loadBooks())
    //             .catch(err => console.log(err));
    //     }
    // };

    return (
        

<div className="container">

<Jumbotron fluid>
    <Container>
    <h1>View your saved books here</h1>
        <p>
            Find a book today.
        </p>
    </Container>
</Jumbotron>

<br></br>
<br></br>

<Container fluid id="resultsdiv" >
    <h1>Saved Books</h1>
    {savedbooks.length ? (
              <List>
                {savedbooks.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                      {/* <a href= {savedbooks.volumeInfo.previewLink} target="_blank"  > */}
                        {book.title} by {book.authors}
                        {/* </a> */}
                      </strong>
                    </Link>
                    <br></br>
                    <DeleteBtn onClick={() => deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
</Container>
</div>
    )
}

export default ViewBook;
