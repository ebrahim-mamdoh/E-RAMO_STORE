import React from 'react'

// import swiper 
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper and SwiperSlide components
import 'swiper/css';              // Import core Swiper CSS
import 'swiper/css/navigation';   // Import Swiper's Navigation module CSS
import 'swiper/css/pagination';   // Import Swiper's Pagination module CSS
import { Navigation, Pagination } from 'swiper/modules'; // Import Swiper's Navigation and Pagination modules


// import img 
import mainimg from '../../assets/pestSale/pestSale.jpg';
import img1 from '../../assets/pestSale/secondSlider1.jpg';
import img3 from '../../assets/pestSale/secondSlider2.jpg';
import img2 from '../../assets/pestSale/secondSlider3.jpg';
import img4 from '../../assets/pestSale/secondSlider4.jpg';
import img5 from '../../assets/pestSale/secondSlider5.jpg';


// style file
import './PestSale.css'

export default function PestSale() {
    return (
        <>
            <div className="bestSale">

                <div className="container ">
                    <h2> Pest Selling products</h2>

                    <div className="row">

                        <div className="col-md-3 pg-main mainPic">
                            <img src={mainimg} alt="" />

                        </div>

                        <div className="col-md-9  slider2">
                            <div className="row">
                                <div className="carousel-container">
                                    <Swiper
                                        slidesPerView={3}     // Display 3 images per slide
                                        // spaceBetween={20}  // Space between images
                                        // navigation         // Enable navigation arrows
                                        // pagination={{ clickable: true }}  // Enable pagination
                                        modules={[Navigation, Pagination]} // Use navigation and pagination modules
                                    >
                                        <SwiperSlide>
                                            <img src={img1} alt="Image 1" />
                                            <div className="inlineDetails">
                                                <h4>500 جنيه</h4>
                                                <h6>apple watch</h6>

                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={img2} alt="Image 2" />
                                            <div className="inlineDetails">
                                                <h4>32 جنيه</h4>
                                                <h6>apple watch</h6>

                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={img3} alt="Image 3" />
                                            <div className="inlineDetails">
                                                <h4>15 جنيه</h4>
                                                <h6>apple watch</h6>

                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={img4} alt="Image 4" />
                                            <div className="inlineDetails">
                                                <h4>999 جنيه</h4>
                                                <h6>apple watch</h6>

                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={img5} alt="Image 5" />
                                            <div className="inlineDetails">
                                                <h4>500 جنيه</h4>
                                                <h6>apple watch</h6>

                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
