import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import SearchBook from './pages/SearchBook';
import ViewBook from './pages/ViewBook';
import Detail from "./pages/Detail";





function App() {
  return (

    <Router>

      <div className="App">
        <Header />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/searchbook" component={SearchBook} />
        <Route exact path="/viewbook" component={ViewBook} />
        <Route exact path="/books/:id">
          <Detail />
        </Route>
        <br></br>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
