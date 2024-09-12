// Import required modules and components
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper and SwiperSlide components
import 'swiper/css';              // Import core Swiper CSS
import 'swiper/css/navigation';   // Import Swiper's Navigation module CSS
import 'swiper/css/pagination';   // Import Swiper's Pagination module CSS
import { Navigation, Pagination } from 'swiper/modules'; // Import Swiper's Navigation and Pagination modules
import './secondSlider.css'
// Import images
import img1 from '../../assets/secondcaCousel/1.jpg';
import img2 from '../../assets/secondcaCousel/2.jpg';
import img3 from '../../assets/secondcaCousel/3.jpg';
import img4 from '../../assets/secondcaCousel/4.jpg';
import img5 from '../../assets/secondcaCousel/5.jpg';
import img6 from '../../assets/secondcaCousel/6.jpg';
import img7 from '../../assets/secondcaCousel/7.jpg';

export default function SecondSlider() {
    // useState for active slide index
    // const [activeIndex, setActiveIndex] = useState(1);

    return (
        <div className="image-slider">
            <Swiper
                slidesPerView={7}  // Show 7 images per slide
                spaceBetween={10}   // Space between images
                navigation          // Enable navigation arrows
                pagination={{ clickable: true }}  // Enable pagination dots
                modules={[Navigation, Pagination]} // Specify the modules being used
                // onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} // Update active slide index
            >
                <SwiperSlide><img src={img1} alt="Image 1" /></SwiperSlide>
                <SwiperSlide><img src={img2} alt="Image 2" /></SwiperSlide>
                <SwiperSlide><img src={img3} alt="Image 3" /></SwiperSlide>
                <SwiperSlide><img src={img4} alt="Image 4" /></SwiperSlide>
                <SwiperSlide><img src={img5} alt="Image 5" /></SwiperSlide>
                <SwiperSlide><img src={img6} alt="Image 6" /></SwiperSlide>
                <SwiperSlide><img src={img7} alt="Image 7" /></SwiperSlide>
                <SwiperSlide><img src={img1} alt="Image 8" /></SwiperSlide>
                <SwiperSlide><img src={img2} alt="Image 9" /></SwiperSlide>
                <SwiperSlide><img src={img3} alt="Image 3" /></SwiperSlide>
                <SwiperSlide><img src={img4} alt="Image 4" /></SwiperSlide>
                <SwiperSlide><img src={img5} alt="Image 5" /></SwiperSlide>
                <SwiperSlide><img src={img6} alt="Image 6" /></SwiperSlide>
                <SwiperSlide><img src={img7} alt="Image 7" /></SwiperSlide>
            </Swiper>
            {/* <p>Current Slide: {activeIndex + 1}</p> Display the active slide */}
        </div>
    );
}
