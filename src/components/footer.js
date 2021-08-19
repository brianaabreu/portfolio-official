import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";


const Footer = () => {



    return (
        <div style={{ display: 'flex', justifyContent: 'center', backgroundColor:'#474747', color:'white' }}>
            <MDBFooter color="blue" className="font-small pt-4 mt-4 footer">
                <MDBContainer fluid className="text-center text-md-left">
                    <MDBRow>
                        <MDBCol md="6">
                            <h5 className="title">Briana Abreu</h5>
                            <p>
                                Use any of these links to contact me or see my work!
            </p>
                        </MDBCol>
                        <MDBCol md="6">
                            <h5 className="title">Links</h5>
                            <ul>
                                <li className="list-unstyled">
                                    <a href="#!">Github</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">LinkedIn</a>
                                </li>
                            </ul>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <div className="footer-copyright text-center py-3">
                    <MDBContainer fluid>
                        &copy; {new Date().getFullYear()} Copyright: <a href="brianaabreu.com"> brianaabreu.com </a>
                    </MDBContainer>
                </div>
            </MDBFooter>
        </div>
    )
}

export default Footer;