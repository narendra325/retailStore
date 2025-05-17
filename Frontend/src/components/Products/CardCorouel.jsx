import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";

const newArraivals = [
  {
    _id: 1,
    name: "shirt",
    price: 600,
    imageurl: "https://picsum.photos/200?random=1",
    alt: "shirt",
  },
  {
    _id: 2,
    name: "shirt",
    price: 600,
    imageurl: "https://picsum.photos/200?random=2",
    alt: "shirt",
  },
  {
    _id: 3,
    name: "shirt",
    price: 600,
    imageurl: "https://picsum.photos/200?random=3",
    alt: "shirt",
  },
  {
    _id: 4,
    name: "shirt",
    price: 600,
    imageurl: "https://picsum.photos/200?random=4",
    alt: "shirt",
  },
  {
    _id: 5,
    name: "shirt",
    price: 600,
    imageurl: "https://picsum.photos/200?random=5",
    alt: "shirt",
  },
  {
    _id: 6,
    name: "shirt",
    price: 600,
    imageurl: "https://picsum.photos/200?random=6",
    alt: "shirt",
  },
  {
    _id: 7,
    name: "shirt",
    price: 600,
    imageurl: "https://picsum.photos/200?random=7",
    alt: "shirt",
  },
];

const CardCorouel = () => {
  return (
    <div className=" container mx-auto">
      <h2 className="text-xl font-semibold text-center p-2">
        Explore new Arraivals
      </h2>
      <p className="text-lg  text-center p-2 mb-2">
        Make your life even more colorful by wearing the cloths from new
        Arraivals
      </p>
      <div className="flex justify-end pe-5  ">
        <button className="p-2">
          <FiArrowLeft className=" Swiperleft border w-5 h-5  border-black " />
        </button>
        <button className="p-2">
          <FiArrowRight className=" Swiperright border w-5 h-5 border-black" />
        </button>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={16}
        slidesPerView={3}
        allowTouchMove={false}
        navigation
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {newArraivals.map((item) => (
          <SwiperSlide key={item._id}>
            <Link to="#">
            <div className="relative p-4 bg-white shadow-md rounded-md overflow-x-hidden  ">
              <img
                src={item.imageurl}
                alt={item.alt}
                className="w-full h-auto object-cover rounded-md"
              />
              <div className="absolute bottom-[30px] right-1 bg-black w-full text-white p-2 text-center bg-opacity-60 backdrop-blur-sm ">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-sm">₹{item.price}</p>
              </div>
            </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardCorouel;
