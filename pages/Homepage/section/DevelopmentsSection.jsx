"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { projectApi, getImageUrl } from "@/lib/api";

export default function DevelopmentsSection() {
  const router = useRouter();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await projectApi.getAll({ badge: "High Demand", publication_status: "published" });
        if (response?.data?.length > 0) {
          setProject(response.data[0]);
        }
      } catch (error) {
        console.error("Failed to fetch featured project:", error);
      }
    };
    fetchProject();
  }, []);

  const handleButtonClick = (link) => {
    if (!link) return;
    if (link.startsWith("http")) {
      window.open(link, "_blank");
    } else {
      router.push(link);
    }
  };

  const scrollToDevelopments = () => {
    const panel = document.getElementById('section-developments-grid');
    if (!panel) return;

    if (window.matchMedia('(min-width: 768px)').matches) {
      // Desktop: horizontal scroll is driven by GSAP ScrollTrigger (pinned).
      // Scroll the window vertically to the pin position matching this panel,
      // so ScrollTrigger stays in sync and the navbar theme updates correctly.
      window.scrollTo({ top: panel.offsetLeft, behavior: 'smooth' });
    } else {
      panel.scrollIntoView({ behavior: 'smooth' });
    }
  };
  if (!project) {
    return null;
  }

  return (
    <section className="w-full bg-[#14110E] min-h-screen flex items-center justify-center px-6 md:px-20 py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Content */}
        <div>
          <div className="flex gap-2 mb-7">
            {project.badge && (
              <span className="text-[11px] font-semibold tracking-[0.14em] uppercase px-3.5 py-1.5 bg-[#ffffff] text-[#F7F4EC] rounded-sm">
                {project.badge}
              </span>
            )}
          </div>

          <h2  className="font-serif text-4xl md:text-5xl lg:text-[44px] leading-[0.98] tracking-[-0.01em] text-[#ffffff] mb-4.5">
            {project.title}
          </h2>

          <p className="text-[12px] font-semibold tracking-[0.18em] uppercase text-[#7C5A2C] mb-6 flex items-center gap-2.5">
            <span className="w-[22px] h-px bg-[#7C5A2C]"></span>
            {project.location}
          </p>

          <p className="text-[14px] leading-[1.7] text-[#ffffff] max-w-[760px] mb-1">
            {project.description}
          </p>

          <div className="flex border-t border-[rgba(33,29,23,0.18)] pt-6.5 mb-9">
            <div className="pr-10 mr-10 border-r border-[rgba(33,29,23,0.10)]">
              <p className="text-[10.5px] tracking-[0.14em] uppercase text-[#8A8172] font-semibold mb-2">Type</p>
              <p className="font-serif text-[22px] text-[#ffffff]">{project.type}</p>
            </div>
            <div className="pr-10 mr-10 border-r border-[rgba(33,29,23,0.10)]">
              <p className="text-[10.5px] tracking-[0.14em] uppercase text-[#8A8172] font-semibold mb-2">Handover</p>
              <p className="font-serif text-[22px] text-[#ffffff]">{project.handover}</p>
            </div>
            <div>
              <p className="text-[10.5px] tracking-[0.14em] uppercase text-[#8A8172] font-semibold mb-2">Payment</p>
              <p className="font-serif text-[22px] text-[#ffffff]">{project.payment}</p>
            </div>
          </div>

          <div className="flex items-center gap-7">
            <button
              onClick={() => handleButtonClick(project.primaryButtonLink)}
              className="text-[12.5px] font-semibold tracking-[0.1em] uppercase px-7.5 py-4 bg-[#ffffff] text-[#F7F4EC] border-none cursor-pointer hover:bg-[#7C5A2C] transition-colors"
            >
              {project.primaryButtonText || "View development"}
            </button>
            <button
              onClick={() => handleButtonClick(project.secondaryButtonLink)}
              className="text-[12.5px] font-semibold tracking-[0.1em] uppercase px-7.5 py-4 bg-transparent text-[#ffffff] border border-[rgba(33,29,23,0.18)] flex items-center gap-2.5 cursor-pointer hover:border-[#7C5A2C] hover:text-[#7C5A2C] transition-colors"
            >
              {project.secondaryButtonText || "Register interest"}
              <span>&rarr;</span>
            </button>
          </div>
        </div>

        {/* Right: Elevation/Visual */}
        <div className="relative flex flex-col justify-center items-center h-full gap-6">
          <div className="relative w-full  h-90 overflow-hidden rounded-lg">
            {project.image && (
              <Image
                src={getImageUrl(project.image)}
                alt={project.imageAlt || project.title}
                fill
                className="object-cover"
                priority
                unoptimized
              />
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
