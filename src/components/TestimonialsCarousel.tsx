import React from "react";

const testimonials = [
  {
    name: "Saniya",
    location: "Pakistan",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    text: "I am so grateful that I joined Alpha X university. From struggling at every point to achieving all those milestone alpha's 1:1 sessions and all the trainings made this possible. No one can guide you and give attention at your growth the way this community provide. Totally worth it."
  },
  {
    name: "Samra Khan",
    location: "Delhi",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    text: "Before joining alpha, my content creation was very weak but from here I learned how to create content on insta in the right way, or the biggest thing I learned from deep inside is that I started working on YouTube because this is the future, today my channel is monetized or I learned 3 lakh rupees from YouTube by doing sales in just 5 months."
  },
  {
    name: "Shaikh Ammrah",
    location: "Andhra Pradesh",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    text: "I learn lot of things from alpha and i am implementing also by this sessions I understand many things tqs to sizz deep sir for guiding as this is such a helpful for affiliate marketers."
  },
  {
    name: "Shalu Thakur",
    location: "Himachal Pradesh",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    text: "I was struggling to make money but after joining Alpha my life took a dramatic turn. In just a few months, I've earned over... The support and training provided by Alpha have been instrumental in helping me achieve financial stability and freedom."
  },
  {
    name: "Baishaki",
    location: "Kolkata",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    text: "I like way of teaching and guiding tell us to what do and what not do I really got inspired from this training thank you for providing well manner that how to maintain work life and personal life and with dedication and effort person success in life once again thank you."
  },
  {
    name: "Sangeeta",
    location: "Delhi",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    text: "The Alpha Mentorship Program, led by Sizz Deep Sir, has been a life-changing experience for me. This program goes beyond just affiliate marketing—it's about transforming every aspect of your life, from building strong habits to living a healthier and more disciplined lifestyle."
  },
  {
    name: "Oashin",
    location: "Punjab",
    image: "https://randomuser.me/api/portraits/women/7.jpg",
    text: "Personal sessions is really helpful and motivated whenever I attended. What was most changing for me, is that I feel proud to be a part of Alpha X University. So satisfied & highly recommend."
  },
  {
    name: "Md Kaif",
    location: "Uttar Pradesh",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
    text: "This mentorship 1:1 guidance tell me how to do work ethically and how to build brand on Social media with new strategies. It helps me to build me strong mindset about my career growth. Highly appreciated team AX university to give impact on my life and my growth how to get success in my field."
  }
];

const Card = ({ t }: { t: typeof testimonials[0] }) => (
  <div
    className="flex flex-row items-center bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl min-h-[260px] h-[260px] p-4 glass-card transition-all duration-300 hover:shadow-3xl hover:scale-105 hover:bg-white/30 cursor-pointer mx-2 w-[340px]"
    style={{ boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)" }}
  >
    <div className="flex-shrink-0 flex items-center justify-center h-full w-32 bg-white/60 rounded-2xl overflow-hidden mr-4" style={{ borderRadius: '1.5rem' }}>
      <img
        src={t.image}
        alt={t.name}
        className="h-full w-32 object-cover rounded-2xl"
        style={{ objectPosition: 'center' }}
      />
    </div>
    <div className="flex-1 w-full text-left flex flex-col justify-center">
      <div className="font-bold text-lg text-black mb-1">{t.name}</div>
      <div className="text-xs text-gray-700 mb-2">{t.location}</div>
      <div className="text-gray-800 text-sm leading-relaxed line-clamp-6">
        {t.text}
      </div>
    </div>
  </div>
);

const TestimonialsCarousel = () => (
  <section className="w-full py-20 px-0 bg-gradient-to-br from-[#1E2134] via-[#5D5DFF] to-[#FB5E20] overflow-x-hidden">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-2 text-white">Why students AumTrading Institute</h2>
      <p className="text-center text-lg text-white/80 mb-12 max-w-2xl mx-auto">
        Here's what some of our satisfied students have to say about our teachings.
      </p>
    </div>
    <div className="space-y-8 w-full">
      {/* Top row: left-to-right */}
      <div className="w-full overflow-x-hidden">
        <div className="flex w-max animate-marquee gap-4">
          {[...testimonials, ...testimonials].map((t, idx) => (
            <Card t={t} key={`top-${idx}`} />
          ))}
        </div>
      </div>
      {/* Bottom row: right-to-left */}
      <div className="w-full overflow-x-hidden">
        <div className="flex w-max animate-marquee-reverse gap-4">
          {[...testimonials, ...testimonials].map((t, idx) => (
            <Card t={t} key={`bottom-${idx}`} />
          ))}
        </div>
      </div>
    </div>
    <style>{`
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      @keyframes marquee-reverse {
        0% { transform: translateX(-50%); }
        100% { transform: translateX(0); }
      }
      .animate-marquee {
        animation: marquee 32s linear infinite;
      }
      .animate-marquee-reverse {
        animation: marquee-reverse 32s linear infinite;
      }
    `}</style>
  </section>
);

export default TestimonialsCarousel; 