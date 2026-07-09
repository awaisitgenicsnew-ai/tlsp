"use client";

export default function AchievementsSection() {
  const achievements = [
    {
      number: "15+",
      label: "Years of Experience",
      description: "Over a decade of excellence in real estate development"
    },
    {
      number: "50+",
      label: "Projects Completed",
      description: "Successfully delivered across the UAE"
    },
    {
      number: "2000+",
      label: "Happy Residents",
      description: "Families who call our properties home"
    },
    {
      number: "25+",
      label: "Industry Awards",
      description: "Recognition for innovation and quality"
    },
    {
      number: "AED 5B+",
      label: "Project Value",
      description: "Total value of developments delivered"
    },
    {
      number: "100%",
      label: "On-Time Delivery",
      description: "Commitment to meeting deadlines"
    }
  ];

  return (
    <section 
      className="w-full bg-[#d9d9d9] text-[var(--ink)] min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 py-10 lg:py-24"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-12">
          <p className="font-sans text-xs tracking-[0.25em] text-[var(--tan)] mb-4">
            — Our Achievements
          </p>
          <h2 className="font-display text-4xl leading-tight mb-4">
            Numbers That Speak
          </h2>
          <p className="font-sans text-sm text-[var(--ink)]/80 max-w-2xl mx-auto">
            Our track record of success is a testament to our commitment to excellence 
            and customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-[#1a1a1a] rounded-lg border border-[var(--tan)]/30 hover:border-[var(--tan)] transition-colors"
            >
              <p className="font-display text-5xl text-[var(--tan)] mb-2">{achievement.number}</p>
              <h3 className="font-display text-xl mb-2 text-white">{achievement.label}</h3>
              <p className="font-sans text-sm text-white/70">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
