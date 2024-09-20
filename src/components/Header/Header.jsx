import logo from '../../assets/logo.png'
import imageSlider1 from '../../assets/slider1.jpg'
import imageSlider2 from '../../assets/slider2.jpg'
import imageSlider3 from '../../assets/slider3.jpg'
// import { Carousel } from 'primereact/carousel';

import React from 'react'
import './Header.css'
import PestSale from '../PestSale/PestSale';
import SecondSlider from '../SecondSlider/secondSlider';
import OurProductSlider from '../OurProductSlider/OurProductSlider'
export default function Header() {
    return (
        <>
            <div className="header-container">
                <div className="welcome-message">
                    <p>Welcome to Our Store</p>
                </div>
                <div className="account-icons">
                    <div className="icon-group">
                        <i className="fa-solid fa-heart"></i>
                        <span className="icon-count">0</span>
                    </div>

                    <div className="icon-group">
                        <i className="fa-solid fa-rotate"></i>
                        <span className="icon-count">0</span>
                    </div>

                    <div className="my-account">
                        <i className="fa-solid fa-user"></i>
                        <span className="account-text">My Account</span>
                    </div>

                </div>
            </div>



            {/* navbar*/}

            <nav className="my-nav navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <div className="Delivery">
                            <h6>Delivery to</h6>
                            <i className="fa-solid fa-truck-fast"></i>
                        </div>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    categories
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item" href="#">Clothing</a></li>
                                    <li><a className="dropdown-item" href="#">Bags</a></li>
                                    <li><a className="dropdown-item" href="#">Watches</a></li>
                                    <li><a className="dropdown-item" href="#">Shose</a></li>
                                    <li><a className="dropdown-item" href="#">Perfumes</a></li>
                                    <li><a className="dropdown-item" href="#">Mackup</a></li>
                                    <li><a className="dropdown-item" href="#">About Store</a></li>
                                    <li><a className="dropdown-item" href="#">Books</a></li>
                                    <li><a className="dropdown-item" href="#">Supermarket</a></li>
                                    <li><a className="dropdown-item" href="#">Blogs</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>

                        </ul>
                    </div>

                    <div className="cal">
                        Call us: 01011559674
                    </div>
                </div>
            </nav>

            {/* END NAV */}


            {/* carousel */}
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={imageSlider1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={imageSlider2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={imageSlider3} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            {/* end carousel */}


            {/* <SecondSlider/> */}

            <div className="secondSlider">
                <OurProductSlider/>

            </div>
















        </>
    )
}
