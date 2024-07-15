/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import image from './assets/Dell Optiplex 9020 Desktop Computer.jpg'
import image1 from './assets/As preocupações de Tim Berners-Lee sobre o futuro da web – Tecnoblog.jpg'
import image2 from './assets/22 Years Later, The Linux And Open Source _Cancer_ Is Wonderfully Benign.jpg'
import image3 from './assets/Alan Turing - Wikipedia.jpg'

import image11 from './assets/jessi.jpg'
import image12 from './assets/images2.jpg'
import image13 from './assets/images3.jpg'
import image19 from './assets/ig15erikmarinovich9.webp'
import image14 from './assets/images4.jpg'
import image15 from './assets/images5.jpg'
import image16 from './assets/Paul_rand_loc 6.jpg'
import image17 from './assets/images 7.jpg'
import image18 from './assets/licensed-image8.jpg'
export default function Main() {
    return (

        <div className="hero-container" id="hero-sec">
            <div className="container-fluid ">
                <div className="row d-flex">
                    <div className="col align-middle">
                        <div className="px-2 py-2">
                            <img src={image} className="img-fluid" alt="..." />
                        </div>
                    </div>
                    <div className="col khan" >
                        <div className="px-5 py-5 mt-5">
                            <div className="px-2 py-2 align-middle">
                                <h2>what is computer?</h2>
                                <p>A computer is an electronic device that manipulates information, or data. It has the ability to store, retrieve, and process data. You may already know that you can use a computer to type documents, send email, play games, and browse the Web.</p>
                            </div>
                         
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- main container --> */}
            <div className="main-container">
                <div className="container-fluid">

                </div>
            </div>

            {/* <!--  Card container  --> */}
            <div className="card-container bg-yellow" id="team">
                <div className="container-fluid px-3 py-3">
                    <div className="row center mx-4 my-4 text-white">
                        <h2>Meet Our Expert</h2>
                        <p>Highly professional team</p>
                    </div>
                    <div className="row mb-5">
                        <div className="col">
                            <div className="card" >
                                <img src={image1} className="card-img-top imagedd"  style={{ height: "300px" }} alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Tim Berners-Lee</h5>
                                    <p className="card-text">Sir Timothy John Berners-Lee OM KBE FRS RDI FRSA DFBCS FREng, also known as TimBL, is an English computer scientist best known as the inventor of the World</p>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card" >
                                <img src={image2} className="card-img-top imagedd"  style={{ height: "300px" }} alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Alan Turing </h5>
                                    <p className="card-text ">Alan Mathison Turing OBE FRS was an English mathematician, computer scientist, logician, cryptanalyst, philosopher and theoretical biologist.</p>
                            
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card" >
                                <img src={image3} className="card-img-top imagedd"  style={{ height: "300px" }} alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Linus Torvalds</h5>
                                    <p className="card-text">Linus Benedict Torvalds is a Finnish-American software engineer who is the creator and lead developer of the Linux kernel. He also created the distributed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* <!--  testimonals container  --> */}
            <div className="testimonals-container mt-4 mb-4" id="testi">
                <div className="container-fluid">
                    <div className="row center mx-4 my-4">
                        <h2>What Peoples Say </h2>
                        <p>Read our Testimonals</p>
                    </div>
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                {/* <!--       <img src="..." className="d-block w-100" alt="..."> --> */}
                                <div className="card-group">
                                    <div className="card">
                                        <img src={image11} className="card-img-top imagedd" alt="..."/>
                              <div className="card-body">
                                            <h5 className="card-title">Jessica Walsh</h5>
                                            <p className="card-text">Jessica Walsh is an American designer, art director, illustrator and educator. She was a partner of the design studio Sagmeister & Walsh, and the founder of the creative</p>
                                        </div>
                                        <div className="card-footer">
                                            <small className="text-muted">Last updated 3 mins ago</small>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <img src={image12} className="card-img-top imagedd"  alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">Stefan Sagmeister</h5>
                                            <p className="card-text">Stefan Sagmeister is an Austrian graphic designer, storyteller, and typographer based in New York City. In 1993, Sagmeister founded his company, Sagmeister Inc.</p>
                                        </div>
                                        <div className="card-footer">
                                            <small className="text-muted">Last updated 3 mins ago</small>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <img src={image13} className="card-img-top imagedd"  alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">Milton Glaser</h5>
                                            <p className="card-text">Milton Glaser was an American graphic designer, recognized for his designs, including the I Love New York logo; a 1966 poster for Bob Dylan; the logos for DC Comics</p>
                                        </div>
                                        <div className="card-footer">
                                            <small className="text-muted">Last updated 3 mins ago</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                {/* <!--       <img src="..." className="d-block w-100" alt="..."> --> */}
                                <div className="card-group">
                                    <div className="card">
                                        <img src={image14} className="card-img-top imagedd"  alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">Alan Fletcher</h5>
                                            <p className="card-text">Alan Gerard Fletcher was a British graphic designer. In his obituary, he was described by The Daily Telegraph as "the most highly regarded graphic designer of his generation,</p>
                                        </div>
                                        <div className="card-footer">
                                            <small className="text-muted">Last updated 3 mins ago</small>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <img src={image15} className="card-img-top imagedd"  alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">Massimo Vignelli</h5>
                                            <p className="card-text">Massimo Vignelli was an Italian designer who worked in a number of areas including packaging, houseware, furniture, public signage, and showroom design.</p>
                                        </div>
                                        <div className="card-footer">
                                            <small className="text-muted">Last updated 3 mins ago</small>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <img src={image16} className="card-img-top imagedd"  alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">Paul Rand</h5>
                                            <p className="card-text">Paul Rand was an American art director and graphic designer. He was best known for his corporate logo designs, including the logos for IBM, UPS, Enron, Morningstar</p>
                                        </div>
                                        <div className="card-footer">
                                            <small className="text-muted">Last updated 3 mins ago</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                {/* <!--       <img src="..." className="d-block w-100" alt="..."> --> */}
                                <div className="card-group">
                                    <div className="card">
                                        <img src={image17} className="card-img-top imagedd"  alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">Aries Moross</h5>
                                            <p className="card-text">Aries Moross is an English graphic designer, artist, illustrator and art director based in London. They mostly focus on lettering and typography in their works of art.</p>
                                        </div>
                                        <div className="card-footer">
                                            <small className="text-muted">Last updated 3 mins ago</small>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <img src={image18} className="card-img-top imagedd"  alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">David Carson                                            </h5>
                                            <p className="card-text">David Carson is considered to be the rule-breaker of graphic design and the father of so-called “grunge typography”. Widely respected for his works</p>
                                        </div>
                                        <div className="card-footer">
                                            <small className="text-muted">Last updated 3 mins ago</small>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <img src={image19} className="card-img-top imagedd"  alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">Erik Spiekermann</h5>
                                            <p className="card-text">Erik Spiekermann has enjoyed a distinguished career as both a famous graphic designer and typographer. He's best known for designing</p>
                                        </div>
                                        <div className="card-footer">
                                            <small className="text-muted">Last updated 3 mins ago</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
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

            {/* <!-- overlay box -->
<!--   <div className="mt-5 mx-1">
  <div className="card bg-black text-white ">
  <div className="card-body px-4 py-4">
    
    </div>
   </div>
  </div> -->
   */}
            {/* <!--  banner container  --> */}
            <div className="banner-container mt-5 mb-5" id="featured">
                <div className="container-fluid px-4 py-4">
                    <div className="card bg-yellow text-white shadow-lg ">
                        <h5 className="card-header">Featured Courses</h5>
                        <div className="card-body">
                            <h5 className="card-title">Special Teachers for Students</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            {/* <a href="#" className="btn org-btn center">Learn More</a> --> */}
                            <div className="conatiner">
                                <div className="row d-flex justify-content-around">
                                    <div className="col">
                                        <div className="card text-black move-up mb-3" >
                                            <div className="card-header">Web Development</div>
                                            <div className="card-body">
                                                <h5 className="card-title">Front End + Backend</h5>
                                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                {/* <!--     <a href="#" className="btn btn-outline-primary center">View our curriculum</a> --> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card text-black move-up mb-3" >
                                            <div className="card-header">Web3.0</div>
                                            <div className="card-body">
                                                <h5 className="card-title">Web3 and Tools</h5>
                                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card text-black move-up mb-3" >
                                            <div className="card-header">Java MasterclassName</div>
                                            <div className="card-body">
                                                <h5 className="card-title">Begineer Course</h5>
                                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card text-black move-up mb-3" >
                                            <div className="card-header">Python </div>
                                            <div className="card-body">
                                                <h5 className="card-title">Python AI</h5>
                                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            </div>
                                        </div>
                                    </div>



                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
