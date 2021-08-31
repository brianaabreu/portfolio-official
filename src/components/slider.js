import React from 'react';
import Carousel, { consts } from "react-elastic-carousel";
import "../App.css";
import Charades from "../img/Charades.png"
import Recipes from "../img/cc.png"
import dog from "../img/dog.png"

import TV from "../img/wr.png"
import Portfolio from "../img/portfolio.png";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },

];

const Slider = () => {

    const myArrow = ({ type, onClick, isEdge }) => {
        const pointer = type === consts.PREV ? '<' : '>';
        return (
            <button className="pointers" style={{
                outline: 'none',
                border: 'none',
                backgroundColor: '#ececec63',
                fontSize: '45px',
                color: 'black',
                maxHeight: '90px',
                alignSelf: 'center',
                borderRadius: '20%'

            }} onClick={onClick} disabled={isEdge}>
                {pointer}
            </button>
        )
    }

    return (
        <>
            <div className="partTwo">

                <div className="Slider">
                    <h1 style={{ textAlign: "center" }} className="projectTitle">My Projects</h1>
                    <Carousel renderArrow={myArrow} breakPoints={breakPoints}>
                        <div class="row" >
                            <div class="col s12 m6">
                                <div class="card">
                                    <div class="card-image" style={{ textAlignLast: 'center' }} >
                                        <img src={Charades} style={{ maxWidth: '340px', padding: '20px', height: '215px' }} />
                                        <span class="card-title">Charades</span>

                                    </div>
                                    <div class="card-content" style={{ textAlign: '-webkit-center', fontSize: '15px' }} >
                                        <p>A fun Charades game developed by my dad<br></br> and me. A very user friendly game with simple instructions: Choose your difficulty (Easy, Medium, Hard). Cards turn by a timer every<br></br> 15 sec. Timer sound and buzzer<br></br> for when times up.</p>
                                    </div>
                                    <div className="btns">
                                        <a href="https://charades-game-by-martin.netlify.app/" class="btnProject">View Project</a>
                                        <a href="https://github.com/MartinAbreu/Charades" class="btnProject">View Repo</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row" >
                            <div class="col s12 m6">
                                <div class="card">
                                    <div class="card-image" style={{ textAlignLast: 'center' }} >
                                        <img src={Recipes} style={{ maxWidth: '340px', padding: '20px', height: '215px' }} />
                                        <span class="card-title">The Writing Room</span>

                                    </div>
                                    <div class="card-content" style={{ textAlign: '-webkit-center' }} >
                                        <p>A fun site to post pictures and share with<br></br> the world, add a description and tags<br></br> with the ability to like others posts!<br></br></p>
                                    </div>
                                    <div className="btns">
                                        <a href="https://final-writingroom.herokuapp.com/" class="btnProject">View Project</a>
                                        <a href="https://github.com/brianaabreu/portfolio-official" class="btnProject">View Repo</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row" >
                            <div class="col s12 m6">
                                <div class="card">
                                    <div class="card-image" style={{ textAlignLast: 'center' }} >
                                        <img src={TV} style={{ maxWidth: '340px', padding: '20px', height: '215px' }} />
                                        <span class="card-title">Creamy Creations</span>

                                    </div>
                                    <div class="card-content" style={{ textAlign: '-webkit-center' }} >
                                        <p>Have a tasty bite of ice cream with this app introducing an ice cream company.</p>
                                    </div>
                                    <div className="btns">
                                        <a href="https://creamy-creations.herokuapp.com/" class="btnProject">View Project</a>
                                        <a href="https://github.com/brianaabreu/creamy-creations" class="btnProject">View Repo</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row" >
                            <div class="col s12 m6">
                                <div class="card">
                                    <div class="card-image" style={{ textAlignLast: 'center' }} >
                                        <img src={dog} style={{ maxWidth: '340px', padding: '20px', height: '215px' }} />
                                        <span class="card-title">Adopt a Dog!</span>

                                    </div>
                                    <div class="card-content" style={{ textAlign: '-webkit-center' }} >
                                        <p>simple page to post dogs for adoption or inquire about adopting dogs, includes login, sign up, donation form , and new post form which is all sent to SQLITE3 database.</p>
                                    </div>
                                    <div className="btns">
                                        <a href="https://final-adoptadog.herokuapp.com/" class="btnProject">View Project</a>
                                        <a href="https://github.com/brianaabreu/final-adoptadog" class="btnProject">View Repo</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row" >
                            <div class="col s12 m6">
                                <div class="card">
                                    <div class="card-image" style={{ textAlignLast: 'center' }} >
                                        <img src={Portfolio} style={{ maxWidth: '340px', padding: '20px', height: '215px' }} />
                                        <span class="card-title">Portfolio</span>

                                    </div>
                                    <div class="card-content" style={{ textAlign: '-webkit-center' }} >
                                        <p>You're looking at it! I built this project using react, along with reactstrap.</p>
                                    </div>
                                    <div className="btns">
                                        <a class="btnProject">View Project</a>
                                        <a class="btnProject">View Repo</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default Slider;