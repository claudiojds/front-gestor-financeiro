"use client";
import { useState, useRef, useEffect } from "react";

export default function DropdownForm() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left w-50" ref={menuRef}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex justify-between items-center px-4 py-2 text-sm font-medium text-[#CECECE] bg-transparent w-full"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        Genero
        <svg
          className={`ml-2 h-4 w-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.25 8.29a.75.75 0 01-.02-1.08z" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-1 w-50 origin-top-right rounded-md bg-[rgb(17,16,16,0.75)] border border-gray-600 shadow-lg">
          <div className="py-1">
            {["Ação", "Aventura", "Comédia", "Terror", "Drama", "Romance"].map(
              (genre) => (
                <button
                  key={genre}
                  className="w-full px-4 py-2 text-sm text-left text-[#CECECE] hover:bg-gray-700 transition"
                >
                  {genre}
                </button>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
}
