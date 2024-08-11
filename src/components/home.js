import React from 'react';

function Home() {
  return (
    <div className="container">
      <div className="jumbotron mt-5">
        <h1>My Portfolio</h1>
        <h4>Hello World!</h4>
        <hr/>
        <p>See my projects</p>
        <a className="btn btn-primary" href="/portfolio">View Portfolio</a>
        <a className="btn btn-primary" href="/">Clone Code</a>
      </div>
    </div>
  );
}

export default Home;
