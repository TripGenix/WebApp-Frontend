import TestimonialCarousel from "./TestimonialCarousel";
import CustomerComments from "./TestimonialCarousel";
import Topic from "./topic";

function AboutUs() {
  return (
    <section className="w-full h-[700px] bg-primary flex flex-col justify-start items-center mt-15">
      {/* 🔹 Testimonial Heading Section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-3">
          Testimonials
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
          What Clients <span className="text-[#1DA9CC]">Say About Us</span>
        </h2>

        {/* Accent divider */}
        <div className="mt-6 flex justify-center items-center gap-4">
          <div className="w-12 h-[2px] bg-gray-300"></div>
          <div className="w-6 h-6 rounded-full bg-[#1DA9CC]"></div>
          <div className="w-12 h-[2px] bg-gray-300"></div>
        </div>

        {/* Description */}
        <p className="mt-6 text-gray-600 text-sm sm:text-base leading-relaxed">
          Hear from travelers who explored Sri Lanka with us. Their experiences,
          stories, and feedback reflect the unforgettable journeys and
          exceptional service we strive to deliver.
        </p>
      </div>

      <div className="w-full h-fit mt-15">
        <TestimonialCarousel />
      </div>
    </section>
  );
}

export default AboutUs;
