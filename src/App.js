import React from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider } from './context'

import  Conexers  from './components/conexers/Conexers';
import AddSubject from './components/conexers/AddSubject';
import NotFound from './components/pages/NotFound';
import Test from './components/test/test';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){

    return (
        <BasicExample></BasicExample>
    )
  }


}

function BasicExample(){
  return (

    <Router>
    <div className="container-fluid">
        <div className="navbar navbar-expand-lg navbar-light bg-light">
          <button className=" btn  navbar-brand">Conexia</button>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/topics">Topics</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/conexers">Conexers</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/add-subject">Add</Link>
              </li>
            </ul>
          </div>
         </div>
       </div>

      <hr />
      <Provider>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
        <Route path="/add-subject" component={AddSubject} />
        <Route path="/conexers" component={Conexers} />
        <Route path="/test" component={Test} />
        <Route path="/not-found" component={NotFound} />
      </Provider>
    </Router>
  );
}

function Home(){
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About(){
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Topics({ match }){

  return (
    <div className="container">
      <div className="col-sm-12">
        <div className="jumbotron">
          <h2>Topics</h2>
          <ul>
            <li>
              <Link to={`${match.url}/rendering`}>Rendering with React</Link>
            </li>
            <li>
              <Link to={`${match.url}/components`}>Components</Link>
            </li>
            <li>
              <Link to={`${match.url}/rendering`}>Rendering with React</Link>
            </li>
          </ul>

          <h3>Conexers:</h3>
          <Conexers></Conexers>

        </div>
      </div>

    </div>
  )
}

export default App;
