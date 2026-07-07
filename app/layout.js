import "./globals.css";
import {
  Montserrat,
  Playfair_Display,
  Poppins,
  Cormorant_Garamond,
  Jost,
} from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-playfair",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
});

export const metadata = {
  title: "PLT Tower | Business Bay, Dubai — by PLT Properties",
  description:
    "A standard set in Europe, built in Dubai. Discover PLT Tower, Business Bay's new landmark residence by PLT Properties.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${playfair.variable} ${poppins.variable} ${cormorant.variable} ${jost.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#0b0b0c] text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}