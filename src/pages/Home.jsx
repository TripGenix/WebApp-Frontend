import React from "react";
import hero from '../assets/homepage/hero.jpg';
import hero2 from '../assets/homepage/hero-2.jpg';
import Btn from "../components/homePage/Btn";
import Topic from "../components/homePage/topic";

function Home(){
    return(
        <div className="w-full h-fit flex flex-col bg-amber-700">
            
            {/* Hero Section */}

            <section className="w-full h-screen relative mt-[75px] bg-amber-100">
                <div className="w-full h-full bg-amber-400 bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${hero2})` }}>
                    <div className="w-full h-screen bg-accent absolute z-1 opacity-40"></div>
                    <div className="w-fit flex flex-col justify-center  relative z-10 items-start left-20 top-40">
                        <p className="w-fit text-2xl  font-bold text-white mb-4">Welcome to Our Website</p>
                        <h1 className="w-fit text-7xl  text-white">Natural Wonder</h1>
                        <h1 className="w-fit text-7xl  text-white">of the World</h1>
                    </div>

                    <div className="flex flex-row relative z-10 items-center left-20 top-50">
                        <Btn name="Explore Tours"  bg="bg-secondary"/>
                        <Btn name="Our Services"  border="border-2 border-white"/>
                    </div>
                </div>
                
            </section>

            {/* Tour Category */}
            <section className="w-full h-[800px] flex flex-col bg-primary">
                <Topic topic="Wonderfull Places For You" subtopic="Tour Categories" margin="mt-40"/>

                <div className="w-full h-[400px] bg-purple-400 mt-30 flex flex-row justify-center items-center gap-8">
                    <div className="w-[275px] h-[350px] bg-green-200"></div>
                    <div className="w-[275px] h-[350px] bg-green-200"></div>
                    <div className="w-[275px] h-[350px] bg-green-200"></div>
                    <div className="w-[275px] h-[350px] bg-green-200"></div>
                    <div className="w-[275px] h-[350px] bg-green-200"></div>
                </div>
            </section>


             {/* Popular Destination */}
            <section className="w-full h-[1000px] flex flex-col bg-primary">
                <Topic topic="Top Destination" subtopic="Popular Destination" margin="mt-50"/>

                <div className="w-full h-[400px] bg-purple-400 mt-30 flex flex-row justify-center items-center gap-8">
                    <div className="w-[275px] h-[350px] bg-green-200"></div>
                    <div className="w-[275px] h-[350px] bg-green-200"></div>
                    <div className="w-[275px] h-[350px] bg-green-200"></div>
                    <div className="w-[275px] h-[350px] bg-green-200"></div>
                    <div className="w-[275px] h-[350px] bg-green-200"></div>
                </div>
            </section>
            
            
        </div>
    )
}

export default Home