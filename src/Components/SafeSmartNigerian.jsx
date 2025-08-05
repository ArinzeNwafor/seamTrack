import icon1 from '../assets/safe-smart.png';
import icon2 from '../assets/analytics.png';
import icon3 from '../assets/school.png';
function SafeSmartNigerian() {
  return (
          <section className="py-16 px-4 sm:px-8 bg-ssn-bg lg:px-12 max-w-7xl mx-auto">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="bg-ssn-card p-8 rounded-xl shadow-xs">
          <h2 className="text-3xl md:text-xl font-bold text-text-black mb-3">Safe. Smart. Nigerian.</h2>
          <p className="text-md text-text-black/80 mb-4">Built for Nigerian Schools — Ready for the World</p>
          <ul className="space-y-1 text-text-black/80">
            <li className="flex items-start">
              <span className="text-text-nav text-xl mr-2">•</span> Cloud-based & always secure
            </li>
            <li className="flex items-start">
              <span className="text-text-nav text-xl mr-2">•</span> Designed for Nigerian curricula, grading & compliance
            </li>
            <li className="flex items-start">
              <span className="text-text-nav text-xl mr-2">•</span> Localized with global scalability
            </li>
          </ul>
        </div>
        <div className="relative h-64 md:h-96 lg:h-full rounded-xl overflow-hidden shadow-xs">
          <img
            src={icon1}
            alt="Cloud security illustration"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-12">
        <div className="relative h-64 md:h-96 lg:h-full rounded-xl overflow-hidden shadow-xs order-last lg:order-first">
          <img
            src={icon2}
            alt="Analytics dashboard"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="bg-ssn-card p-8 rounded-xl shadow-xs order-first lg:order-last">
          <h2 className="text-3xl md:text-xl font-bold text-text-black mb-3">Performance & Analytics</h2>
          <p className="text-md text-text-black/80 mb-4">
            Know What's Working — and What's Not. Visual dashboards tracking;
          </p>
          <ul className="space-y-1 text-text-black/80">
            <li className="flex items-start">
              <span className="text-text-nav text-xl mr-2">•</span> Student progress
            </li>
            <li className="flex items-start">
              <span className="text-text-nav text-xl mr-2">•</span> Staff performance
            </li>
            <li className="flex items-start">
              <span className="text-text-nav text-xl mr-2">•</span> School growth
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-12">
        <div className="bg-ssn-card p-8 rounded-xl shadow-xs">
          <h2 className="text-3xl md:text-xl font-bold text-text-black mb-3">Why Schools Trust Seamtrack</h2>
          <ul className="space-y-1 text-text-black/80">
            <li className="flex items-start">
              <span className="text-text-nav text-xl mr-2">•</span> Saves Time & Reduces Admin Stress
            </li>
            <li className="flex items-start">
              <span className="text-text-nav text-xl mr-2">•</span> Boosts Parent Involvement
            </li>
            <li className="flex items-start">
              <span className="text-text-nav text-xl mr-2">•</span> Improves Fee Collection
            </li>
            <li className="flex items-start">
              <span className="text-text-nav text-xl mr-2">•</span> Supports Academic Success
            </li>
            <li className="flex items-start">
              <span className="text-text-nav text-xl mr-2">•</span> Cloud-Based & Secure
            </li>
            <li className="flex items-start">
              <span className="text-text-nav text-xl mr-2">•</span> Human Support & Training Included
            </li>
          </ul>
        </div>
        <div className="relative h-64 md:h-96 lg:h-full rounded-xl overflow-hidden shadow-xs">
          <img
            src={icon3}
            alt="Students collaborating"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default SafeSmartNigerian
