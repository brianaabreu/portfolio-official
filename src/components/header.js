import React from 'react';
import Logo from "../img/Logo.png"
import "../App.css";
import "../bttn.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "./card";
import Slider from "./slider";



const Header = () => {

    return (
        <div className="headContainer">
            <div className="navContain">
                <div className="nav">
                    <img style={{ marginTop: '20px' }} alt="imageLogo" src={Logo} className="Logo"></img>
                    <nav className="navBar" style={{ textAlign: 'center' }} >
                        <button style={{ color: "black", fontSize: '16px' }} className="bttn-minimal bttn-md buttonNav">Home</button>
                        <button style={{ color: "black", fontSize: '16px' }} className="bttn-minimal bttn-md buttonNav">About Me</button>
                        <button style={{ color: "black", fontSize: '16px' }} className="bttn-minimal bttn-md buttonNav">Contact Me!</button>
                        <button style={{ color: "black", fontSize: '16px' }} className="bttn-minimal bttn-md buttonNav">Resume</button>

                    </nav>
                </div>
            </div>
            <div className="right">

                <Card />

            </div>

        </div>

    )
}

export default Header