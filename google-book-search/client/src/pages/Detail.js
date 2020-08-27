import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import Jumbotron from 'react-bootstrap/Jumbotron';


function Detail(props) {
  const [book, setBook] = useState({})

  // When this component mounts, grab the book with the _id of props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  const {id} = useParams()
  useEffect(() => {
    API.getBook(id)
      .then(res => setBook(res.data))
      .catch(err => console.log(err));
  }, [])

  return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron fluid>
             
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
            <h1>
                {book.title} 
              </h1>
              <h1>
              by {book.authors}
              </h1>
              <a href={book.link} target="_blank"  >More Info Here</a>
              <img src ={book.image} />

              <h1>Synopsis</h1>
              <p>
                {book.description}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/viewbook">← Back to Authors</Link>
          </Col>
        </Row>
      </Container>
    );
  }


export default Detail;
