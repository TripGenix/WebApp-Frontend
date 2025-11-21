import React from "react";
import hero from '../assets/homepage/hero.jpg';
import hero2 from '../assets/homepage/hero-2.jpg';
import Btn from "../components/homePage/Btn";
import Topic from "../components/homePage/topic";
import Guide from "../components/homePage/guide";
import guide from '../assets/homepage/guide.jpg';
import HorizontalSlider from "../components/homePage/HorizontalSlider";


function Home(){



    
    return(
        <div className="w-full h-fit flex flex-col">
            
            {/* Hero Section */}

            <section className="w-full h-screen relative mt-[75px] bg-amber-100">
                <div className="w-full h-full bg-amber-400 bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${hero2})` }}>
                    <div className="w-full h-screen bg-accent opacity-50 ]"></div>
                    <div className="w-fit flex flex-col justify-center items-center left-[30%] top-40 absolute z-10 sm:left-20 sm:items-start">
                        <p className="w-fit text-xl font-bold text-white mb-4 md:text-2xl lg:3xl">Welcome to Our Website</p>
                        <h1 className="w-fit text-2xl  text-white md:text-5xl lg:text-7xl">Natural Wonder</h1>
                        <h1 className="w-fit text-2xl  text-white md:text-5xl lg:text-7xl">of the World</h1>
                                           
                    </div>

                    <div className="w-fit h-fit flex flex-row absolute z-12 top-[50%] left-[15%] sm:left-20 md:items-start md:top-[60%]">
                            <Btn name="Explore Tours"  bg="bg-secondary"/>
                            <Btn name="Our Services"  border="border-2 border-white"/>
                    </div>

                   
                </div>
                
            </section>

            {/* Tour Category */}
            <section className="w-full h-[600px] flex flex-col bg-primary">
               <Topic topic="Wonderfull Places For You" subtopic="Tour Categories" margin="mt-40"/>
              

                <div className="w-full h-[400px] mt-15 flex-row place-items-center justify-items-center gap-3 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
                    <div className="w-[275px] h-[350px] bg-primary rounded-3xl drop-shadow-xl bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${hero})` }}></div>
                    <div className="w-[275px] h-[350px] bg-primary rounded-3xl drop-shadow-xl bg-cover bg-center bg-no-repeat hidden sm:block" style={{backgroundImage: `url(${hero})` }}></div>
                    <div className="w-[275px] h-[350px] bg-primary rounded-3xl drop-shadow-xl bg-cover bg-center bg-no-repeat hidden sm:block" style={{backgroundImage: `url(${hero})` }}></div>
                    <div className="w-[275px] h-[350px] bg-primary rounded-3xl drop-shadow-xl bg-cover bg-center bg-no-repeat hidden lg:block" style={{backgroundImage: `url(${hero})` }}></div>
                    <div className="w-[275px] h-[350px] bg-primary rounded-3xl drop-shadow-xl bg-cover bg-center bg-no-repeat hidden lg:block" style={{backgroundImage: `url(${hero})` }}></div>
                </div>
            </section>


             {/* Popular Destination */}
            <section className="w-full h-[800px] flex flex-col bg-primary">
                <Topic topic="Top Destination" subtopic="Popular Destination" margin="mt-50"/>

                <div className="w-full h-[400px] mt-15 flex-row place-items-center justify-items-center gap-3 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
                    <div className="w-[275px] h-[350px] bg-primary rounded-3xl drop-shadow-xl bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${hero2})` }}></div>
                    <div className="w-[275px] h-[350px] bg-primary rounded-3xl drop-shadow-xl bg-cover bg-center bg-no-repeat hidden sm:block" style={{backgroundImage: `url(${hero2})` }}></div>
                    <div className="w-[275px] h-[350px] bg-primary rounded-3xl drop-shadow-xl bg-cover bg-center bg-no-repeat hidden sm:block" style={{backgroundImage: `url(${hero2})` }}></div>
                    <div className="w-[275px] h-[350px] bg-primary rounded-3xl drop-shadow-xl bg-cover bg-center bg-no-repeat hidden lg:block" style={{backgroundImage: `url(${hero2})` }}></div>
                    <div className="w-[275px] h-[350px] bg-primary rounded-3xl drop-shadow-xl bg-cover bg-center bg-no-repeat hidden lg:block" style={{backgroundImage: `url(${hero2})` }}></div>
                </div>
            </section>


            {/* Popular Tour */}
            <section className="w-full h-fit flex flex-col relative justify-center items-center">
                <div className="w-full h-[650px] sm:h-[700px]">
                    <div className="w-full h-[500px] flex flex-col items-center  bg-ternary">
                        <Topic topic="Best Popular Tour" subtopic="Most Popular Tour" margin="mt-10"/>
                        <p className="w-fit text-center mt-5 text-accent text-[14px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    
                    
                    </div>
                    
                    <div className="w-full h-[400px] flex-row  absolute z-8 top-50 left-0 sm:top-60 gap-5 place-items-center justify-items-center grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
                         <div className="w-[275px] h-[350px] bg-primary rounded-3xl drop-shadow-xl"></div>
                        <div className="w-[275px] h-[350px] bg-primary rounded-3xl drop-shadow-xl hidden md:block"></div>
                        <div className="w-[275px] h-[350px] bg-primary rounded-3xl drop-shadow-xl hidden md:block"></div>
                        <div className="w-[275px] h-[350px] bg-primary rounded-3xl drop-shadow-xl hidden lg:block"></div>
                        <div className="w-[275px] h-[350px] bg-primary rounded-3xl drop-shadow-xl hidden lg:block"></div>
                    </div>
                </div>
                

                
            </section>

            {/* Recent Gallery */}

            <section className="w-full h-full flex flex-col  justify-start items-center">
                <Topic topic="Explore Our Gallery" subtopic="Recent Gallery"/>

                
                <div className="w-[300px] h-fit max-w-6xl grid grid-cols-1 sm:w-full mt-10 md:w-[80%] md:grid-cols-2 lg:grid-cols-5 gap-6 lg:mt-15">
                {/* Big wide image (top left) */}
                <div
                    className="w-full col-span-2 h-[260px] rounded-4xl drop-shadow-xl bg-cover bg-center bg-no-repeat bg-yellow-300"
                    style={{ backgroundImage: `url(${hero2})` }}
                ></div>

                {/* Normal image (top middle) */}
                <div
                    className="w-full col-span-2 sm:col-span-1 h-[260px] rounded-4xl drop-shadow-xl bg-cover bg-center bg-no-repeat bg-yellow-300"
                    style={{ backgroundImage: `url(${hero2})` }}
                ></div>

                {/* Tall center image (2 rows) */}
                <div
                    className="w-full col-span-2  h-[260px] sm:col-span-1 sm:row-span-2 sm:h-[540px] rounded-4xl drop-shadow-xl bg-cover bg-center bg-no-repeat bg-purple-300"
                    style={{ backgroundImage: `url(${hero2})` }}
                ></div>

                {/* Normal image (top right) */}
                <div
                    className="col-span-2 sm:col-span-1 h-[260px] rounded-4xl drop-shadow-xl bg-cover bg-center bg-no-repeat bg-yellow-300"
                    style={{ backgroundImage: `url(${hero})` }}
                ></div>

                {/* Big wide image (bottom left) */}
                <div
                    className="col-span-2 h-[260px] rounded-4xl drop-shadow-xl bg-cover bg-center bg-no-repeat bg-yellow-300"
                    style={{ backgroundImage: `url(${hero2})` }}
                ></div>

                {/* Normal image (bottom middle) */}
                <div
                    className="col-span-2 sm:col-span-1 h-[260px] rounded-4xl drop-shadow-xl bg-cover bg-center bg-no-repeat bg-yellow-300"
                    style={{ backgroundImage: `url(${hero2})` }}
                ></div>

                {/* Normal image (bottom right) */}
                <div
                    className="col-span-2 sm:col-span-1 h-[260px] rounded-4xl drop-shadow-xl bg-cover bg-center bg-no-repeat bg-yellow-300"
                    style={{ backgroundImage: `url(${hero2})` }}
                ></div>
                </div>
          
            </section>

            {/* Meet with Guide */}

            <section className="w-full h-full flex flex-col  justify-start items-center bg-ternary mt-20">
                <div className="w-full flex flex-col items-center bg-ternary py-10">
                    <div className="w-fit h-fit flex flex-col items-center">
                        <Topic topic="Meet With Guide" subtopic="Tour Guide"/>
                                          
                    
                    </div>
                
                    <div className="w-full flex justify-center items-center px-4 sm:px-10 overflow-hidden">
                        
                        <HorizontalSlider />
                        
                        
                        
                        
                    </div>
                </div>
          
            </section>


            {/* What Clients Say About Us */}
            <section className="w-full h-[700px] bg-primary flex flex-col justify-start items-center mt-15">
                <Topic topic="Testimonial" subtopic="What Clients Say About Us"/>
            </section>

            
            

            
        </div>
    )
}

export default Home