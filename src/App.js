import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Nav from './components/nav';
import Footer from './components/footer';
import Home from './components/home';
import Menu from './components/menu';
import Contact from './components/contact';
import About from './components/about';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" component={Menu} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
        </Switch> 
      </Router>
      <Footer />
    </>
  );
}

export default App;
