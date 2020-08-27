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

    let bookParameters = {
        savedBook: [],
        title: '',
        authors: '',
        description: '',
        thumbnail: '',
        link: ''
    }

    const [books, setBooks] = useState([])
    const [formObject, setFormObject] = useState(bookParameters)

    const [bookList, setbookList] = useState({ listing: [] })
    const [searchTerm, setSearchTerm] = useState('')

    // useEffect(() => {
    //     loadBooks()
    // }, [])

    const searchForBook = async () => {
        const query = searchTerm;
        const BASEURL = `https://www.googleapis.com/books/v1/volumes?q=`
        await axios.get(BASEURL + query)
            .then(res => {
                console.log("hello")
                setBooks(res.data.items)
                setbookList({ listing: res.data.items })
                setFormObject({ savedBook: res.data.items, title: res.data.items, authors: res.data.items, description: res.data.items })
                console.log(res.data.items)

            })
    }

    // Submit handler
    const onSubmitHandler = (event) => {
        // Prevent browser refreshing after form submission
        event.preventDefault();
        // Call fetch books async function
        searchForBook();
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

    const handleInputChange = (event, res) => {
        setSearchTerm(event.target.value)
    }

    function handleFormSubmit(index) {
        // event.preventDefault();
        
        console.log(index)
                    API.saveBook({
                        title: books[index].volumeInfo.title,
                        authors: books[index].volumeInfo.authors,
                        description: books[index].volumeInfo.description,
                        image: books[index].volumeInfo.imageLinks.smallThumbnail,
                        link: books[index].volumeInfo.previewLink
                    })
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
                    <form onSubmit={onSubmitHandler}>
                        <Input
                            placeholder='Book...'
                            value={searchTerm}
                            onChange={handleInputChange}
                        />
                        <br></br>
                    </form>
                    </Container>
                </div>

                <br></br>
                <br></br>

                <div>
                    <h1>Results</h1>
                    <List>
                    {bookList.listing.map((bookListing, index) => (
                        <ListItem key={index}>
                            <Row>
                                <Col>
                                    <h5>ID: {bookListing.id}</h5>
                                    <h5>Title: {bookListing.volumeInfo.title}</h5>
                                    <h5>Author: {bookListing.volumeInfo.authors}</h5>
                                    <p style={{ color: "black" }}>Synopsis: {bookListing.volumeInfo.description}</p>
                                </Col>
                                <Col>
                                    <a href={bookListing.volumeInfo.previewLink} target="_blank"  >
                                        <img src={bookListing.volumeInfo.imageLinks.thumbnail} alt="bookImage" />
                                    </a>
                                </Col>
                                <Col>
                                    <ViewBtn /><SaveBtn onClick={() => handleFormSubmit(index)}
                                        title={bookListing.volumeInfo.title}
                                        authors={bookListing.volumeInfo.authors}
                                        description={bookListing.volumeInfo.description} />

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
