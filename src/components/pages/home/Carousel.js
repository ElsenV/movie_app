import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft } from "react-icons/bs";
import { BsChevronCompactRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { sendDetails } from "../../../setup/actions/dataAction";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slider, setSlider] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const prevSlide = () => {
    setCurrentIndex(() =>
      currentIndex === 0 ? slider.length - 1 : currentIndex - 1
    );
  };

  useEffect(() => {
    const timeSlider = setTimeout(() => {
      setCurrentIndex(() =>
        currentIndex === slider.length - 1 ? 0 : currentIndex + 1
      );
    }, 5000);
    return () => clearTimeout(timeSlider);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex(() =>
      currentIndex === slider.length - 1 ? 0 : currentIndex + 1
    );
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
        );
        const res2 = await res.json();
        setSlider(res2.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [dispatch]);

  return (
    <>
      {!loading && (
        <div className="flex justify-start max-w-[80%] h-[250px] md:h-[380px] w-full  mx-auto relative group hidden sm:block cursor-pointer">
          <Link
            to={`/details/${slider[currentIndex].name}`}
            onClick={() => {
              dispatch(sendDetails(slider[currentIndex]));
            }}
          >
            <div
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${slider[currentIndex].backdrop_path})`,
              }}
              className="  w-full h-full rounded-2xl bg-center bg-cover duration-700"
            ></div>
          </Link>

          <div className="hidden group-hover:block absolute top-[35%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={() => prevSlide()} size={30} />
          </div>
          <div className="hidden group-hover:block absolute top-[35%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={() => nextSlide()} size={30} />
          </div>
        </div>
      )}
    </>
  );
};

export default Carousel;
