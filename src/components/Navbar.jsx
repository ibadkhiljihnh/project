/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom';
import Image from './assets/Untitled-1.png';


export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-yellow px-0 py-3">
                <div className="container-xl">
                    <Link
                        className="navbar-brand"
                        to="/main"
                    >
                        <img src={Image} alt="" />
                    </Link>
                    <button
                        aria-controls="navbarCollapse"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        className="navbar-toggler"
                        data-bs-target="#navbarCollapse"
                        data-bs-toggle="collapse"
                        type="button"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarCollapse"
                    >
                        <div className="navbar-nav mx-lg-auto">
                            <Link
                                aria-current="page"
                                className="nav-item nav-link active"
                                to="/home"
                            >
                                Home
                            </Link>
                            <Link
                                className="nav-item nav-link"
                                to="/product"
                            >
                                Product
                            </Link>
                            <Link
                                className="nav-item nav-link"
                                to="/feature"
                            >
                                Features
                            </Link>
                            <Link
                                className="nav-item nav-link"
                                to="/pricing"
                            >
                                About
                            </Link>
                        </div>
                        <div className="navbar-nav ms-lg-4">
                            <Link
                                className="nav-item nav-link"
                                to="/sign"
                            >
                                Sign in
                            </Link>
                        </div>
                        <div className="d-flex align-items-lg-center mt-3 mt-lg-0">
                            <Link
                                className="btn btn-sm btn-primary w-full w-lg-auto"
                                to="/restraction"
                            >
                                Register
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
