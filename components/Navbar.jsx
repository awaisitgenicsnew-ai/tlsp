"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const LINKS = [
  { label: "HOME", href: "/" },
  { label: "PLT TOWER", href: "/plt-tower" },
  { label: "ABOUT", href: "/about-us" },
  { label: "CONTACT", href: "/contact-us" },
];


const DEFAULT_COLORS = {
  top: {
    bg: "transparent",
    border: "transparent",
    text: "#ffffff",
    subText: "rgba(255,255,255,0.8)",
    link: "rgba(255,255,255,0.9)",
    linkHover: "#ffffff",
    buttonBorder: "#ffffff",
    buttonText: "#ffffff",
    buttonHoverBg: "#ffffff",
    buttonHoverText: "#000000",
  },
  scrolled: {
    bg: "transparent",
    border: "rgba(0,0,0,0.1)",
    text: "#000000",
    subText: "rgba(0,0,0,0.6)",
    link: "rgba(0,0,0,0.8)",
    linkHover: "#000000",
    buttonBorder: "#000000",
    buttonText: "#000000",
    buttonHoverBg: "#000000",
    buttonHoverText: "#ffffff",
  },
  mobile: {
    bg: "#000000",
    border: "rgba(255,255,255,0.1)",
    text: "#ffffff",
    link: "rgba(255,255,255,0.9)",
    linkHover: "#ffffff",
    buttonBg: "#ffffff",
    buttonText: "#000000",
  },
};

export default function Navbar({ colors = {} }) {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Merge user colors with defaults
  const theme = {
    top: { ...DEFAULT_COLORS.top, ...(colors.top || {}) },
    scrolled: { ...DEFAULT_COLORS.scrolled, ...(colors.scrolled || {}) },
    mobile: { ...DEFAULT_COLORS.mobile, ...(colors.mobile || {}) },
  };

  // Active state ke hisaab se colors select karo
  const c = isScrolled ? theme.scrolled : theme.top;
  const m = theme.mobile;

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // CSS variables — inhi se saare colors control hote hain
  const cssVars = {
    "--nav-bg": c.bg,
    "--nav-border": c.border,
    "--nav-text": c.text,
    "--nav-subtext": c.subText,
    "--nav-link": c.link,
    "--nav-link-hover": c.linkHover,
    "--nav-btn-border": c.buttonBorder,
    "--nav-btn-text": c.buttonText,
    "--nav-btn-hover-bg": c.buttonHoverBg,
    "--nav-btn-hover-text": c.buttonHoverText,
    "--nav-mobile-bg": m.bg,
    "--nav-mobile-border": m.border,
    "--nav-mobile-text": m.text,
    "--nav-mobile-link": m.link,
    "--nav-mobile-link-hover": m.linkHover,
    "--nav-mobile-btn-bg": m.buttonBg,
    "--nav-mobile-btn-text": m.buttonText,
    "--nav-mobile-subtext": m.subText || "rgba(255,255,255,0.8)",
  };

  return (
    <header
      style={cssVars}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[var(--nav-mobile-bg)] text-[color:var(--nav-mobile-text)] md:bg-[var(--nav-bg)] md:text-[color:var(--nav-text)] border-b border-[color:var(--nav-mobile-border)] md:border-[color:var(--nav-border)]"
    >
      {/* Main Navbar Bar */}
      <div className="relative flex items-center justify-between px-6 sm:px-10 py-5">

        {/* Brand Logo */}
        <Link href="/" className="leading-tight flex-shrink-0 z-10">
          <span className="block font-logo text-lg sm:text-xl tracking-[0.15em] font-bold transition-colors duration-300 text-[color:var(--nav-mobile-text)] md:text-[color:var(--nav-text)]">
            PLT
          </span>
          <span className="block font-logo text-xs sm:text-sm tracking-[0.25em] font-light -mt-0.5 transition-colors duration-300 text-[color:var(--nav-mobile-subtext)] md:text-[color:var(--nav-subtext)]">
            PROPERTIES
          </span>
        </Link>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {LINKS.map((link) => (
            link.href.startsWith('/') ? (
              <Link
                key={link.label}
                href={link.href}
                className="font-sans font-[400] text-[14px] tracking-[2px] uppercase transition-colors duration-300 whitespace-nowrap text-[color:var(--nav-link)] hover:text-[color:var(--nav-link-hover)]"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="font-sans font-normal text-[14px] tracking-[2px] transition-colors duration-300 whitespace-nowrap text-[color:var(--nav-link)] hover:text-[color:var(--nav-link-hover)]"
              >
                {link.label}
              </a>
            )
          ))}
        </nav>

        {/* Right Side: Action Button + Mobile Burger Menu */}
        <div className="flex items-center gap-4 flex-shrink-0 z-10">
          <a
            href="/register-interest"
            className="hidden lg:inline-flex items-center px-6 py-2.5 font-sans  font-[400] text-[14px] tracking-[2px] uppercase transition-all duration-300 border border-[color:var(--nav-btn-border)] text-[color:var(--nav-btn-text)] hover:bg-[var(--nav-btn-hover-bg)] hover:text-[color:var(--nav-btn-hover-text)]"
          >
            Register Interest
          </a>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 transition-colors duration-300 text-[color:var(--nav-mobile-text)] md:text-[color:var(--nav-text)] hover:opacity-80"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>

      {/* --- MOBILE DROPDOWN NAVIGATION --- */}
      {open && (
        <div className="lg:hidden px-6 pb-8 pt-2 animate-fadeIn bg-[var(--nav-mobile-bg)] border-t border-[color:var(--nav-mobile-border)]">
          <nav className="flex flex-col gap-5">
            {LINKS.map((link) => (
              link.href.startsWith('/') ? (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-sans text-[14px] font-normal tracking-[2px] transition-colors py-1 text-[color:var(--nav-mobile-link)] hover:text-[color:var(--nav-mobile-link-hover)]"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-sans text-[14px] font-normal tracking-[2px] transition-colors py-1 text-[color:var(--nav-mobile-link)] hover:text-[color:var(--nav-mobile-link-hover)]"
                >
                  {link.label}
                </a>
              )
            ))}
            
            <a
              href="/register-interest"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent font-sans font-[400] text-[14px] tracking-[2px] uppercase mt-4 transition-all duration-300 bg-[var(--nav-mobile-btn-bg)] text-[color:var(--nav-mobile-btn-text)] hover:opacity-90"
            >
              Register Interest
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}