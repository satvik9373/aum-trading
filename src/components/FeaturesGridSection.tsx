import React from "react";

const FeaturesGridSection = () => {
  return (
    <section className="w-full flex flex-col items-center py-12 px-2">
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-8 auto-rows-fr">
        {/* Real-World Implementation (75% width, horizontal, col-span-3) */}
        <div className="md:col-span-3 md:row-span-1 bg-black/70 rounded-3xl relative overflow-hidden flex flex-col justify-end min-h-[320px] p-8" style={{backgroundImage: 'url(/real-world-implementation.PNG)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-white mb-2">Real-World Implementation</h3>
            <p className="text-white text-lg font-medium">We focus on - actionable strategies that you can apply immediately to scale your business.</p>
          </div>
        </div>
        {/* Building Leaders in Digital Age (25% width, vertical, col-span-1) */}
        <div className="md:col-span-1 md:row-span-1 bg-white rounded-3xl flex flex-col justify-start min-h-[320px] p-8 relative overflow-hidden">
          <img src="/_Building Leaders in Digital Age.png" alt="Leaders" className="absolute inset-0 w-full h-full object-cover rounded-3xl" />
          <div className="relative z-10 mt-2">
            <h3 className="text-3xl font-bold text-white mb-2">Building <span className="font-black">Leaders</span> in Digital Age</h3>
          </div>
        </div>
        {/* Lifetime Access to the community (vertical, col-span-1, below Building Leaders) */}
        <div className="md:col-span-1 md:row-span-1 bg-[#3A1D0B] rounded-3xl flex flex-col justify-between min-h-[320px] p-6 text-white relative overflow-hidden">
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold mb-2 text-center">Lifetime Access to the community</h3>
            <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80" alt="Community" className="w-full rounded-2xl mt-2 mb-2" style={{borderRadius: '2rem 2rem 2rem 2rem / 2rem 2rem 4rem 4rem'}} />
          </div>
          <p className="text-base font-medium text-center">Ongoing training and program upgrades to keep you ahead of the market.</p>
        </div>
        {/* Personalized Mentorship (horizontal, col-span-3, 65-70% width) */}
        <div className="md:col-span-3 md:row-span-1 bg-black/80 rounded-3xl relative overflow-hidden flex flex-col justify-end min-h-[320px] p-8">
          <img src="/Personalized Mentorship-IMG.PNG" alt="Mentorship" className="absolute inset-0 w-full h-full object-cover rounded-3xl grayscale opacity-60" />
          <div className="absolute inset-0 bg-black/60 rounded-3xl" />
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-2">Personalized Mentorship</h3>
            <p className="text-white text-base font-medium">Direct access to experienced entrepreneurs & business Leaders guiding your journey.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGridSection; 