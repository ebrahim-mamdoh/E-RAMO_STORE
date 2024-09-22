import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper and SwiperSlide components
import 'swiper/css';              // Import core Swiper CSS
import 'swiper/css/navigation';   // Import Swiper's Navigation module CSS
import 'swiper/css/pagination';   // Import Swiper's Pagination module CSS
import { Navigation, Pagination } from 'swiper/modules';


import imag1 from '../../assets/clothing/4.jpg'
import imag2 from  '../../assets/clothing/5.jpg'
import imag3 from '../../assets/clothing/6.jpg'
import imag4 from '../../assets/clothing/10.jpg'
import imag5 from  '../../assets/clothing/11.jpg'
import imag6 from '../../assets/clothing/12.jpg'
import imag7 from '../../assets/clothing/13.jpg'
import imag8 from  '../../assets/clothing/1.jpg'
import imag9 from  '../../assets/clothing/14.jpg'
import imag10 from '../../assets/clothing/2.png'
import imag11 from '../../assets/clothing/8.jpg'



import  './Clothing.css'






// Sample product data (can be replaced with dynamic data from an API or database)
const products = [
    {
        img: require('../../assets/secondcaCousel/1.jpg'),
        title: 'A Gentleman In Moscow',
        category: 'Dresses',
        discount: '96%',
        price: '300 EGP',
        oldPrice: '7000 EGP',
    },
    {
        img: require('../../assets/secondcaCousel/2.jpg'),
        title: 'Bee Honey',
        category: 'Dresses',
        discount: '99%',
        price: '55 EGP',
        oldPrice: '7000 EGP',
    },
    {
        img: require('../../assets/secondcaCousel/3.jpg'),
        title: 'Conversation With Friends',
        category: 'Dresses',
        discount: '96%',
        price: '250 EGP',
        oldPrice: '7000 EGP',
    },
    {
        img: require('../../assets/secondcaCousel/4.jpg'),
        title: 'Verity BY Colleen Hoover',
        category: 'Dresses',
        discount: '97%',
        price: '207 EGP',
        oldPrice: '7000 EGP',
    },
    {
        img: require('../../assets/secondcaCousel/5.jpg'),
        title: 'Six Of Crows Series',
        category: 'Dresses',
        discount: '96%',
        price: '250 EGP',
        oldPrice: '7000 EGP',
    },
    {
        img: require('../../assets/secondcaCousel/6.jpg'),
        title: 'Dress',
        category: 'Dresses',
        discount: '',
        price: '350 EGP',
        oldPrice: '',
    },
    {
        img: require('../../assets/secondcaCousel/7.jpg'),
        title: 'Summer Dress',
        category: 'Dresses',
        discount: '',
        price: '400 EGP',
        oldPrice: '',
        
    },
    {
        img: require('../../assets/secondcaCousel/1.jpg'),
        title: 'A Gentleman In Moscow',
        category: 'Dresses',
        discount: '96%',
        price: '300 EGP',
        oldPrice: '7000 EGP',
    },
    {
        img: require('../../assets/secondcaCousel/2.jpg'),
        title: 'Bee Honey',
        category: 'Dresses',
        discount: '99%',
        price: '55 EGP',
        oldPrice: '7000 EGP',
    },
    {
        img: require('../../assets/secondcaCousel/3.jpg'),
        title: 'Conversation With Friends',
        category: 'Dresses',
        discount: '96%',
        price: '250 EGP',
        oldPrice: '7000 EGP',
    },
    {
        img: require('../../assets/secondcaCousel/4.jpg'),
        title: 'Verity BY Colleen Hoover',
        category: 'Dresses',
        discount: '97%',
        price: '207 EGP',
        oldPrice: '7000 EGP',
    },
    // Add more products as needed
];

export default function Clothing() {
  const  BagsImgs=[imag1,imag2,imag3,imag4 ,imag5,imag6,imag7,imag8,imag9,imag10,imag11]
    return (<>
        <div className="container">
            <div className="product-slider">
                <h2>Clothing</h2>
                <p>-Dresses -Skirts -Western Wear -Sport Wear -Men Shirt -Pants</p>
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

        <div className="container">
            <div className="product-slider">
                <h2>Bags</h2>
                <p>-women bags -hand bags </p>
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
                                <img src={BagsImgs[index]} alt={product.title} className="product-image" />
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
