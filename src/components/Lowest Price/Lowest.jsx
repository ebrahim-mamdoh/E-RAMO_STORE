import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper and SwiperSlide components
import 'swiper/css';              // Import core Swiper CSS
import 'swiper/css/navigation';   // Import Swiper's Navigation module CSS
import 'swiper/css/pagination';   // Import Swiper's Pagination module CSS
import { Navigation, Pagination } from 'swiper/modules';


// Sample product data (can be replaced with dynamic data from an API or database)

import './Lowesr.css'

const products = [
    {
        img: require('../../assets/Lowest Price/1.jpg'),
        title: 'sweet corn ',
        category: 'Dresses',
        discount: '96%',
        price: '300 EGP',
        oldPrice: '7000 EGP',
    },
    {
        img: require('../../assets/Lowest Price/2.jpg'),
        title: 'flour',
        category: 'Dresses',
        discount: '99%',
        price: '55 EGP',
        oldPrice: '7000 EGP',
    },
    {
        img: require('../../assets/Lowest Price/3.jpg'),
        title: 'food oil',
        category: 'Dresses',
        discount: '96%',
        price: '250 EGP',
        oldPrice: '7000 EGP',
    },
    {
        img: require('../../assets/Lowest Price/4.jpg'),
        title: 'tuna',
        category: 'Dresses',
        discount: '97%',
        price: '207 EGP',
        oldPrice: '7000 EGP',
    },
    {
        img: require('../../assets/Lowest Price/5.jpg'),
        title: 'Bee honey',
        category: 'Dresses',
        discount: '96%',
        price: '250 EGP',
        oldPrice: '7000 EGP',
    },
    {
        img: require('../../assets/Lowest Price/6.jpg'),
        title: 'Dry food',
        category: 'milk broduct',
        discount: '',
        price: '350 EGP',
        oldPrice: '',
    },
   
    // Add more products as needed
];


export default function Lowest() {
    return (<>
        <div className="container">
            <div className="product-slider">
                <h2>Lowest Price</h2>
                <Swiper
                    slidesPerView={'auto'}  // Adjust slides based on screen width
                    spaceBetween={10}       // Space between items
                    // navigation              // Enable navigation arrows
                    breakpoints={{
                        640: {              // For screens larger than 640px
                            slidesPerView: 7,  // Show 7 items
                            spaceBetween: 10,
                        },
                    }}
                    modules={[Navigation]}  // Use the Navigation module
                >
                    {products.map((product, index) => (
                        <SwiperSlide key={index} style={{ minWidth: '117px' }}>
                            <div className="product-card">
                                {product.discount && (
                                    <div className="discount-tag">{product.discount}</div>
                                )}
                                <img src={product.img} alt={product.title} className="product-image" />
                                <div className="product-info">
                                    <h3 className="product-title">{product.title}</h3>
                                    <p className="product-category">{product.category}</p>
                                    <div className="product-pricing">
                                        <span className="current-price">{product.price}</span>
                                        {product.oldPrice && (
                                            <span className="old-price">{product.oldPrice}</span>
                                        )}
                                    </div>
                                </div>
                                <button className="add-to-cart-btn">+</button>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>

        
    </>


    );
}
