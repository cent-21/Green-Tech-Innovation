import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from './site/Home';
import Services from './site/Services';
import Projects from './site/Projects';
import Team from './site/Team';
import Contact from './site/Contact';
import About from './site/About';
import News from './site/News';
import Service from './site/Service';
import Project from './site/Project';
import Post from './site/Post';
import Member from './site/Member';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/home"  element={<Home />}></Route>
        <Route exact path="/services"  element={<Services />}></Route>
        <Route exact path="/service/:serviceId" element={<Service />}></Route>
        <Route exact path="/projects"  element={<Projects />}></Route>
        <Route exact path="/project/:projectId"  element={<Project />}></Route>
        <Route exact path="/team"  element={<Team />}></Route>
        <Route exact path="/member/:teamId"  element={<Member />}></Route>
        <Route exact path="/news"  element={<News />}></Route>
        <Route exact path="/post/:postSlug"  element={<Post />}></Route>
        <Route exact path="/about"  element={<About />}></Route>
        <Route exact path="/contact"  element={<Contact />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
