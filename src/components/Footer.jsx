import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
    return (
        <div>
            <footer className="footer bg-yellow">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-4 mt-4 col-lg-3 text-center text-sm-start">
                            <div className="information">
                                <h6 className="footer-heading text-uppercase text-white fw-bold">Information</h6>
                                <ul className="list-unstyled footer-link mt-4">
                                    <li className="mb-1">
                                        <Link to="" className="text-white text-decoration-none fw-semibold">Events</Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link to="" className="text-white text-decoration-none fw-semibold">Our Team</Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link to="" className="text-white text-decoration-none fw-semibold">Upcoming Sale</Link>
                                    </li>
                                    <li className="">
                                        <Link to="" className="text-white text-decoration-none fw-semibold">New Launches</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 mt-4 col-lg-3 text-center text-sm-start">
                            <div className="resources">
                                <h6 className="footer-heading text-uppercase text-white fw-bold">Resources</h6>
                                <ul className="list-unstyled footer-link mt-4">
                                    <li className="mb-1">
                                        <Link className="text-white text-decoration-none fw-semibold">API</Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link className="text-white text-decoration-none fw-semibold">Website Tutorials</Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link className="text-white text-decoration-none fw-semibold">Third Party</Link>
                                    </li>
                                    <li className="">
                                        <Link className="text-white text-decoration-none fw-semibold">Video Lectures</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 mt-4 col-lg-2 text-center text-sm-start">
                            <div className="social">
                                <h6 className="footer-heading text-uppercase text-white fw-bold">Social</h6>
                                <ul className="list-inline my-4">
                                    <li className="list-inline-item">
                                        <Link className="text-white btn-sm btn btn-primary mb-2">
                                            <i className="bi bi-facebook"></i>
                                        </Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link className="text-danger btn-sm btn btn-light mb-2">
                                            <i className="bi bi-instagram"></i>
                                        </Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link className="text-white btn-sm btn btn-primary mb-2">
                                            <i className="bi bi-twitter"></i>
                                        </Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link className="text-white btn-sm btn btn-success mb-2">
                                            <i className="bi bi-whatsapp"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 mt-4 col-lg-4 text-center text-sm-start">
                            <div className="contact">
                                <h6 className="footer-heading text-uppercase text-white fw-bold">Contact Us</h6>
                                <address className="mt-4 m-0 text-white mb-1">
                                    <i className="bi bi-pin-map fw-semibold"></i> kharachi nazimabd no 1
                                </address>
                                <a href="tel:+03400223624" className="text-white mb-1 text-decoration-none d-block fw-semibold">
                                    <i className="bi bi-telephone"></i> 03400223624
                                </a>
                                <a href="mailto:ibadkhan@gmail.com" className="text-white mb-1 text-decoration-none d-block fw-semibold">
                                    <i className="bi bi-envelope"></i> ibadkhan@gmail.com
                                </a>
                                <Link to="" className="text-white text-decoration-none fw-semibold">
                                    <i className="bi bi-skype"></i> ibaddemomail
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center bg-dark text-white mt-4 p-1">
                    <p className="mb-0 fw-bold">2024 © ibad khilji, All Rights Reserved</p>
                </div>
            </footer>
        </div>
    )
}

