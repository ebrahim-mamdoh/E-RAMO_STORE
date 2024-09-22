import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper and SwiperSlide components
import 'swiper/css';              // Import core Swiper CSS
import 'swiper/css/navigation';   // Import Swiper's Navigation module CSS
import 'swiper/css/pagination';   // Import Swiper's Pagination module CSS
import { Navigation, Pagination } from 'swiper/modules';


// import images 
// import img1 from '../../assets/secondcaCousel/1.jpg';
// import img2 from '../../assets/secondcaCousel/2.jpg';
// import img3 from '../../assets/secondcaCousel/3.jpg';
// import img4 from '../../assets/secondcaCousel/4.jpg';
// import img5 from '../../assets/secondcaCousel/5.jpg';
// import img6 from '../../assets/secondcaCousel/6.jpg';
// import img7 from '../../assets/secondcaCousel/7.jpg';
import './Clothing.css'






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
    </>


    );

}
