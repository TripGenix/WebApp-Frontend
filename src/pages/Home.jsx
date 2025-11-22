import React from "react";
import hero from '../assets/homepage/hero.jpg';
import hero2 from '../assets/homepage/hero-2.jpg';
import Btn from "../components/homePage/Btn";
import Topic from "../components/homePage/topic";
import Guide from "../components/homePage/guide";
import guide from '../assets/homepage/guide.jpg';
import HorizontalSlider from "../components/homePage/HorizontalSlider";
import Articles from '../assets/homepage/articles.jpg';
import Card1 from "../components/homePage/Card1";
import TourCatergory from "../components/homePage/TourCatergory";
import PopularDestination from "../components/homePage/PopularDestination";
import PopularTour from "../components/homePage/PopularTour";
import RecentGallery from "../components/homePage/RecentGallery";
import MeetGuide from "../components/homePage/MeetGuide";
import AboutUs from "../components/homePage/AboutUs";


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

         

            <TourCatergory />

            <PopularDestination />

            <PopularTour />

            <RecentGallery />


            <MeetGuide />

            <AboutUs />

            {/* About us our restuarent */}
            <section className="w-full h-fit bg-ternary flex flex-col justify-start items-center">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 justify-items-center place-items-center-safe mt-15">
                    <div className="">
                        <Topic topic="About us Restuarent" subtopic="News & Article"/>
                    </div>
                    <div className="mt-10 sm:mt-0">
                        <Btn name="Explore Tours"  bg="bg-secondary"/>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10 sm:mt-20 mb-10">
                    <div className="w-fit">
                        <div className="w-[300px] h-[300px] bg-gray-400 rounded-3xl bg-cover bg-center" style={{backgroundImage: `url(${Articles})` }}></div>
                        <div className="">
                            <div className="mt-5">2025 June</div>
                            <div className="text-xl mb-5">10 Reasons for Visit Sri Lanka</div>
                            <Btn name="Our Services"  border="border-2 border-white"/>
                        </div>
                    </div>
                    <div className="w-fit hidden sm:block">
                        <div className="w-[300px] h-[300px] bg-gray-400 rounded-3xl bg-cover bg-center" style={{backgroundImage: `url(${Articles})` }}></div>
                        <div className="mt-5">2025 July</div>
                        <div className="text-xl mb-5">10 Reasons for Visit Sri Lanka</div>
                        <Btn name="Our Services"  border="border-2 border-white"/>
                    </div>

                    <div className="w-fit hidden lg:block">
                        <div className="w-[300px] h-[300px] bg-gray-400 rounded-3xl bg-cover bg-center" style={{backgroundImage: `url(${Articles})` }}></div>
                        <div className="mt-5">2025 July</div>
                        <div className="text-xl mb-5">10 Reasons for Visit Sri Lanka</div>
                        <Btn name="Our Services"  border="border-2 border-white"/>
                    </div>

                    <div className="w-fit hidden lg:block">
                        <div className="w-[300px] h-[300px] bg-gray-400 rounded-3xl bg-cover bg-center" style={{backgroundImage: `url(${Articles})` }}></div>
                        <div className="mt-5">2025 July</div>
                        <div className="text-xl mb-5">10 Reasons for Visit Sri Lanka</div>
                        <Btn name="Our Services"  border="border-2 border-gray-200"/>
                    </div>
                   
                </div>

                
            </section>

            {/* email newsletter */}
            <section className="w-full h-[200px] bg-primary">
                <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full place-items-center justify-items-center">
                    <div className="w-fit h-fit">
                        <Topic topic="This is our" subtopic="Latest Newslatter"/>
                    </div>
                    <div className="flex flex-row w-fit h-fit gap-10">
                        <div className=""><Btn name="Subscribe Now" bg="bg-accent"/></div>
                        <div className=""><Btn name="Subscribe Now" bg="bg-accent"/></div>
                    </div>
                </div>

               
            </section>

            
            <section className="w-full h-2 flex justify-center items-center">
                <div className="w-[90%] h-0.1 border border-accent opacity-15"></div>
            </section>
        </div>
    )
}

export default Home