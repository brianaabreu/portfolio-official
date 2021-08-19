import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import JS from "../img/javascript.svg";
import HTML from "../img/html5.svg";
import CSS from "../img/css.svg";
import React1 from "../img/react.svg";
import Python from "../img/python.svg";
import SASS from "../img/sass.svg";




const Card = props => {

    var element = document.getElementById("box");

    return (
        <div className="container d-flex align-items-center">
            <Jumbotron className="jumbotron" style={{ borderRadius: '25px', backgroundColor: "#8b8b8b86", color: "white" }}>
                <h1 className="display-3">Hello, world!</h1>
                <p className="lead">Welcome to my portfolio. My name is Briana and I currently am enrolled in Lambda School to become a web developer.</p>
                <hr className="my-2" />
                <p style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '30px' }}>
                    <img src={HTML} className="SVGs" />
                    <img src={CSS} className="SVGs" />
                    <img src={JS} className="SVGs" />
                    <img src={React1} className="SVGs" />
                    <img src={SASS} className="SVGs" />
                    <img src={Python} className="SVGs" /></p>
                <p className="lead" style={{ marginBottom: '-30px' }}>
                    <Button style={{ padding: '9px', borderRadius: '3PX' }} color="light">My Projects</Button>
                </p>
            </Jumbotron>
        </div>

    )
}

export default Card;