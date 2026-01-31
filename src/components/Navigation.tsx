import React, { useState, useEffect } from "react";
import {
  BiHome,
  BiUser,
  BiCodeAlt,
  BiBriefcase,
  BiPhone,
} from "react-icons/bi";

const IconSize = 23;

const navItems = [
  { id: "home", label: "Home", icon: <BiHome size={IconSize} /> },
  { id: "about", label: "About", icon: <BiUser size={IconSize} /> },
  { id: "works", label: "Works", icon: <BiBriefcase size={IconSize} /> },
  { id: "skills", label: "Skills", icon: <BiCodeAlt size={IconSize} /> },
  { id: "contacts", label: "Contact", icon: <BiPhone size={IconSize} /> },
];

function Navigation() {
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },

      {
        root: null,
        rootMargin: "-10% 0px -80% 0px",
        threshold: 0,
      }
    );

    navItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToTarget = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="fixed top-10 left-1/2 transform -translate-x-1/2 z-50 border border-white/30 rounded-full backdrop-blur-md bg-white/5 bg-opacity-50">
      <div className="flex flex-row p-1 items-center gap-1">
        {navItems.map(({ id, label, icon }) => (
          <div
            key={id}
            className={`flex flex-row items-center cursor-pointer rounded-full p-2 transition-all duration-300 ease-in-out ${
              activeSection === id ? "bg-white/10" : "hover:bg-white/5"
            }`}
            onClick={() => scrollToTarget(id)}
          >
            <div
              className={`transition-colors ${
                activeSection === id ? "text-blue-300" : "text-white"
              }`}
            >
              {icon}
            </div>
            <div
              className={`grid transition-[grid-template-columns] duration-300 ease-in-out ${
                activeSection === id ? "grid-cols-[1fr]" : "grid-cols-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <span
                  className={`pl-2 text-white text-sm font-medium transition-opacity duration-300 whitespace-nowrap inline-block delay-75 ${
                    activeSection === id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {label}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Navigation;
