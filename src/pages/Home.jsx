import React from "react";
import hero from '../assets/homepage/hero.jpg';
import hero2 from '../assets/homepage/hero-2.jpg';
import Btn from "../components/homePage/Btn";

function Home(){
    return(
        <div className="w-full h-screen flex justify-center items-center">
            
            {/* Hero Section */}

            <section className="w-full h-fit fixed top-[75px]">
                <div className="w-full h-screen bg-amber-400 bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${hero2})` }}>
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
        </div>
    )
}

export default Home