import lastSectionBg from "../assets/B&N.png";
import elavetImg from "../assets/elavate.png";
import innerBgImg from "../assets/bg.jpg";
import Button from "./Button";

function ElevateYourSchool() {
  return (
    <section className="px-10 md:px-14 max-w-7xl mx-auto">
      <div
        className="relative rounded-2xl overflow-hidden py-10 md:py-11 bg-cover bg-center"
        style={{
  backgroundImage: `url(${lastSectionBg}), url(${innerBgImg})`,
  backgroundSize: 'cover, cover',
  backgroundPosition: 'center, top left',
}}
      >
        <div className="absolute inset-0 bg-gradient-to-r fro-hero-start to-transparent opacity-90"></div>

        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
            <div>
              <h2 className="text-xl md:text-2xl lg:text-4xl font-bold leading-tight mb-6">
                Let's Elevate Your <br className="hidden md:block" /> School Together
              </h2>
              <p className="text-lg md:text-xl lg:pr-3 text-textBlack mb-8 max-w-2xl">
                Experience a modern, stress-free way to manage your school.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="hover:opacity-90 transition">
                  Get Started Free
                </Button>
                <Button variant="outline">How Seamtrack Works</Button>
              </div>
            </div>

            <div className="relative h-64 md:h-76 lg:h-ful rounded-xl overflow-hidden shadow-md">
              <img
                src={elavetImg}
                alt="Elevate Illustration"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
   </section>
  );
}

export default ElevateYourSchool;
