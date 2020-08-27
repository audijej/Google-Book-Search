import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import { Col, Row, Container } from "../components/Grid";
import Button from 'react-bootstrap/Button';
import API from "../utils/API";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';



function Detail(props) {
  const [book, setBook] = useState({})

  // When this component mounts, grab the book with the _id of props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  const { id } = useParams()
  useEffect(() => {
    API.getBook(id)
      .then(res => setBook(res.data))
      .catch(err => console.log(err));
  }, [])

  return (
    <div>
      <Jumbotron fluid>
        <h1>Saved Books</h1>
      </Jumbotron>

      <Container>

<Row>
  <Col>
  <h1>
          {book.title}
        </h1>
        <h1>
          by: {book.authors}
        </h1>
</Col>
</Row>
     

        <Row>
          <Col>
            <img src={book.image} />
          </Col>
        </Row>

        <Row>
          <Col>
            <a href={book.link} target="_blank"  >
              <Button>
                View Info Here
              </Button>
            </a>
          </Col>
        </Row>


        <Row>
          <div>
            <h1>Synopsis</h1>
            <p>
              {book.description}
            </p>
          </div>
        </Row>



        <Row>
          <Col>
            <Link to="/viewbook">← Back to Authors</Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}


export default Detail;
