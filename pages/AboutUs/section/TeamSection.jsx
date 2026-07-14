"use client";

export default function TeamSection() {
  const team = [
    {
      name: "Ahmed Al-Rashid",
      role: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=320"
    },
    {
      name: "Sarah Mitchell",
      role: "Chief Operations Officer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=320"
    },
    {
      name: "Michael Chen",
      role: "Chief Financial Officer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=320"
    }
  ];

  return (
    <section className="w-full bg-[#f5f2ed] min-h-screen relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20 md:py-32">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-[#1a1a1a] mb-8">
            Meet Our Visionaries
          </h2>
          <div className="w-20 h-1 bg-[#c8935a] mx-auto" />
            <p className="font-sans text-sm text-[var(--ink)]/80 max-w-2xl mx-auto mt-5">
              A team of experienced professionals dedicated to shaping Dubai's skyline 
              with excellence and innovation.
            </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {team.map((member, index) => (
            <div 
              key={index}
              className="group flex flex-col items-center gap-6 bg-white p-6 rounded-2xl hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-[#c8935a]/30"
            >
              {/* Image */}
              <div className="relative w-64 h-56 overflow-hidden rounded-xl">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="flex-1 text-center w-full">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-[#c8935a]/10 text-[#c8935a] text-xs tracking-widest uppercase rounded-full mb-3">
                    {member.role}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl text-[#1a1a1a] mb-2">{member.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

