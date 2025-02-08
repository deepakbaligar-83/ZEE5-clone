import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "./Carousel.css";

const items = [
  { id: 1, image: "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-101-10z5694169/cover/1920x7708254b8a0e7994638ba2b3bfc9a937ecb.jpg" },
  { id: 2, image: "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-1z5689436/cover/1920x770186136fd13f240fbb7d32928cde261b8.jpg" },
  { id: 3, image: "https://akamaividz2.zee5.com/image/upload/w_1420,h_569,c_scale,f_webp,q_auto:eco/resources/0-6-3506/cover/1920x7703daf4e38df3e43dfb23f01e805bddab4366df6ce704242f6be0634c693ae8861.jpg" },
  { id: 4, image: "https://akamaividz2.zee5.com/image/upload/w_1420,h_569,c_scale,f_webp,q_auto:eco/resources/0-101-10z5699196/cover/1920x770d001dc7b3b574d8ea7442764ac10c7fc.jpg" },
  { id: 5, image: "https://akamaividz2.zee5.com/image/upload/w_1420,h_569,c_scale,f_webp,q_auto:eco/resources/0-0-1z5689119/cover/1920x7708a5587baabe74bc4b9d78416d9ef35e5.jpg" },
  { id: 6, image: "https://akamaividz2.zee5.com/image/upload/w_1420,h_569,c_scale,f_webp,q_auto:eco/resources/0-101-10z5701043/cover/1920x7702391f7959dd94af097caeb43ac1c6051.jpg" },
];

const Carousel = () => {
  const swiperRef = useRef(null);

  return (
    <div className="carousel-container">
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Autoplay]}
        spaceBetween={window.innerWidth < 768 ? 20 : 530} // Responsive spacing
        slidesPerView={"auto"}
        centeredSlides={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Store Swiper instance
      >
        {items.map((item) => (
          <SwiperSlide key={item.id} className="carousel-item">
            <img src={item.image} alt={`Item ${item.id}`} className="carousel-image" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <button className="carousel-button prev" onClick={() => swiperRef.current?.slidePrev()}>
        <ChevronLeft size={32} color="white" />
      </button>
      <button className="carousel-button next" onClick={() => swiperRef.current?.slideNext()}>
        <ChevronRight size={32} color="white" />
      </button>
    </div>
  );
};

export default Carousel;
