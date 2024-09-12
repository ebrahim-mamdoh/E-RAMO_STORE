import logo from '../../assets/logo.png'
import imageSlider1 from '../../assets/slider1.jpg'
import imageSlider2 from '../../assets/slider2.jpg'
import imageSlider3 from '../../assets/slider3.jpg'
// import { Carousel } from 'primereact/carousel';

import React from 'react'
import './Header.css'
import PestSale from '../PestSale/PestSale';
import SecondSlider from '../SecondSlider/secondSlider';

export default function Header() {
    return (
        <>
          <div className="header-container">
            <div className="welcome-message">
                <p>Welcome to Our Store</p>
            </div>
            <div className="account-icons">
                <div className="icon-group">
                <i class="fa-solid fa-heart"></i>
                <span className="icon-count">0</span>
                </div>

                <div className="icon-group">
                <i class="fa-solid fa-rotate"></i>
                <span className="icon-count">0</span>
                </div>

                <div className="my-account">
                <i class="fa-solid fa-user"></i>
                <span className="account-text">My Account</span>
                </div>

            </div>
        </div>
  


            {/* navbar*/}   
    
            <nav class="my-nav navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                       <div className="Delivery">
                        <h6>Delivery to</h6> 
                       <i class="fa-solid fa-truck-fast"></i>
                        </div> 
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                categories
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a class="dropdown-item" href="#">Clothing</a></li>
                                    <li><a class="dropdown-item" href="#">Bags</a></li>
                                    <li><a class="dropdown-item" href="#">Watches</a></li>
                                    <li><a class="dropdown-item" href="#">Shose</a></li>
                                    <li><a class="dropdown-item" href="#">Perfumes</a></li>
                                    <li><a class="dropdown-item" href="#">Mackup</a></li>
                                    <li><a class="dropdown-item" href="#">About Store</a></li>
                                    <li><a class="dropdown-item" href="#">Books</a></li>
                                    <li><a class="dropdown-item" href="#">Supermarket</a></li>
                                    <li><a class="dropdown-item" href="#">Blogs</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Features</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Pricing</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Pricing</a>
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
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={imageSlider1} className="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                    <img src={imageSlider2} className="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={imageSlider3} class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            {/* end carousel */}

            {/* <SecondSlider/> */}
            <div className="container">
            <SecondSlider/>

            </div>

            {/* pest sale  */}














        </>
    )
}
