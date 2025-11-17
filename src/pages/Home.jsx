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
                    <div className="w-full h-screen bg-accent absolute z-1 opacity-40 ]"></div>
                    <div className="w-fit flex flex-col justify-center  relative z-10 items-start left-20 top-40">
                        <p className="w-fit text-2xl  font-bold text-white mb-4">Welcome to Our Website</p>
                        <h1 className="w-fit text-7xl  text-white">Natural Wonder</h1>
                        <h1 className="w-fit text-7xl  text-white">of the World</h1>
                    </div>

                    <div className="w-fit flex flex-row relative z-10 items-center left-20 top-50">
                        <Btn name="Explore Tours"  bg="bg-secondary"/>
                        <Btn name="Our Services"  border="border-2 border-white"/>
                    </div>
                </div>
                
            </section>

            {/* Tour Category */}
            <section className="w-full h-[600px] flex flex-col bg-primary">
               <Topic topic="Wonderfull Places For You" subtopic="Tour Categories" margin="mt-40"/>
              

                <div className="w-full h-[400px] mt-15 flex flex-row justify-center items-center gap-8">
                    <div className="w-[275px] h-[350px] bg-primary rounded-3xl drop-shadow-xl bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${hero})` }}></div>
                    <div className="w-[275px] h-[350px] bg-primary rounded-3xl drop-shadow-xl bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${hero})` }}></div>
                    <div className="w-[275px] h-[350px] bg-primary rounded-3xl drop-shadow-xl bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${hero})` }}></div>
                    <div className="w-[275px] h-[350px] bg-primary rounded-3xl drop-shadow-xl bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${hero})` }}></div>
                    <div className="w-[275px] h-[350px] bg-primary rounded-3xl drop-shadow-xl bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${hero})` }}></div>
                </div>
            </section>


             {/* Popular Destination */}
            <section className="w-full h-[800px] flex flex-col bg-primary">
                <Topic topic="Top Destination" subtopic="Popular Destination" margin="mt-50"/>

                <div className="w-full h-[400px] mt-5 flex flex-row justify-center items-center gap-8">
                    <div className="w-[275px] h-[350px] bg-primary rounded-3xl drop-shadow-xl bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${hero2})` }}></div>
                    <div className="w-[275px] h-[350px] bg-primary rounded-3xl drop-shadow-xl bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${hero2})` }}></div>
                    <div className="w-[275px] h-[350px] bg-primary rounded-3xl drop-shadow-xl bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${hero2})` }}></div>
                    <div className="w-[275px] h-[350px] bg-primary rounded-3xl drop-shadow-xl bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${hero2})` }}></div>
                    <div className="w-[275px] h-[350px] bg-primary rounded-3xl drop-shadow-xl bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${hero2})` }}></div>
                </div>
            </section>


            {/* Popular Tour */}
            <section className="w-full h-[700px] flex flex-col bg-primary relative">
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
                

                
            </section>

            {/* Recent Gallery */}

            <section className="w-full h-[800px] max-w-7xl mx-auto bg-primary">
                <Topic topic="Top Destination" subtopic="Popular Destination" margin="mt-20"/>

                <div className="grid grid-cols-4 gap-6 mt-15">

                    {/* Big wide image (left) */}
                    <div className="col-span-2 h-[260px] rounded-4xl overflow-hidden bg-amber-200 bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${hero2})` }}></div>

                    {/* Normal image */}
                    <div className="col-span-1 h-[260px] rounded-4xl overflow-hiddenbg-amber-200 bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${hero2})` }}></div>

                    {/* Tall image (middle) */}
                    <div className="row-span-2 col-span-1 h-[540px] rounded-4xl overflow-hiddenbg-amber-200 bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${hero2})` }}></div>

                    {/* Normal image */}
                    <div className="col-span-1 h-[260px] rounded-4xl overflow-hiddenbg-amber-200 bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${hero2})` }}></div>

                    {/* Wide bottom-left */}
                    <div className="col-span-2 h-[260px] rounded-4xl overflow-hiddenbg-amber-200 bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${hero2})` }}></div>

                    

                   

                </div>
            </section>

            
            
        </div>
    )
}

export default Home