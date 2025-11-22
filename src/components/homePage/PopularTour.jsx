import Card1 from "./Card1"
import Topic from "./topic"

function PopularTour(){
    return(
        <section className="w-full h-fit flex flex-col relative justify-center items-center">
                <div className="w-full h-[650px] sm:h-[700px]">
                    <div className="w-full h-[500px] flex flex-col items-center  bg-ternary">
                        <Topic topic="Best Popular Tour" subtopic="Most Popular Tour" margin="mt-10"/>
                        <p className="w-fit text-center mt-5 text-accent text-[14px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    
                    
                    </div>
                    
                    <div className="w-full h-[400px] flex-row  absolute z-8 top-50 left-0 sm:top-60 gap-5 place-items-center justify-items-center grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
                        
                            <Card1  />
                            <Card1 hid="hidden" blo="sm:block" />
                            <Card1 hid="hidden" blo="sm:block" />
                            <Card1 hid="hidden" blo="lg:block" />
                            <Card1 hid="hidden" blo="lg:block" />
                    </div>
                </div>
                

                
            </section>
    )
}

export default PopularTour