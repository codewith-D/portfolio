import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import badminton from "../assets/images/badminton.png";
import winner from "../assets/images/winner.png";
import pubg from "../assets/images/pubg.png"



import { Pagination, Autoplay } from "swiper";
const NonAcademic = [
    {
      img: badminton,
      name: "AR Navigation",
     
    },
    {
      img: winner,
      name: "News Box",
     
    },
    {
      img: pubg,
      name: "Product Audit System",
      
    },
  
    
  ];



const Achievements = () => {
 
    
  
  return (
    <section id="achievements" className="py-10 text-white ">
      <div className="text-center">
        <h3 className="text-4xl font-semibold mt-8">
          My <span className="text-cyan-600">Achievements</span>
        </h3>
        <p className="text-gray-400 mt-3 text-xl">My Accomplishments</p>
        
        <div className=" gap-12 mx-10  pt-8 pb-8 justify-center px-12 flex">
            <div className='border-2 border-cyan-600 rounded-xl w-6/12 pt-10 pb-2'>
                <div className="text-4xl text-cyan-200 mb-3">
                    Research Paper Publication
                </div>
                <div className="text-3xl text-cyan-400 mb-1 px-4"> 
                    Web application for AR-based Campus Navigation
                </div>
                <div className="text-base px-12 text-cyan-600"> 
                    International Journal of Engieering Applied Sciences and Technology, Volume 7, 
                    Issue 7
                </div>
                <div className="text-sm text-cyan-800 my-2"> 
                    Dec 2022
                </div>
                <div className="text-xl px-12 mb-2"> 
                    The research paper describes the successful implementation of the AR navigation app. 
                    we have proposed an android mobile app for
                    campus navigation. This AR-based android mobile
                    application is used for navigating the locations like student
                    section, exam section, workshops, classrooms, faculty
                    rooms, library, internet center inside the campus. To
                    develop this mobile application, we have used many
                    technologies like WebXR, Threejs, Vitejs, Vanilla
                    javascript and we have integrated through webXR API.
                </div>
                
                
                
            </div>
            <div className='border-2 border-cyan-600 rounded-xl w-6/12 pt-10 mb-12'>
                <div className="text-4xl text-cyan-200 mb-3">
                    Research Paper Publication
                </div>
                <div className="text-3xl text-cyan-400 mb-1 px-2"> 
                    Density Based Traffic Management System
                </div>
                <div className="text-base px-12 text-cyan-600"> 
                    Strad Research, Volume 8, Issue 5
                </div>
                <div className="text-sm text-cyan-800 my-2 "> 
                    May 2021
                </div>
                <div className="text-xl px-12 pt-6 "> 
                    The research paper describes the presenatation of traffic management 
                    system using Internet of Things. This project operates in
                    a way designed to control traffic congestion and signal lights. To make the 
                    signal more intelligent using Arduino and ultrasonic
                    sensors.

                </div>
                
                
                
            </div>
        </div>
       
        
      
        
      </div>
    </section>
  );
};

export default Achievements;
