import { useState, useEffect } from "react";
import axios from "axios";

export default function LoginModal({
  open,
  onClose,
  onLogin,
}: {
  open: boolean;
  onClose: () => void;
  onLogin: (user: any) => void;
}) {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  // Resetar para login sempre que o modal for aberto
  useEffect(() => {
    if (open) {
      setIsRegister(false);
      setError("");
    }
  }, [open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      if (isRegister) {
        const res = await axios.post("http://localhost:3000/auth/register", {
          nome,
          email,
          senha,
        });
        onLogin(res.data);
        onClose();
      } else {
        const res = await axios.post("http://localhost:3000/auth/login", {
          login,
          senha,
        });
        onLogin(res.data);
        onClose();
      }
    } catch {
      setError(isRegister ? "Erro ao criar conta" : "Usuário ou senha inválidos");
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-lg border border-gray-200">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 rounded-t">
          <h3 className="text-lg font-semibold text-gray-900">
            {isRegister ? "Criar Conta" : "Login"}
          </h3>
          <button
            onClick={() => {
              setIsRegister(false); // Garante que o modal feche em modo login
              onClose();
            }}
            className="text-gray-400 hover:text-gray-900 text-2xl font-bold focus:outline-none"
            aria-label="Fechar"
          >
            &times;
          </button>
        </div>

        {/* Modal Body */}
        <div className="px-6 py-6">
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            {isRegister ? (
              <>
                <input
                  type="text"
                  placeholder="Nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="form-input block w-full rounded border border-gray-300 px-3 py-2"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input block w-full rounded border border-gray-300 px-3 py-2"
                  required
                />
                <input
                  type="password"
                  placeholder="Senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  className="form-input block w-full rounded border border-gray-300 px-3 py-2"
                  required
                />
              </>
            ) : (
              <>
                <input
                  type="text"
                  placeholder="Nome ou Email"
                  value={login}
                  onChange={(e) => setLogin(e.target.value)}
                  className="form-input block w-full rounded border border-gray-300 px-3 py-2"
                  required
                />
                <input
                  type="password"
                  placeholder="Senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  className="form-input block w-full rounded border border-gray-300 px-3 py-2"
                  required
                />
              </>
            )}
            {error && <span className="text-red-500 text-sm">{error}</span>}
            <button
              type="submit"
              className="w-full mt-2 py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded"
            >
              {isRegister ? "Criar Conta" : "Entrar"}
            </button>
          </form>

          <div className="mt-4 text-center">
            {isRegister ? (
              <span className="text-sm">
                Já tem conta?{" "}
                <button
                  className="text-blue-600 underline"
                  onClick={() => {
                    setIsRegister(false);
                    setError("");
                  }}
                >
                  Fazer login
                </button>
              </span>
            ) : (
              <span className="text-sm">
                Não tem conta?{" "}
                <button
                  className="text-blue-600 underline"
                  onClick={() => {
                    setIsRegister(true);
                    setError("");
                  }}
                >
                  Criar conta
                </button>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
