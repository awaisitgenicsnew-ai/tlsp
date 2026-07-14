"use client";

export default function MissionSection() {
  return (
    <section className="w-full bg-[#f5f2ed] min-h-screen relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20 md:py-32">
        {/* Header */}
        <div className="text-center mb-16">
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-[#1a1a1a] mb-8">
            Creating Spaces That Inspire
          </h2>
          <div className="w-20 h-1 bg-[#c8935a] mx-auto mb-8" />
      
        </div>

        {/* Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mission Card 1 */}
          <div className="group relative bg-white p-10 hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-[#c8935a]/20">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#c8935a] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="w-16 h-16 bg-[#c8935a]/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#c8935a] transition-colors duration-500">
              <svg className="w-8 h-8 text-[#c8935a] group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h3 className="font-display text-2xl mb-4 text-[#1a1a1a]">Quality First</h3>
            <p className="font-sans text-base leading-relaxed text-[#1a1a1a]/60">
              We never compromise on quality. Every material, every finish, 
              every detail is carefully selected to ensure excellence.
            </p>
          </div>

          {/* Mission Card 2 */}
          <div className="group relative bg-white p-10 hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-[#c8935a]/20">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#c8935a] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="w-16 h-16 bg-[#c8935a]/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#c8935a] transition-colors duration-500">
              <svg className="w-8 h-8 text-[#c8935a] group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-display text-2xl mb-4 text-[#1a1a1a]">Innovation</h3>
            <p className="font-sans text-base leading-relaxed text-[#1a1a1a]/60">
              We embrace cutting-edge technology and innovative design to create 
              living spaces that are ahead of their time.
            </p>
          </div>

          {/* Mission Card 3 */}
          <div className="group relative bg-white p-10 hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-[#c8935a]/20">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#c8935a] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="w-16 h-16 bg-[#c8935a]/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#c8935a] transition-colors duration-500">
              <svg className="w-8 h-8 text-[#c8935a] group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="font-display text-2xl mb-4 text-[#1a1a1a]">Customer Focus</h3>
            <p className="font-sans text-base leading-relaxed text-[#1a1a1a]/60">
              Our customers are at the heart of everything we do. We listen, 
              understand, and deliver beyond expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
