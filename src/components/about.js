import React from 'react';
import {
    Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText
} from 'reactstrap';
import Github from "../img/github.svg"
import Github1 from "../img/gitText.svg"
import "../App.css"


const AboutSnippet = () => {


    return (
        <div id="about">
            <div className="background3" style={{ filter: 'blur(8px)' }}></div>
            <div className="part3Container">
                <div>
                    
                </div>
                <div className="CardAboutContainer" style={{ alignSelf: 'center' }}>
                    <Card className="shadow-lg p-3 mb-5 bg-white rounded cardAbout">
                        <CardBody>
                            <CardTitle>About Me</CardTitle>
                            <CardText>
                                My name is Briana Abreu, an aspiring web developer who has been passionate about development
                                since the age of 11. I have been following my dream ever since and every day
                                I am proud to say I learn more and get closer. I enjoy using React
                                and Node for my projects, so I hope to pursue my career using what I know most, but I am a quick learner.<br></br><br></br>
                                
                                🌱 I graduated Lambda School in May 2021.
                            </CardText>
                            <a href="https://github.com/brianaabreu">
                                <button className="gitButton" style={{ width: '30%', padding: '5px', paddingBottom: '9px' }}>
                                    <img src={Github1} style={{ width: '30%', marginRight:'5px' }} /><img style={{ width: '12%', padding: '0' }} src={Github} />
                                </button>
                            </a>
                        </CardBody>
                        <CardFooter style={{maxWidth:'550px'}}>📫 How to reach me: <a style={{textDecoration:'none'}} href="https://www.linkedin.com/feed/?msgOverlay=true">Linkedin</a></CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default AboutSnippet;