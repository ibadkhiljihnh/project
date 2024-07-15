/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import image from './assets/Dell_Optiplex_9020_Desktop_Computer-removebg-preview.png';
import image1 from './assets/As preocupações de Tim Berners-Lee sobre o futuro da web – Tecnoblog.jpg';
import image2 from './assets/22 Years Later, The Linux And Open Source _Cancer_ Is Wonderfully Benign.jpg';
import image3 from './assets/Alan Turing - Wikipedia.jpg';
import image11 from './assets/jessi.jpg';
import image12 from './assets/images2.jpg';
import image13 from './assets/images3.jpg';
import image19 from './assets/ig15erikmarinovich9.webp';
import image14 from './assets/images4.jpg';
import image15 from './assets/images5.jpg';
import image16 from './assets/Paul_rand_loc 6.jpg';
import image17 from './assets/images 7.jpg';
import image18 from './assets/licensed-image8.jpg';

export default function Main() {
    return (
      <>
        <div className="hero-container" id="hero-sec">
            <div className="container-fluid">
                <div className="row d-flex align-items-center">
                    <div className="col-12 col-md-6 text-center text-md-start">
                        <img src={image} className="img-fluid" alt="..." />
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="px-2 py-2 align-middle">
                            <h2>What is a computer?</h2>
                            <p>A computer is an electronic device that manipulates information, or data. It has the ability to store, retrieve, and process data. You may already know that you can use a computer to type documents, send email, play games, and browse the Web.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Card container */}
            <div className="card-container bg-yellow" id="team">
                <div className="container-fluid px-3 py-3">
                    <div className="row text-center mx-4 my-4 text-white">
                        <h2>Meet Our Expert</h2>
                        <p>Highly professional team</p>
                    </div>
                    <div className="row">
                        {[
                            { img: image1, name: "Tim Berners-Lee", desc: "Sir Timothy John Berners-Lee OM KBE FRS RDI FRSA DFBCS FREng, also known as TimBL, is an English computer scientist best known as the inventor of the World." },
                            { img: image2, name: "Alan Turing", desc: "Alan Mathison Turing OBE FRS was an English mathematician, computer scientist, logician, cryptanalyst, philosopher and theoretical biologist." },
                            { img: image3, name: "Linus Torvalds", desc: "Linus Benedict Torvalds is a Finnish-American software engineer who is the creator and lead developer of the Linux kernel. He also created the distributed." },
                        ].map((person, index) => (
                            <div className="col-12 col-md-4 mb-4" key={index}>
                                <div className="card">
                                    <img src={person.img} className="card-img-top imagedd" style={{ height: "300px" }} alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{person.name}</h5>
                                        <p className="card-text">{person.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Testimonials container */}
            <div className="testimonials-container mt-4 mb-4" id="testi">
                <div className="container-fluid">
                    <div className="row text-center mx-4 my-4">
                        <h2>What People Say</h2>
                        <p>Read our Testimonials</p>
                    </div>
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            {[[
                                { img: image11, name: "Jessica Walsh", desc: "Jessica Walsh is an American designer, art director, illustrator and educator. She was a partner of the design studio Sagmeister & Walsh, and the founder of the creative." },
                                { img: image12, name: "Stefan Sagmeister", desc: "Stefan Sagmeister is an Austrian graphic designer, storyteller, and typographer based in New York City. In 1993, Sagmeister founded his company, Sagmeister Inc." },
                                { img: image13, name: "Milton Glaser", desc: "Milton Glaser was an American graphic designer, recognized for his designs, including the I Love New York logo; a 1966 poster for Bob Dylan; the logos for DC Comics." }
                            ], [
                                { img: image14, name: "Alan Fletcher", desc: "Alan Gerard Fletcher was a British graphic designer. In his obituary, he was described by The Daily Telegraph as 'the most highly regarded graphic designer of his generation,'." },
                                { img: image15, name: "Massimo Vignelli", desc: "Massimo Vignelli was an Italian designer who worked in a number of areas including packaging, houseware, furniture, public signage, and showroom design." },
                                { img: image16, name: "Paul Rand", desc: "Paul Rand was an American art director and graphic designer. He was best known for his corporate logo designs, including the logos for IBM, UPS, Enron, Morningstar." }
                            ], [
                                { img: image17, name: "Aries Moross", desc: "Aries Moross is an English graphic designer, artist, illustrator and art director based in London. They mostly focus on lettering and typography in their works of art." },
                                { img: image18, name: "David Carson", desc: "David Carson is considered to be the rule-breaker of graphic design and the father of so-called 'grunge typography'. Widely respected for his works." },
                                { img: image19, name: "Erik Spiekermann", desc: "Erik Spiekermann has enjoyed a distinguished career as both a famous graphic designer and typographer. He's best known for designing." }
                            ]].map((group, index) => (
                                <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                                    <div className="card-group">
                                        {group.map((person, idx) => (
                                            <div className="card" key={idx}>
                                                <img src={person.img} className="card-img-top imagedd" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">{person.name}</h5>
                                                    <p className="card-text">{person.desc}</p>
                                                </div>
                                                <div className="card-footer">
                                                    <small className="text-muted">Last updated 3 mins ago</small>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Banner container */}
            <div className="banner-container mt-5 mb-5" id="featured">
                <div className="container-fluid px-4 py-4">
                    <div className="card bg-yellow text-white shadow-lg">
                        <h5 className="card-header">Featured Courses</h5>
                        <div className="card-body">
                            <h5 className="card-title">Special Teachers for Students</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <div className="container">
                                <div className="row d-flex justify-content-around">
                                    {[
                                        { title: "Web Development", subtitle: "Front End + Backend", desc: "Some quick example text to build on the card title and make up the bulk of the card's content." },
                                        { title: "UI/UX Design", subtitle: "User Interface", desc: "Some quick example text to build on the card title and make up the bulk of the card's content." },
                                        { title: "WordPress Development", subtitle: "Custom Themes", desc: "Some quick example text to build on the card title and make up the bulk of the card's content." },
                                        { title: "Ethical Hacking", subtitle: "System Security", desc: "Some quick example text to build on the card title and make up the bulk of the card's content." }
                                    ].map((course, index) => (
                                        <div className="col-12 col-md-3 mb-4" key={index}>
                                            <div className="card bg-yellow text-white border-light shadow-lg">
                                                <div className="card-body">
                                                    <h5 className="card-title">{course.title}</h5>
                                                    <h6 className="card-subtitle mb-2 text-muted">{course.subtitle}</h6>
                                                    <p className="card-text">{course.desc}</p>
                                                    <a href="#" className="card-link">Card link</a>
                                                    <a href="#" className="card-link">Another link</a>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="card-footer text-muted">
                            Updated 5 minutes ago
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </>
    );
}
