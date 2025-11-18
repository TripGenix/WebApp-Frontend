import React from "react";
import hero from '../assets/homepage/hero.jpg';
import hero2 from '../assets/homepage/hero-2.jpg';
import Btn from "../components/homePage/Btn";
import Topic from "../components/homePage/topic";

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
              

                <div className="w-full h-[400px] mt-15 flex-row place-items-center justify-items-center gap-3 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                    <div className="w-[275px] h-[350px] bg-primary rounded-3xl drop-shadow-xl bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${hero})` }}></div>
                    <div className="w-[275px] h-[350px] bg-primary rounded-3xl drop-shadow-xl bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${hero})` }}></div>
                    <div className="w-[275px] h-[350px] bg-primary rounded-3xl drop-shadow-xl bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${hero})` }}></div>
                    <div className="w-[275px] h-[350px] bg-primary rounded-3xl drop-shadow-xl bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${hero})` }}></div>
                    {/* <div className="w-[275px] h-[350px] bg-primary rounded-3xl drop-shadow-xl bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${hero})` }}></div> */}
                </div>
            </section>


             {/* Popular Destination */}
            {/* <section className="w-full h-[800px] flex flex-col bg-primary">
                <Topic topic="Top Destination" subtopic="Popular Destination" margin="mt-50"/>

                <div className="w-full h-[400px] mt-5 flex flex-row justify-center items-center gap-8">
                    <div className="w-[275px] h-[350px] bg-primary rounded-3xl drop-shadow-xl bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${hero2})` }}></div>
                    <div className="w-[275px] h-[350px] bg-primary rounded-3xl drop-shadow-xl bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${hero2})` }}></div>
                    <div className="w-[275px] h-[350px] bg-primary rounded-3xl drop-shadow-xl bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${hero2})` }}></div>
                    <div className="w-[275px] h-[350px] bg-primary rounded-3xl drop-shadow-xl bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${hero2})` }}></div>
                    <div className="w-[275px] h-[350px] bg-primary rounded-3xl drop-shadow-xl bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${hero2})` }}></div>
                </div>
            </section> */}


            {/* Popular Tour */}
            {/* <section className="w-full h-[700px] flex flex-col bg-primary relative">
                <div className="w-full h-[500px] flex flex-col items-center  bg-ternary">
                    <Topic topic="Best Popular Tour" subtopic="Most Popular Tour" margin="mt-10"/>
                    <p className="w-[550px] text-center mt-5 text-accent">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    
                    
                </div>
                
                <div className="w-full h-[400px]  flex flex-row justify-center items-center absolute z-8 top-60 gap-5">
                     <div className="w-[275px] h-[350px] bg-primary rounded-3xl drop-shadow-xl"></div>
                    <div className="w-[275px] h-[350px] bg-primary rounded-3xl drop-shadow-xl"></div>
                    <div className="w-[275px] h-[350px] bg-primary rounded-3xl drop-shadow-xl"></div>
                    <div className="w-[275px] h-[350px] bg-primary rounded-3xl drop-shadow-xl"></div>
                    <div className="w-[275px] h-[350px] bg-primary rounded-3xl drop-shadow-xl"></div>
                </div>
                

                
            </section> */}

            {/* Recent Gallery */}
            

            
            
        </div>
    )
}

export default Home