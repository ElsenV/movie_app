import React from "react";

import CardList from "../../../container/CardList";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { sendDetails } from "../../../../setup/actions/dataAction";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";

SwiperCore.use([ Navigation, Pagination]);

const Index = ({ sliderItems }) => {
  const dispatch = useDispatch();

  return (
    <div className="mx-4 lg:">
      <Swiper
        loop={true}
        loopPreventsSlide={true}
        autoplay={true}
        spaceBetween={15}
        breakpoints={{
          0: { slidesPerView: 1 },
          360: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
          1280: { slidesPerView: 6 },
          1536: { slidesPerView: 7 },
        }}
        onSlideChange={() => console.log("slide change")}
        navigation={true}
      >
        {sliderItems.map((slideContent, index) => (
          <SwiperSlide key={slideContent} virtualIndex={index}>
            <Link
              to={`/details/${
                slideContent.name ||
                slideContent.title ||
                slideContent.original_name
              }`}
              onClick={() => dispatch(sendDetails(slideContent))}
            >
              {<CardList item={slideContent} key={index} />}
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Index;
