import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Container } from "react-bootstrap";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomeScreen from "./Screens/HomeScreen";
import Productscreen from "./Screens/Productscreen";
import Cartscreen from "./Screens/Cartscreen";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          {" "}
          <Route path="/" component={HomeScreen} exact />
          <Route path="/product/:id" component={Productscreen} />
          <Route path="/cart/:id?" component={Cartscreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
