import React, { Component } from "react";
import { Container } from 'reactstrap';
import Navigation from '../../components/homepage/navigation';
import Contact from '../../components/contact/contact';
class Home extends Component {

    render() {

        return (
            <div>
                <div id="preloader"></div>
                <section id="hero">
                    <div className="hero-container">
                        <div className="wow fadeIn">
                            <div className="hero-logo">
                                <img src={sk_portrait} className='img-circle' alt='Shi Kwan Tan' />
                            </div>
                            <h1>SK - Web Application Developer</h1>
                            <h2><span className="rotating">responsive websites, customized websites, ux design, ui design, database analysis, front and back end development</span></h2>
                            <div className="actions">
                                <a href="#about" className="btn-about-me">About Me</a>
                                <a href="#portfolio" className="btn-portfolio">My Portfolio</a>
                            </div>
                        </div>
                    </div>
                </section>
                <header id="header">
                    <Navigation />
                </header>
                <section id="about">
                    <div className="container wow fadeInUp">
                        <div className="row">
                            <div className="col-md-12">
                                <h3 className="section-title">About Me</h3>
                                <div className="section-title-divider"></div>
                                <p className="section-description">
                                    full-stack web developer that develop web application focuses on UX and QoL improvement. Possessed skillsets to plan, research,
                                    strategize, accomplish and refine the finalized product. Capable to work as team player and independently. Multilingual
                                    who interested in new technologies and sports.
                    </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <h2 className="about-title">tech</h2>
                                <p className="about-text">Learning new tech has slowly become a part of my routine, it is always exciting to integrate new technologies to improve
                                    the usability of the application. In order to efficiently using a new technology, researching into the new technology is also a crucial part
                                    of the process, not only that will net you the best fit to the application, it makes the integration process easier in long run.
                    </p>
                                <p className="about-text"><i>
                                    The first rule of any technology used in a business in that automation applied to an efficient operation will magnify the efficiency.
                                    The second is that automation applied to an inefficient operation will magnify the inefficiency.
                    </i> - Bill Gates</p>

                            </div>
                            <div className="col-md-6">
                                <h2 className="about-title">non-tech</h2>
                                <p className="about-text">Competing in high level badminton sport plays an important part in my weekly routine. I have been competing in various states ever since I started
                                    playing in University of Kentucky, not only you get to sweat, but you make new connections with players from all over the world!
                                    To play at a higher level, you have to train harder. That is the code I have been practicing, and I apply the same mindset at web developing too.
                    </p>
                                <iframe width="560" height="315" className='non-tech-video' src="https://www.youtube.com/embed/PKIBaYtHBGs?start=80" frameBorder="0" allow="autoplay; encrypted-media"
                                    allowFullScreen></iframe>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="container">
                                    <h2 className="about-title">footprints</h2>
                                    <div className="row text-center">
                                        <div className="col-md-6">
                                            <a href="https://github.com/ShiKwan/" target="_blank">
                                                <img src="img/icons8-github-50.png" />
                                            </a>
                                            <br /><label>GitHub</label>
                                        </div>
                                        <div className="col-md-6">
                                            <a href="https://www.linkedin.com/in/shi-kwan-tan-93850a89/" target="_blank">
                                                <img src="img/icons8-linkedin-50.png" />
                                            </a>
                                            <br /><label>LinkedIn</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="portfolio">
                    <div className="container wow fadeInUp">
                        <div className="row">
                            <div className="col-md-12">
                                <h3 className="section-title">Portfolio</h3>
                                <div className="section-title-divider"></div>
                                <p className="section-description">These are some of the projects that I worked on</p>
                                <h4 className="section-title">Utilities</h4>
                                <div className="row odd">
                                    <div className="col-md-3 ">
                                        <a className="portfolio-item item5 " target="_blank"
                                            href="https://shikwan.github.io/Commodity-Brokerage-Application/">

                                        </a>
                                    </div>
                                    <div className='col-md-9'>
                                        <div className="text-left">
                                            <h3>Commodity Research Application</h3>
                                            <span>
                                                <button className='btn-xs btn-info'>jQuery</button>
                                                <button className='btn-xs btn-info'>firebase</button>
                                                <button className='btn-xs btn-info'>bootstrap</button>
                                            </span>
                                            <br />
                                            <label>
                                                This single page application is built to scrape commdity information from NYT, Quandl and CommoPrices API, and displaying
                                                the time series data in chart.
                                            </label><br /><br />
                                            <label>
                                                Screenshots:
                                            </label><br />
                                            <a rel="gallery-1" href="img/SBS_Commodity_Broker/thumb0.JPG"
                                                className="swipebox"
                                                title="About Us Page">
                                                <img src="img/SBS_Commodity_Broker/thumb0.JPG" alt="image" />
                                            </a>
                                            <a rel="gallery-1" href="img/SBS_Commodity_Broker/thumb1.JPG" className="swipebox" title="Account Information Page">
                                                <img src="img/SBS_Commodity_Broker/thumb1.JPG" alt="image"/>
                                            </a>
                                            <a rel="gallery-1" href="img/SBS_Commodity_Broker/thumb2.JPG" className="swipebox" title="Search page with autocomplete textbox">
                                                <img src="img/SBS_Commodity_Broker/thumb2.JPG" alt="image"/>
                                            </a>
                                            <a rel="gallery-1" href="img/SBS_Commodity_Broker/thumb3.JPG" className="swipebox" title="Search Result Page">
                                                <img src="img/SBS_Commodity_Broker/thumb3.JPG" alt="image"/>
                                            </a>
                                            <a rel="gallery-1" href="img/SBS_Commodity_Broker/thumb4.JPG" className="swipebox" title="Search keyword also display related world news">
                                                <img src="img/SBS_Commodity_Broker/thumb4.JPG" alt="image"/>
                                            </a>
                                            <a rel="gallery-1" href="img/SBS_Commodity_Broker/thumb5.JPG" className="swipebox" title="Web application keep track of the search word and display the trending commodity">
                                                <img src="img/SBS_Commodity_Broker/thumb5.JPG" alt="image"/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="row even">

                                    <div className='col-md-9'>
                                        <div className="text-left">
                                            <h3>NYT Article Search</h3>
                                            <span>
                                                <button className='btn-xs btn-info'>ReactJS</button>
                                                <button className='btn-xs btn-info'>API</button>
                                            </span>
                                            <br />
                                            <label>
                                                This single-page application allow users to query NYT News API.
                                                Once articles are scraped, users can browse through the article list, clicking on "read more"
                                                will direct users to NYT article page to finish reading the article.
                                                Users can choose to save favorite articles into
                                                database by clicking on 'Save Article' button on the right side of the article. After an article is saved, an alert would
                                                pop up on top of the jumbotron, and the saved article will now show in Saved Articles section. User are allow to write
                                                note about saved articles by simply typing in the textbox and click 'Save Note' button. This application is hooked with
                                                socket IO, if other parties that are browsing concurrently with you saved a note or perform a search, notifications (latest
                                                five) will appear on the bottom right of the application.
                                            </label><br /><br />
                                            <label>Screenshots: </label><br />
                                            <a rel="gallery-2" href="img/NYT_ReactJS/thumb1.JPG" className="swipebox" title="Search for 'Ethereum' from year 2017 to 2018 and return 5 results">
                                                <img src="img/NYT_ReactJS/thumb1.JPG" alt="image" />
                                            </a>
                                            <a rel="gallery-2" href="img/NYT_ReactJS/thumb2.JPG" className="swipebox" title="Result page">
                                                <img src="img/NYT_ReactJS/thumb2.JPG" alt="image" />
                                            </a>
                                            <a rel="gallery-2" href="img/NYT_ReactJS/thumb3.JPG" className="swipebox" title="Socket IO added notification feature in the bottom right corner">
                                                <img src="img/NYT_ReactJS/thumb3.JPG" alt="image" />
                                            </a>
                                            <a rel="gallery-2" href="img/NYT_ReactJS/thumb4.JPG" className="swipebox" title="Saved articles page, user can view the full article, read previously wrote notes, and write new note to each of the article.">
                                                <img src="img/NYT_ReactJS/thumb4.JPG" alt="image" />
                                            </a>
                                            <br />
                                            <button className='btn-primary'><a href='https://secret-fortress-69917.herokuapp.com/'>Go to App!</a></button>
                                        </div>
                                    </div>
                                    <div className="col-md-3 even">
                                        <a className="portfolio-item item6 " target="_blank" href="https://secret-fortress-69917.herokuapp.com/">

                                        </a>
                                    </div>
                                </div>
                                <div className="row odd">
                                    <div className="col-md-3 odd">
                                        <a className="portfolio-item item7 " target="_blank" href="https://shikwan.github.io/train-schedule/">

                                        </a>
                                    </div>
                                    <div className='col-md-9'>
                                        <div className="text-left">
                                            <h3>Train Schedule</h3>
                                            <span>
                                                <button className='btn-xs btn-info'>firebase</button>
                                            </span>
                                            <br />
                                            <label>Realtime schedule and countdown of train arrival</label><br /><br />
                                            <label>Screenshots: </label><br />
                                            <a rel="gallery-3" href="img/train_schedule/thumb1.JPG" className="swipebox" title="Alert notification when user added a new train information">
                                                <img src="img/train_schedule/thumb1.JPG" alt="image" />
                                            </a>
                                            <a rel="gallery-3" href="img/train_schedule/thumb2.JPG" className="swipebox" title="Overall layout of the one page application">
                                                <img src="img/train_schedule/thumb2.JPG" alt="image" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className='row even'>
                                    <div className='col-md-9'>
                                        <div className="text-left">
                                            <h3>NewsTalk</h3>
                                            <span><button className='btn-xs btn-info'>nodeJS</button></span>
                                            <br />
                                            <label>NPR Technology News Scraper!</label><br /><br />
                                            <label>Screenshots: </label><br />
                                            <a rel="gallery-4" href="img/NewsTalk/thumb1.JPG" className="swipebox" title="Return results after clicking on 'Scrape new articles'">
                                                <img src="img/NewsTalk/thumb1.JPG" alt="image" />
                                            </a>
                                            <a rel="gallery-4" href="img/NewsTalk/thumb2.JPG" className="swipebox" title="User will be prompt a notification after a note has been successfully saved ">
                                                <img src="img/NewsTalk/thumb2.JPG" alt="image" />
                                            </a>
                                            <a rel="gallery-4" href="img/NewsTalk/thumb3.JPG" className="swipebox" title="This page show all saved articles">
                                                <img src="img/NewsTalk/thumb3.JPG" alt="image" />
                                            </a>
                                            <a rel="gallery-4" href="img/NewsTalk/thumb4.JPG" className="swipebox" title="Modal box for user to type in note for the headline.">
                                                <img src="img/NewsTalk/thumb4.JPG" alt="image" />
                                            </a>
                                            <a rel="gallery-4" href="img/NewsTalk/thumb5.JPG" className="swipebox" title="Clicked on the comment button to show the previously wrote note for the headline.">
                                                <img src="img/NewsTalk/thumb1.JPG" alt="image" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-3 even">
                                        <a className="portfolio-item item8  " target="_blank" href="https://murmuring-dusk-21457.herokuapp.com/">

                                        </a>
                                    </div>
                                </div>
                                <div className="row odd">
                                    <div className="col-md-3 odd">
                                        <a className="portfolio-item item9 " target="_blank" href="https://desolate-oasis-72838.herokuapp.com/">

                                        </a>
                                    </div>
                                    <div className='col-md-9'>
                                        <div className="text-left">
                                            <h3>Friend Finder</h3>
                                            <span><button className='btn-xs btn-info'>nodeJS</button></span>
                                            <br />
                                            <label>A simple dating application that help you find your best match!</label><br /><br />
                                            <label>Screenshots: </label>
                                            <br />
                                            <a rel="gallery-5" href="img/FriendsFinder/thumb1.JPG" className="swipebox" title="User will be prompt with questions to find friend with matching personality.">
                                                <img src="img/FriendsFinder/thumb1.JPG" alt="image" />
                                            </a>
                                            <a rel="gallery-5" href="img/FriendsFinder/thumb2.JPG" className="swipebox" title="Once user completed the survey, application will show user the matching friend from the pool.">
                                                <img src="img/FriendsFinder/thumb2.JPG" alt="image" />
                                            </a>
                                            <a rel="gallery-5" href="img/FriendsFinder/thumb3.JPG" className="swipebox" title="Once user clicked on 'View Friends' button, user will be shown with list of users registered in the application.">
                                                <img src="img/FriendsFinder/thumb3.JPG" alt="image" />
                                            </a>
                                            <a rel="gallery-5" href="img/FriendsFinder/thumb4.JPG" className="swipebox" title="Once user clicked on 'View Friends' button, user will be shown with list of users registered in the application.">
                                                <img src="img/FriendsFinder/thumb4.JPG" alt="image" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className='row even'>
                                    <div className='col-md-9'>
                                        <div className="text-left">
                                            <h3>Andale! Sport Event Finder</h3>
                                            <span>
                                                <button className='btn-xs btn-info'>nodeJS</button>
                                                <button className='btn-xs btn-info'>mySQL</button>
                                                <button className='btn-xs btn-info'>handlebarsJS</button>
                                            </span>
                                            <br />
                                            <label>A sport event finder applications that you can RSVP and attend to event based on your gameplay level.</label>
                                            <br /><br />
                                            <label>Screenshots:</label><br />
                                            <a rel="gallery-6" href="img/Andale/thumb1.JPG" className="swipebox" title="User information page where user can edit their personal information and interested sport and level of gameplay">
                                                <img src="img/Andale/thumb1.JPG" alt="image" />
                                            </a>
                                            <a rel="gallery-6" href="img/Andale/thumb2.JPG" className="swipebox" title="User are presented with events based on the interest that user selected. ">
                                                <img src="img/Andale/thumb2.JPG" alt="image" />
                                            </a>
                                            <a rel="gallery-6" href="img/Andale/thumb3.JPG" className="swipebox" title="Event information with attending users, weather prediction, and map location.">
                                                <img src="img/Andale/thumb3.JPG" alt="image" />
                                            </a>
                                            <a rel="gallery-6" href="img/Andale/thumb4.JPG" className="swipebox" title="Attending user can chat with the rest of the attendees.">
                                                <img src="img/Andale/thumb1.JPG" alt="image" />
                                            </a>
                                            <a rel="gallery-6" href="img/Andale/thumb5.JPG" className="swipebox" title="User can create a new event, or check out hosted events.">
                                                <img src="img/Andale/thumb5.JPG" alt="image" />
                                            </a>
                                            <a rel="gallery-6" href="img/Andale/thumb6.JPG" className="swipebox" title="User can create a new event, or check out hosted events.">
                                                <img src="img/Andale/thumb6.JPG" alt="image" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-3 even">
                                        <a className="portfolio-item item10 " target="_blank" href="http://andale-fitness.herokuapp.com/">

                                        </a>
                                    </div>
                                </div>
                                <h4 className="section-title">Games</h4>
                                <div className="row odd">
                                    <div className='col-md-3 odd'>
                                        <a className="portfolio-item item1 " target="_blank" href="https://shikwan.github.io/RPS-Multiplayer/">

                                        </a>
                                    </div>
                                    <div className='col-md-9'>
                                        <div className=" text-left">
                                            <h3>Rock Paper Scissors</h3>
                                            <span><button className='btn-xs btn-info'>firebase</button></span>
                                            <br />
                                            <label>Multiplayer Rock Paper Scissors Game</label>
                                            <br /><br />
                                            <label>Screenshots: </label><br />
                                            <a rel="gallery-7" href="img/RockPaperScissors/thumb1.JPG" className="swipebox" title="After selecting a play, user will have to wait for opponent to make a move.">
                                                <img src="img/RockPaperScissors/thumb1.JPG" alt="image" />
                                            </a>
                                            <a rel="gallery-7" href="img/RockPaperScissors/thumb2.JPG" className="swipebox" title="After both users selected a move, users will be prompt 'win, lose, or ties' notifications and the game reset.">
                                                <img src="img/RockPaperScissors/thumb2.JPG" alt="image" />
                                            </a>
                                            <a rel="gallery-7" href="img/RockPaperScissors/thumb3.JPG" className="swipebox" title="When both users signed up to play, user can choose to play a move.">
                                                <img src="img/RockPaperScissors/thumb3.JPG" alt="image" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className='row even'>
                                    <div className='col-md-9'>
                                        <div className=" text-left">
                                            <h3>Hangman Game</h3>
                                            <span><button className='btn-info btn-xs'>javascript</button></span>
                                            <br />
                                            <label>Final Fantasy themed Hangman Game</label><br /><br />
                                            <label>Screenshots:</label>
                                            <br />
                                            <a rel="gallery-8" href="img/Hangman/thumb1.JPG" className="swipebox" title="Guess the character name by typing letter on keboard, user will be the incorrect guessed letters, and if a letter has been guessed correctly, it will replace the underscore with the correct letter.">
                                                <img src="img/Hangman/thumb1.JPG" alt="image" />
                                            </a>
                                            <a rel="gallery-8" href="img/Hangman/thumb2.JPG" className="swipebox" title="If guessed correctly or exhausted the guessing limit, the application will display character's information.">
                                                <img src="img/Hangman/thumb2.JPG" alt="image" />
                                            </a>
                                            <a rel="gallery-8" href="img/Hangman/thumb3.JPG" className="swipebox" title="If guessed correctly or exhausted the guessing limit, the application will display character's information.">
                                                <img src="img/Hangman/thumb3.JPG" alt="image" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className='col-md-3 even'>
                                        <a className="portfolio-item item2" target="_blank" href="https://shikwan.github.io/hangman-game/">

                                        </a>
                                    </div>
                                </div>
                                <div className='row odd'>
                                    <div className='col-md-3 odd'>
                                        <a className="portfolio-item item3 " target="_blank" href="https://shikwan.github.io/RPG-Game/">

                                        </a>
                                    </div>
                                    <div className='col-md-9'>
                                        <div className=" text-left">
                                            <h3>RPG Game</h3>
                                            <span><button className='btn-xs btn-info'>jQuery</button></span><br />
                                            <label>Pick a hero, and then pick 3 villians to fight against!</label><br /><br />
                                            <label>Screenshots:</label>
                                            <br />
                                            <a rel="gallery-9" href="img/RPG_Game/thumb1.JPG" className="swipebox" title="Select three opponents to fight">
                                                <img src="img/RPG_Game/thumb1.JPG" alt="image" />
                                            </a>
                                            <a rel="gallery-9" href="img/RPG_Game/thumb2.JPG" className="swipebox" title="">
                                                <img src="img/RPG_Game/thumb2.JPG" alt="image" />
                                            </a>
                                            <a rel="gallery-9" href="img/RPG_Game/thumb3.JPG" className="swipebox" title="">
                                                <img src="img/RPG_Game/thumb3.JPG" alt="image" />
                                            </a>
                                            <a rel="gallery-9" href="img/RPG_Game/thumb4.JPG" className="swipebox" title="">
                                                <img src="img/RPG_Game/thumb4.JPG" alt="image" />
                                            </a>
                                            <a rel="gallery-9" href="img/RPG_Game/thumb5.JPG" className="swipebox" title="">
                                                <img src="img/RPG_Game/thumb5.JPG" alt="image" />
                                            </a>
                                            <a rel="gallery-9" href="img/RPG_Game/thumb6.JPG" className="swipebox" title="">
                                                <img src="img/RPG_Game/thumb6.JPG" alt="image" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className='row even'>
                                    <div className='col-md-9'>
                                        <div className="text-left">
                                            <h3>Trivia Game</h3>
                                            <span><button className='btn-info btn-xs'>javascript</button></span>
                                            <br />
                                            <label>Multi-categories Trivia Game</label><br /><br />
                                            <label>Screenshots:</label>
                                            <br />
                                            <a rel="gallery-10" href="img/trivia/thumb1.JPG" className="swipebox" title="">
                                                <img src="img/trivia/thumb1.JPG" alt="image" />
                                            </a>
                                            <a rel="gallery-10" href="img/trivia/thumb2.JPG" className="swipebox" title="">
                                                <img src="img/trivia/thumb2.JPG" alt="image" />
                                            </a>
                                            <a rel="gallery-10" href="img/trivia/thumb3.JPG" className="swipebox" title="">
                                                <img src="img/trivia/thumb1.JPG" alt="image" />
                                            </a>
                                            <a rel="gallery-10" href="img/trivia/thumb4.JPG" className="swipebox" title="">
                                                <img src="img/trivia/thumb4.JPG" alt="image" />
                                            </a>
                                            <a rel="gallery-10" href="img/trivia/thumb5.JPG" className="swipebox" title="">
                                                <img src="img/trivia/thumb1.JPG" alt="image" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className='col-md-3 even'>
                                        <a className="portfolio-item item4 " target="_blank" href="https://shikwan.github.io/TriviaGame/">

                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="contact">
                    <div className="container wow fadeInUp">
                        <div className="row">
                            <div className="col-md-12">
                                <h3 className="section-title">Contact Me</h3>
                                <div className="section-title-divider"></div>
                                <p className="section-description">I can be reach via ..</p>
                            </div>
                            <div className="row">
                                <div className="col-md-3 col-md-push-2">
                                    <div className="info">
                                        <div>
                                            <i className="fa fa-map-marker"></i>
                                            <p>Cleveland, OH 44143</p>
                                        </div>
                                        <div>
                                            <i className="fa fa-envelope"></i>
                                            <p>sk.tan97@gmail.com</p>
                                        </div>
                                        <div>
                                            <i className="fa fa-phone"></i>
                                            <p>+1 859 333 6701</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-5 col-md-push-2">
                                    <div className="form">
                                        <Contact />
                                        <div id="sendmessage">Your message has been sent. Thank you!</div>
                                        <div id="errormessage"></div>
                                        <form action="" method="post" role="form" className="contactForm">
                                            <div className="form-group">
                                                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars"
                                                />
                                                <div className="validation"></div>
                                            </div>
                                            <div className="form-group">
                                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email"
                                                />
                                                <div className="validation"></div>
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject"
                                                />
                                                <div className="validation"></div>
                                            </div>
                                            <div className="form-group">
                                                <textarea className="form-control" name="message" id='message' rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                                                <div className="validation"></div>
                                            </div>
                                            <div className="text-center">
                                                <button id='cmdSend' type="submit">Send Message</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <footer id="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="copyright"> &copy; Copyright <strong>Shi-Kwan, Tan</strong>. All Rights Reserved</div>
                            </div>
                        </div>
                    </div>
                </footer>
                <a href="#" className="back-to-top">
                    <i className="fa fa-chevron-up"></i>
                </a>
            </div>
        );
    }
};

const sk_portrait = require('../../img/sk.jpg');
export default Home;