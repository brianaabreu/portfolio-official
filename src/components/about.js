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
        <div>
            <div className="background3" style={{ filter: 'blur(8px)' }}></div>
            <div className="part3Container">
                <div>
                    
                </div>
                <div className="CardAboutContainer" style={{ alignSelf: 'center' }}>
                    <Card className="shadow-lg p-3 mb-5 bg-white rounded cardAbout">
                        <CardBody>
                            <CardTitle>About Me</CardTitle>
                            <CardText>
                                Sit est ea sit esse adipisicing officia
                                ad sit magna sint officia occaecat ex. Ad voluptate
                                esse Lorem adipisicing non officia dolor exercitation.
                                Veniam ut ex quis id magna ex culpa duis exercitation.
                                Qui ex et nulla fugiat ipsum labore nisi amet cupidatat
                                ipsum commodo anim anim culpa.
                            </CardText>
                            <a href="https://github.com/brianaabreu">
                                <button className="gitButton" style={{ width: '30%', padding: '5px', paddingBottom: '9px' }}>
                                    <img src={Github1} style={{ width: '30%', marginRight:'5px' }} /><img style={{ width: '12%', padding: '0' }} src={Github} />
                                </button>
                            </a>
                        </CardBody>
                        <CardFooter style={{maxWidth:'550px'}}>Footer</CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default AboutSnippet;