import React from "react";
// import pic from '../assets/images/photo.png'
import myImage from '../assets/images/profile.png'
const About = () => {
  return (
    <section id="about" className="py-20 text-white bg-gray-800">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-8 max-w-6xl mx-auto mb-20">
          <div className="p-2">
            <div className="text-gray-300 flex">
              <div className="text-left leading-7 w-8/12  pt-20  mt-12  text-xl">
                <div>
                <p>
                  hey, my name is Divyanshu, I'm Pursuing my Computer Engineering
                  from MIT Academy of Engineering, Pune. I am SDE Intern at
                  CocoTechoes Solutions. I am passionate about FrontEnd
                  development and how it works that I wanted to explore. Talking
                  about my technology knowledge in Programming language I know
                  C++, Javascript and in database I know MongoDB, SQL (Basic). In
                  Web development, i'm good at Javascript, HTML, CSS. Frameworks I
                  know for FrontEnd Development ReactJs, React Native, and CSS
                  frameworks, I know Bootstrap, Tailwind CSS & Native Base. 
                </p>
                </div>
               
              </div>
              
              <div className="w-4/12 pl-12">
                <img 
                    src={myImage}
                    class="h-50 max-w-full  "
                    alt="..." />
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
