
import Topic from "./topic";
import TourGuideCard from "./TourGuideCard";


export default function TourGuide() {



  return (
    <section className="w-full h-[1500px] lg:h-[1000px] flex flex-col bg-primary">
      <Topic
        topic="We Guide You"
        subtopic="Professional Tour Guides"
        margin="mt-20"
      />

      <div className="w-full mt-15 flex items-center justify-center">
        <TourGuideCard />
      </div>
    </section>
  );
}