import Card1 from "./Card1";
import Topic from "./topic";

 function PopularDestination(){
    return(
            <section className="w-full h-[700px] flex flex-col bg-primary">
                <Topic topic="Top Destination" subtopic="Popular Destination" margin="mt-20"/>

                <div className="w-full h-[400px] mt-15 flex-row place-items-center justify-items-center gap-3 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
                    
                    <Card1  />
                    <Card1 hid="hidden" blo="sm:block" />
                    <Card1 hid="hidden" blo="sm:block" />
                    <Card1 hid="hidden" blo="lg:block" />
                    <Card1 hid="hidden" blo="lg:block" />
                </div>
            </section>
    )
 }

 export default PopularDestination