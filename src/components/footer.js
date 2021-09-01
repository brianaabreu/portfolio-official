import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import linkedin from "../img/whitelinkedin.png"
import whitegit from "../img/whitegit.png";


const Footer = () => {



    return (
        <div style={{ display: 'flex', justifyContent: 'center', backgroundColor:'#474747', color:'white' }}>
            <MDBFooter color="blue" className="font-small pt-4 mt-4 footer">
                <MDBContainer fluid className="text-center text-md-left">
                    <MDBRow className="titleContainer">
                        <MDBCol md="6">
                            <h5 className="title">Briana Abreu</h5>
                            <div className="divider"></div>
                        </MDBCol>
                        <MDBCol md="6">
                            <ul style={{marginLeft:'-30px'}}>
                                    <a href="https://github.com/brianaabreu"><img className='footerLinks' src={whitegit}></img></a>
                              
                                    <a href="https://www.linkedin.com/in/briana-abreu-aa8886199/"><img className='footerLinks' src={linkedin}></img></a>
                               
                            </ul>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <div className="footer-copyright text-center py-3">
                    <MDBContainer fluid>
                        &copy; {new Date().getFullYear()} Copyright: <a href="https://brianas-portfolio.netlify.app/"> brianaabreu.com </a>
                    </MDBContainer>
                </div>
            </MDBFooter>
        </div>
    )
}

export default Footer;