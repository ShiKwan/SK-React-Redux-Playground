import React, {Component} from 'react';

class Navigation extends Component {

    render () {
        return(
            <div className="container">
                <div id="logo" className="pull-left">
                    <h1><a href="#hero">Shi Kwan Tan</a></h1>
                </div>
                <nav id="nav-menu-container">
                    <ul className="nav-menu">
                        <li className="menu-active">
                            <a href="#hero">Home</a>
                        </li>
                        <li>
                            <a href="#about">About Me</a>
                        </li>
                        <li>
                            <a href="resume.html">Resume</a>
                        </li>
                        <li className="menu-has-children">
                            <a href="#portfolio">Portfolios</a>
                            <ul>
                                <li>
                                    <a target="_blank" href="https://shikwan.github.io/Commodity-Brokerage-Application/">Commodity Research Application</a>
                                </li>
                                <li>
                                    <a href="https://shikwan.github.io/RPS-Multiplayer/" target="_blank">Rock Paper Scissors Game</a>
                                </li>
                                <li>
                                    <a href="https://shikwan.github.io/RPG-Game/" target="_blank">Role Playing Game</a>
                                </li>
                                <li>
                                    <a href="https://shikwan.github.io/hangman-game/" target="_blank">Hangman Game</a>
                                </li>
                                <li>
                                    <a href="https://shikwan.github.io/TriviaGame/" target="_blank">Trivia Game</a>
                                </li>
                                <li>
                                    <a href="https://shikwan.github.io/train-schedule/" target="_blank">Train Schedule</a>
                                </li>
                                <li>
                                    <a href="https://murmuring-dusk-21457.herokuapp.com/" target="_blank">Friend Finder</a>
                                </li>
                                <li>
                                    <a href="http://andale-fitness.herokuapp.com/" target="_blank">Andale! RSVP Your Sporting Event!</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#contact">Contact Me</a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navigation;