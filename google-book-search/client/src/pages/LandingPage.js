import React, { Component } from "react";
import "../components/style.css";
import SearchBook from "./SearchBook";
import {List, ListItem} from "../components/List/List"
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import SearchForm from '../components/Form/SearchForm';
import {DeleteBtn, ViewBtn, SaveBtn} from '../components/Button/Btn'
import ViewBook from "./ViewBook";



function LandingPage() {
    return (
        <div >

            <img src = "https://external-preview.redd.it/yZc0bxK3qvWcx1bfWxn-Sahbrw346a8GjeRgx2CDDWk.jpg?auto=webp&s=e65d09485c4c62c8b8a914e06dbf4ddb4a12106a" />
        </div>
    )
}

export default LandingPage;
