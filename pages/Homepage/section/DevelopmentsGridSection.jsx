"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { projectApi, getImageUrl } from "@/lib/api";

const FALLBACK_DEVELOPMENTS = [
  {
    title: "PLT Residences",
    location: "Downtown Dubai",
    status: "Coming Soon",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
  },
  {
    title: "Canal House",
    location: "Dubai Canal",
    status: "In Planning",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  },
  {
    title: "The Quarter",
    location: "Al Quoz Arts District",
    status: "In Planning",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
  },
];

export default function DevelopmentsGridSection() {
  const [developments, setDevelopments] = useState(FALLBACK_DEVELOPMENTS);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await projectApi.getAll();
        if (response?.data?.length > 0) {
          // High Demand badge wala featured section me dikhta hai, baki yahan
          const rest = response.data.filter((p) => p.badge !== "High Demand");
          if (rest.length > 0) {
            setDevelopments(rest);
          }
        }
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      }
    };
    fetchProjects();
  }, []);

  return (
    <section id="developments-grid" className="w-full bg-[#d9d9d9] min-h-screen flex items-center justify-center px-6 md:px-20 py-28 sm:pt-[168px]">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-[#211D17] mb-4">Our Developments</h2>
          <p className="text-[14px] leading-[1.7] text-[#4A443A] max-w-2xl mx-auto">
            Discover our portfolio of thoughtfully designed residences across Dubai's most sought-after locations, each crafted with European precision and contemporary elegance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {developments.map((dev, index) => (
            <div key={dev.id || index} className="bg-[#F7F4EC] border border-[rgba(33,29,23,0.10)]">
              {/* Card Visual */}
              <div className="relative h-48 overflow-hidden border-b border-[rgba(33,29,23,0.10)]">
                {dev.image && (
                  <Image
                    src={getImageUrl(dev.image)}
                    alt={dev.imageAlt || dev.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                )}
                {(dev.badge || dev.status) && (
                  <span className="absolute top-4 left-4 text-[10px] font-semibold tracking-widest uppercase px-3 py-1.5 bg-[#211D17] text-[#F7F4EC] z-2">
                    {dev.badge || dev.status}
                  </span>
                )}
              </div>

              {/* Card Body */}
              <div className="px-7 py-4 pb-4">
                <h3 className="font-serif text-[22px] text-[#211D17] mb-1.5">{dev.title}</h3>
                <p className="text-[11.5px] tracking-widest uppercase text-[#8A8172] mb-4.5">{dev.location}</p>
                <a
                  href={dev.primaryButtonLink || "#"}
                  className="text-[12.5px] font-semibold tracking-widest text-[#7C5A2C] inline-flex items-center gap-1.5 hover:gap-2.5 transition-all"
                >
                  View details
                  <span>&rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
