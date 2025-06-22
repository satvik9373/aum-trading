import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const achievements = [
  {
    value: 2345,
    label: "Students globally",
    suffix: "+"
  },
  {
    value: 12,
    label: "CR Students collectively generated revenue.",
    suffix: "+"
  },
  {
    value: 100,
    label: "Trainings",
    suffix: "+"
  },
  {
    value: 6,
    label: "Years of Experience",
    suffix: "+"
  },
];

const AchievementsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const numberRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (containerRef.current) {
      const cards = gsap.utils.toArray<HTMLDivElement>(containerRef.current.querySelectorAll('.achievement-card'));
      gsap.from(cards, {
        opacity: 0,
        y: 50,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      // Number counting effect
      cards.forEach((_, idx) => {
        const el = numberRefs.current[idx];
        if (el) {
          gsap.fromTo(el, {
            innerText: 0
          }, {
            innerText: achievements[idx].value,
            duration: 1.5,
            ease: "power1.out",
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 80%",
              once: true
            },
            onUpdate: function () {
              el.innerText = Math.floor(Number(el.innerText)).toLocaleString();
            },
            onComplete: function () {
              el.innerText = achievements[idx].value.toLocaleString();
            }
          });
        }
      });
    }
  }, []);

  return (
    <section className="w-full py-16 flex flex-col items-center">
      <h2 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-[#FFB347] to-[#FFE5B4] bg-clip-text text-transparent">Achievements</h2>
      <p className="text-lg mb-12 text-center max-w-2xl bg-gradient-to-r from-[#FFB347] to-[#FFE5B4] bg-clip-text text-transparent">
        Gain actionable insights and a comprehensive analytics overview to track performance, optimize strategies, and drive growth.
      </p>
      <div ref={containerRef} className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
        {achievements.map((item, idx) => (
          <div
            key={item.label}
            className="achievement-card rounded-2xl bg-white/20 shadow-2xl backdrop-blur-xl border border-white/30 flex flex-col items-center justify-center py-16 px-6 min-h-[220px]"
            style={{ color: "#fff", boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)" }}
          >
            <div
              className="text-5xl font-extrabold mb-2 text-white"
              ref={el => numberRefs.current[idx] = el}
            >
              0{item.suffix}
            </div>
            <div className="text-lg font-medium text-center text-white/90">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AchievementsSection; 