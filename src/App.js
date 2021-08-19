import './App.css';
import React from 'react';
import Header from "./components/header";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Projects from "./components/projects";
import AboutSnippet from "./components/about";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Projects />
      <AboutSnippet className="part3Container" />
      <Footer />
    </div>
  );
}

export default App;
