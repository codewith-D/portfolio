import React from "react";




const Education = () => {
 
    
  
  return (
    <section id="education" className="py-10 text-white bg-gray-800">
      <div className="text-center">
        <h3 className="text-4xl font-semibold mt-8">
          My <span className="text-cyan-600">Education</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My Schooling</p>
        <div className=" gap-12 mx-10  pt-8 pb-8 justify-center px-12 flex">
            <div className='border-2 border-cyan-600 rounded-xl w-6/12 pt-10 pb-2'>
                <div className="text-4xl text-cyan-200 mb-3">
                    Bachelor's Degree of Computer Engineering
                </div>
                <div className="text-xl text-cyan-400 mb-1"> 
                    MIT ACADEMY OF ENGINEERING, ALANDI, PUNE
                </div>
                <div className="text-sm text-cyan-800 mb-2"> 
                    2019-2023
                </div>
                <div className="text-sm p-2"> 
                    Currently pursuing final year of BTech in Computer Engineering with specialization in Cloud Computing.
                </div>
                <div className="text-sm text-cyan-600"> 
                    CGPA: 9.06/10
                </div>
                
            </div>
            <div className='border-2 border-cyan-600 rounded-xl w-6/12 pt-10 pb-2 mb-12'>
                <div className="text-4xl text-cyan-200 mb-3">
                    HSC
                </div>
                <div className="text-xl text-cyan-400 mb-1">
                    Cambridge Junior College, Nanded
                </div>
                <div className="text-sm text-cyan-800 mb-2"> 
                    2019
                </div>
                <div className="text-sm p-2"> 
                    Completed 12th in Science Course with first-class.
                </div>
                <div className="text-sm text-cyan-600"> 
                    Percentage: 71.23%
                </div>
                
            </div>
        </div>
        <div className=" gap-12 mx-10 items-center  justify-center px-12 flex">
            <div className='border-2 border-cyan-600 rounded-xl w-6/12 pt-10 pb-2 mb-12'>
                <div className="text-4xl text-cyan-200 mb-3">
                    SSC
                </div>
                <div className="text-xl text-cyan-400 mb-1"> 
                    Cambridge High School, Nanded
                </div>
                <div className="text-sm text-cyan-800 mb-2">  
                    2017
                </div>
                <div className="text-sm p-2"> 
                    Completed 10th with flying colors.
                </div>
                <div className="text-sm text-cyan-600"> 
                    Percentage: 94.6%
                </div>
                
            </div>
            <div className=' w-1/2 py-10'>
                
            </div>
        </div>
      </div>
      
     
      
    </section>
  );
};

export default Education;
