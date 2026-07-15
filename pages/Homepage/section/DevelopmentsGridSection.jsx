"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { projectApi, getImageUrl } from "@/lib/api";

export default function DevelopmentsGridSection() {
  const [developments, setDevelopments] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await projectApi.getAll({ publication_status: "published" });
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

  if (developments.length === 0) {
    return null;
  }

  return (
    <section id="developments-grid" className="w-full bg-[#1d1913] min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 py-16 md:py-28">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-[clamp(32px,4vw,40px)] text-[#211D17] mb-4">Our Developments</h2>
          <p className="text-[14px] leading-[1.7] text-[#4A443A] max-w-2xl mx-auto">
            Discover our portfolio of thoughtfully designed residences across Dubai's most sought-after locations, each crafted with European precision and contemporary elegance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {developments.map((dev, index) => (
            <div key={dev.id || index} className="bg-[#F7F4EC] border border-[rgba(33,29,23,0.10)]">
              {/* Card Visual */}
              <div className="relative h-48 md:h-56 overflow-hidden border-b border-[rgba(33,29,23,0.10)]">
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
              <div className="px-5 md:px-7 py-4 pb-4">
                <h3 className="font-serif text-[clamp(18px,2.5vw,22px)] text-[#211D17] mb-1.5">{dev.title}</h3>
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
