import React, {useRef} from 'react';
import Logo from "../img/Logo.png"
import "../App.css";
import "../bttn.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-scroll';
import Card from "./card";
import AboutSnippet from './about';


const Header = () => {

    return (
        <div className="headContainer">
            <div className="navContain">
                <div className="nav">
                    <img style={{ marginTop: '20px' }} alt="imageLogo" src={Logo} className="Logo"></img>
                    <nav className="navBar" style={{ textAlign: 'center' }} >
                    <Link><button onScroll={AboutSnippet} style={{ color: "black", fontSize: '16px' }} className="bttn-minimal bttn-md buttonNav">Home</button></Link>
                    <Link 
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}><button style={{ color: "black", fontSize: '16px' }} className="bttn-minimal bttn-md buttonNav">Projects</button></Link>  
                    <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}><button style={{ color: "black", fontSize: '16px' }} className="bttn-minimal bttn-md buttonNav">About Me</button></Link>
                    <a href="https://docs.google.com/document/d/e/2PACX-1vTcvEK9Ymxb-tHdOI1KilX-fxKs1umpH9cO8sFXYdb0o7268MMGJEwiUw8TvAgIUFPOVZoPemXQi7HU/pub"><button style={{ color: "black", fontSize: '16px' }} className="bttn-minimal bttn-md buttonNav"> Resume</button></a>

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