import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className="container">
      <div className="jumbotron mt-5">
        <h1>My Portfolio</h1>
        <h4>Welcome To Jessi Stratton's CS 3750: Software Engineering Portfolio</h4>
        <hr/>
        <Link className="btn btn-primary" to="/portfolio">View Projects</Link>
        <a className="btn btn-primary" href='https://github.com/JessiStrattonWeber/CS3750-Portfolio'>View Code</a>
      </div>
    </div>
  );
}

export default Home;
