// import React from "react";
// import Navbar from "./components/Navbar";
// import Jumbotron from "./components/Jumbotron";
// import Card from "./components/Card";
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

// import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

// library.add(fab, faLinkedin)
// function App() {
//   return (
//     <div className="container">
//       <div classname="bgimg">
//       <Navbar />
//       <Jumbotron />
//       <Card />

//     </div>
//     </div>
//   );
// }
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Music from "./pages/Music";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/music" component={Music} />
      </div>
    </Router>
  )
}

export default App;
