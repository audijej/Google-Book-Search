import React, { Component } from "react";
import "../components/style.css";
import SearchBook from "./SearchBook";
import { List, ListItem } from "../components/List/List"
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import SearchForm from '../components/Form/SearchForm';
import { DeleteBtn, ViewBtn, SaveBtn } from '../components/Button/Btn'
import ViewBook from "./ViewBook";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";





function LandingPage() {

    return (
        <div className="bg">
            <div class="hero-text">
                <h1>Google Book Search Application</h1>
                <p id="landingPageText">Search for books on google and save them to you list</p>
                <Button><Link
    to="/searchbook"
    className={window.location.pathname === "/searchbook" ? "nav-link active" : "nav-link"}
            >
    <h1>Search a book</h1>
    </Link></Button>
            </div>
        </div>
    )
}

export default LandingPage;
