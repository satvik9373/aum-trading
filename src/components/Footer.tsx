import React from "react";
import { FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";

const linksLeft = [
  { name: "Affiliate Program", href: "#" },
  { name: "About Us", href: "#" },
  { name: "Our Events", href: "#" },
  { name: "Blogs", href: "#" },
];
const linksRight = [
  { name: "Instagram", href: "#" },
  { name: "Youtube", href: "#" },
  { name: "Terms & Conditions", href: "#" },
  { name: "Privacy Policy", href: "#" },
];

const Footer = () => (
  <footer className="w-full pt-20 pb-0 bg-white relative overflow-hidden ">
    <div className="max-w-7xl mx-auto px-4">
      <div className="p-10 md:p-20 flex flex-col md:flex-row justify-between items-start gap-10 relative z-10 min-h-[340px] md:min-h-[420px] w-full">
        {/* Left: Brand, tagline, socials */}
        <div className="flex flex-col items-start gap-6 min-w-[220px]">
          <div className="text-2xl font-bold text-[#1E2134]">AumTrading</div>
          <div className="text-sm text-gray-600">Learn. Build. Grow</div>
          <div className="flex gap-3 mt-2">
            <a href="#" aria-label="YouTube" className="bg-black/10 rounded p-2 hover:bg-black/20 transition"><FaYoutube className="w-6 h-6 text-black" /></a>
            <a href="#" aria-label="Instagram" className="bg-black/10 rounded p-2 hover:bg-black/20 transition"><FaInstagram className="w-6 h-6 text-black" /></a>
            <a href="#" aria-label="LinkedIn" className="bg-black/10 rounded p-2 hover:bg-black/20 transition"><FaLinkedin className="w-6 h-6 text-black" /></a>
          </div>
        </div>
        {/* Right: Links */}
        <div className="flex flex-row gap-16 flex-wrap">
          <ul className="space-y-3 min-w-[140px]">
            {linksLeft.map(link => (
              <li key={link.name}><a href={link.href} className="text-gray-700 hover:text-primary transition font-medium">{link.name}</a></li>
            ))}
          </ul>
          <ul className="space-y-3 min-w-[140px]">
            {linksRight.map(link => (
              <li key={link.name}><a href={link.href} className="text-gray-700 hover:text-primary transition font-medium">{link.name}</a></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;