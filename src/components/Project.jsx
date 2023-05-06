import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import d1 from "../assets/images/D1.png";
import d2 from "../assets/images/D2.png";
import d3 from "../assets/images/D3.png";
import d4 from "../assets/images/D4.png";
import d5 from "../assets/images/D5.png";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: d2,
      name: "AR Navigation",
      live_link: "https://github.com/codewith-D/AR-Deployment"
    },
    {
      img: d3,
      name: "News Box",
      live_link: "https://github.com/codewith-D/NewsBox",
    },
    {
      img: d5,
      name: "Product Audit System",
      live_link: "https://github.com/codewith-D/Product-Audit-System",
    },
    {
      img: d1,
      name: "Text Utils",
      live_link: "https://github.com/codewith-D/TextUtils",
    },
    {
      img: d4,
      name: "Calculator",
      live_link: "https://github.com/codewith-D/Calculator-using-HTML-CSS-JS",
    },
    
  ];
  return (
    <section id="projects" className="py-10 text-white bg-gray-800">
      <div className="text-center mt-12">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My Designs & Programs</p>
        <br />
        
      </div>
      <br />
      <div className="flex max-w-8xl gap-6 px-5 mx-auto items-center ">
        <div className="w-[50%] mx-auto">
          <Swiper
            slidesPerview={1}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 1,
              },
            }}
            loop={true}
            autoplay={{
              delay: 2000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-white bg-gray-800 transform hover:scale-110 duration-100 px-4 py-2 mx-6 rounded "
                    >
                      View
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <br />
          <a href="https://github.com/codewith-D">
            <button className=" py-2 bg-cyan-600 font-bold transform hover:scale-110 duration-150 hover:text-cyan-600 hover:bg-white px-3 rounded-3xl ">
              Git Repository
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Project;
