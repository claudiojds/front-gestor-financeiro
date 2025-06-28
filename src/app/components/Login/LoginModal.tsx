'use client';

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Login from "./Login";

export default function LoginModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [user, setUser] = useState<{ nome: string } | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      try {
        const parsed = JSON.parse(userData);
        if (parsed && typeof parsed.nome === "string") {
          setUser(parsed);
        } else {
          localStorage.removeItem("user");
        }
      } catch {
        localStorage.removeItem("user");
      }
    }
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogin = (userData: any) => {
    if (userData?.nome) {
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
    }
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left w-50" ref={menuRef}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex justify-between items-center px-4 py-2 text-sm font-medium text-[#252323] bg-transparent w-full cursor-pointer"
      >
        {user ? `Olá, ${user.nome}` : "Olá, faça seu login"}
        <svg
          className={`ml-2 h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.25 8.29a.75.75 0 01-.02-1.08z" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-1 w-50 origin-top-right rounded-md bg-[rgba(143,139,139,0.75)] shadow-lg">
          <div className="py-1">
            {!user && (
              <button
                className="w-full px-4 py-2 text-sm text-left text-[#181515] hover:bg-[rgba(143,139,139,0.75)]"
                onClick={() => {
                  setModalOpen(true);
                  setIsOpen(false);
                }}
              >
                Logar
              </button>
            )}
            {user && (
              <>
                <button
                  className="w-full px-4 py-2 text-sm text-left text-[#181515] hover:bg-[rgba(143,139,139,0.75)]"
                  onClick={() => {
                    setIsOpen(false);
                    router.push("/index/configuracoes");
                  }}
                >
                  Configurações
                </button>
                <button
                  className="w-full px-4 py-2 text-sm text-left text-[#181515] hover:bg-[rgba(143,139,139,0.75)]"
                  onClick={handleLogout}
                >
                  Sair
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Modal com formulários de login/cadastro */}
      <Login
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onLogin={handleLogin}
      />
    </div>
  );
}
