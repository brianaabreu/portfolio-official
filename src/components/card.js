import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import JS from "../img/javascript.svg";
import HTML from "../img/html5.svg";
import CSS from "../img/css.svg";
import React1 from "../img/react.svg";
import Python from "../img/python.svg";
import SASS from "../img/sass.svg";
import { Link } from 'react-scroll';




const Card = props => {

    var element = document.getElementById("box");

    return (
        <div className="container d-flex align-items-center">
            <Jumbotron className="jumbotron" style={{ borderRadius: '25px', backgroundColor: "#8b8b8b86", color: "white", padding:"50px" }}>
                <h1 className="display-3">Hello, world!</h1>
                <p className="lead">Welcome to my portfolio. My name is Briana, I recently graduated Lambda School and am on my way to accomplish my dreams of becoming a developer!</p>
                <hr className="my-2" />
                <p style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '50px' }}>
                    <img src={HTML} className="SVGs" />
                    <img src={CSS} className="SVGs" />
                    <img src={JS} className="SVGs" />
                    <img src={React1} className="SVGs" />
                    <img src={SASS} className="SVGs" />
                    <img src={Python} className="SVGs" /></p>
                <p className="lead" style={{ marginBottom: '-30px' }}>
                <Link
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}><Button className="myProjectsBtn" style={{ padding: '9px', borderRadius: '3PX' }} color="light">My Projects</Button></Link>
                </p>
            </Jumbotron>
        </div>

    )
}

export default Card;