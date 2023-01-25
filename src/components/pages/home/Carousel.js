import React, { useState } from "react";
import { BsChevronCompactLeft } from "react-icons/bs";
import { BsChevronCompactRight } from "react-icons/bs";
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex(() =>
      currentIndex === 0 ? sliders.length - 1 : currentIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex(() =>
      currentIndex === sliders.length - 1 ? 0 : currentIndex + 1
    );
  };

  const sliders = [
    {
      url: "https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(19).webp",
    },
    {
      url: "https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(35).webp",
    },
    {
      url: "https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(40).webp",
    },
  ];
  return (
    // <div>
    //   <div
    //     id="carouselDarkVariant"
    //     className="carousel slide carousel-fade carousel-dark relative"
    //     data-bs-ride="carousel"
    //   >
    //     {/* <!-- Indicators --> */}
    //     <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    //       <button
    //         data-bs-target="#carouselDarkVariant"
    //         data-bs-slide-to="0"
    //         className="active"
    //         aria-current="true"
    //         aria-label="Slide 1"
    //       ></button>
    //       <button
    //         data-bs-target="#carouselDarkVariant"
    //         data-bs-slide-to="1"
    //         aria-label="Slide 1"
    //       ></button>
    //       <button
    //         data-bs-target="#carouselDarkVariant"
    //         data-bs-slide-to="2"
    //         aria-label="Slide 1"
    //       ></button>
    //     </div>

    //     {/* <!-- Inner --> */}
    //     <div className="carousel-inner relative w-full overflow-hidden">
    //       {/* <!-- Single item --> */}
    //       <div className="carousel-item active relative float-left w-full">
    //         <img
    //           src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(19).webp"
    //           className="block w-full"
    //           alt="Motorbike Smoke"
    //         />
    //         <div className="carousel-caption hidden md:block absolute text-center">
    //           <h5 className="text-xl">First slide label</h5>
    //           <p>
    //             Some representative placeholder content for the first slide.
    //           </p>
    //         </div>
    //       </div>

    //       {/* <!-- Single item --> */}
    //       <div className="carousel-item relative float-left w-full">
    //         <img
    //           src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(35).webp"
    //           className="block w-full"
    //           alt="Mountaintop"
    //         />
    //         <div className="carousel-caption hidden md:block absolute text-center">
    //           <h5 className="text-xl">Second slide label</h5>
    //           <p>
    //             Some representative placeholder content for the second slide.
    //           </p>
    //         </div>
    //       </div>

    //       {/* <!-- Single item --> */}
    //       <div className="carousel-item relative float-left w-full">
    //         <img
    //           src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(40).webp"
    //           className="block w-full"
    //           alt="Woman Reading a Book"
    //         />
    //         <div className="carousel-caption hidden md:block absolute text-center">
    //           <h5 className="text-xl">Third slide label</h5>
    //           <p>
    //             Some representative placeholder content for the third slide.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //     {/* <!-- Inner --> */}

    //     {/* <!-- Controls --> */}
    //     <button
    //       className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    //       type="button"
    //       data-bs-target="#carouselDarkVariant"
    //       data-bs-slide="prev"
    //     >
    //       <span
    //         className="carousel-control-prev-icon inline-block bg-no-repeat"
    //         aria-hidden="true"
    //       ></span>
    //       <span className="visually-hidden">Previous</span>
    //     </button>
    //     <button
    //       className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    //       type="button"
    //       data-bs-target="#carouselDarkVariant"
    //       data-bs-slide="next"
    //     >
    //       <span
    //         className="carousel-control-next-icon inline-block bg-no-repeat"
    //         aria-hidden="true"
    //       ></span>
    //       <span className="visually-hidden">Next</span>
    //     </button>
    //   </div>
    // </div>

    
    <div className="max-w-[650px] h-[400px] w-full m-auto py-16 px-4 relative group">
      {console.log(`${sliders[currentIndex].url}`)}
      <div
        style={{ backgroundImage: `url(${sliders[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={() => prevSlide()} size={30} />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={() => nextSlide()} size={30} />
      </div>
    </div>





    // <div
    //   id="carouselExampleCaptions"
    //   class="carousel slide relative"
    //   data-bs-ride="carousel"
    // >
    //   <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    //     <button
    //       type="button"
    //       data-bs-target="#carouselExampleCaptions"
    //       data-bs-slide-to="0"
    //       class="active"
    //       aria-current="true"
    //       aria-label="Slide 1"
    //     ></button>
    //     <button
    //       type="button"
    //       data-bs-target="#carouselExampleCaptions"
    //       data-bs-slide-to="1"
    //       aria-label="Slide 2"
    //     ></button>
    //     <button
    //       type="button"
    //       data-bs-target="#carouselExampleCaptions"
    //       data-bs-slide-to="2"
    //       aria-label="Slide 3"
    //     ></button>
    //   </div>
    //   <div class="carousel-inner relative w-full overflow-hidden">
    //     <div class="carousel-item active relative float-left duration-500 w-full">
    //       <img src={`${sliders[currentIndex].url}`} class=" block w-full" alt="..." />
    //       <div class="carousel-caption hidden md:block absolute text-center">
    //         <h5 class="text-xl">First slide label</h5>
    //         <p>Some representative placeholder content for the first slide.</p>
    //       </div>
    //     </div>
    //   </div>
    //   <button
    //     class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    //     type="button"
    //     data-bs-target="#carouselExampleCaptions"
    //     data-bs-slide="prev"
    //   >
    //     <span
    //       class="carousel-control-prev-icon inline-block bg-no-repeat"
    //       aria-hidden="true"
    //     ></span>
    //     <span class="visually-hidden">Previous</span>
    //   </button>
    //   <button
    //     class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    //     type="button"
    //     data-bs-target="#carouselExampleCaptions"
    //     data-bs-slide="next"
    //     onClick={nextSlide}
    //   >
    //     <span
    //       class="carousel-control-next-icon inline-block bg-no-repeat"
    //       aria-hidden="true"
    //     ></span>
    //     <span class="visually-hidden">Next</span>
    //   </button>
    // </div>
  );
};

export default Carousel;

{
  /* <div className="w-full m-auto py-16 px-4 relative">
  <div style={{backgroundImage:`url(${sliders[0].url})`}} className="w-full h-full rounded-2xl bg-center bg-cover duration-500"></div>
</div>; */
}
