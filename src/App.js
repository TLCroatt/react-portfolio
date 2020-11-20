import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact";
import './App.css';
import Navigation from "./components/Nav";
import Footer from "./components/Footer";
import { Container } from "reactstrap";


function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Container>
        <Switch>
          <Route exact path={["/", "/about"]} component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        </Container>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
