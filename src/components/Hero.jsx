import React from "react";

const Hero = () => {
  const social_media = [
    
    {
      
      icon: "logo-linkedin",
      live_link: "https://www.linkedin.com/in/divyanshu-mamidwar/"
    },
    {
     
      icon: "logo-facebook",
      live_link: "https://www.facebook.com/divyanshu.mamidwar",
    },
    {
      
      icon: "logo-github",
      live_link: "https://github.com/codewith-D",
    },
    {
      
      icon: "logo-instagram",
      live_link: "https://instagram.com/divyanshu_2201?igshid=ZGUzMzM3NWJiOQ==",
    },
    {
      
      icon: "logo-medium",
      live_link: "https://medium.com/@mamidwardivyanshu",
    },
  ];


  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("DM.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "DM.pdf";
        alink.click();
      });
    });
    
    
  
  };

  const oniconclick = (live_link) => {
    window.open(live_link);
  };
  
  return (
    <section
      id="home"
      className="md:items-center mx-auto min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1">
        <div className="text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal py-10 leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              hello!
              <br />
            </span>
            I'm <span>Divyanshu</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Software Developer
          </h4>
          <br />

          <button
            onClick={onButtonClick}
            className="py-1 bg-cyan-600 font-bold transform hover:scale-110 duration-100 hover:text-cyan-600 hover:bg-white px-3 text-lg  rounded-3xl "
          >
            Resume
          </button>

          <div className=" mt-8 text-3xl flex items-center  justify-center gap-5">
            {social_media?.map((data,index) => (
              <div
                className="text-gray-600 transform hover:scale-150 duration-150 hover:text-white cursor-pointer "
                
              >
                
                <ion-icon key={index} name={data.icon} onClick={() =>oniconclick(data.live_link)}></ion-icon>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
