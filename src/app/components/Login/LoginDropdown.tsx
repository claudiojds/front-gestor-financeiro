'use client';

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import LoginModal from "./LoginModal";

export default function LoginDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { data: session, status } = useSession();

  // Fecha o dropdown se clicar fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    await signOut({ redirect: false });
    setIsOpen(false);
    setModalOpen(false); // Garante que o modal feche
  };

  return (
    <div className="relative inline-block text-left w-50" ref={menuRef}>
      {/* Botão dropdown */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex justify-between items-center px-4 py-2 text-sm font-medium text-[#252323] bg-transparent w-full cursor-pointer"
      >
        {
          status !== "authenticated"
          ? "Olá, faça seu login"
          : `Olá, ${session.user?.nome}`
        }
        <svg
          className={`ml-2 h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.25 8.29a.75.75 0 01-.02-1.08z" />
        </svg>
      </button>

      {/* Dropdown com opções */}
      {isOpen && (
        <div className="absolute right-0 z-10 mt-1 w-50 origin-top-right rounded-md bg-[rgba(143,139,139,0.75)] shadow-lg">
          <div className="py-1">
            {status !== "authenticated" && (
              <button
                className="w-full px-4 py-2 text-sm text-left text-[#181515] hover:bg-[rgba(143,139,139,0.75)]"
                onClick={() => {
                  setIsOpen(false);
                  setModalOpen(true); // Abre modal de login
                }}
              >
                Logar
              </button>
            )}
            {status === "authenticated" && (
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

      {/* Modal controlado internamente */}
      <LoginModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onLogin={() => {
          setIsOpen(false);
          setModalOpen(false);
          router.refresh();
        }}
      />
    </div>
  );
}
