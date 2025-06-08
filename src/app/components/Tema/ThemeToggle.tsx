"use client"
import { useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  return (
    <div className="flex justify-between items-center gap-1">
      <label htmlFor="light" className="text-sm cursor-pointer">Light</label>
      <div
        className={`w-12 h-4.5 px-1 flex justify-between rounded-full transition-colors duration-200 relative cursor-pointer ${
          theme === 'light' ? 'bg-gray-200' : 'bg-gray-500'
        }`}
      >
        <label className="relative flex-1 cursor-pointer flex justify-center items-center">
          <input
            type="radio"
            name="theme"
            value="light"
            id="light"
            checked={theme === 'light'}
            onChange={() => setTheme('light')}
            className="opacity-0 absolute cursor-pointer"
          />
          <span
            className={`w-4 h-4 rounded-full transition-colors duration-200 ${
              theme === 'light' ? 'bg-gray-100' : 'bg-transparent'
            }`}
          />
        </label>
        <label className="relative flex-1 cursor-pointer flex justify-center items-center">
          <input
            type="radio"
            name="theme"
            value="dark"
            id="dark"
            checked={theme === 'dark'}
            onChange={() => setTheme('dark')}
            className="opacity-0 absolute cursor-pointer"
          />
          <span
            className={`w-4 h-4 rounded-full transition-colors duration-200 ${
              theme === 'dark' ? 'bg-gray-600' : 'bg-transparent'
            }`}
          />
        </label>
      </div>
      <label htmlFor="dark" className="text-sm cursor-pointer">Dark</label>
    </div>
  );
}