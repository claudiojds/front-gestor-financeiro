'use client';

import React, { useEffect, useState } from 'react';
import LoginUser from './LoginUser';
import CreateUser from './CreateUser';

export default function Login({
  open,
  onClose,
  onLogin,
}: {
  open: boolean;
  onClose: () => void;
  onLogin: (user: any) => void;
}) {
  const [isRegister, setIsRegister] = useState(false);

  // Sempre resetar o estado ao abrir
  useEffect(() => {
    if (open) {
      setIsRegister(false);
    }
  }, [open]);

  // GARANTIR que o modal só renderiza quando 'open' for true
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-lg border border-gray-200 relative z-50">
        {/* Cabeçalho do Modal */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 rounded-t">
          <h3 className="text-lg font-semibold text-gray-900">
            {isRegister ? 'Criar Conta' : 'Login'}
          </h3>
          <button
            onClick={() => {
              setIsRegister(false);
              onClose();
            }}
            className="text-gray-400 hover:text-gray-900 text-2xl font-bold focus:outline-none"
          >
            &times;
          </button>
        </div>

        {/* Corpo do Modal */}
        <div className="px-6 py-6">
          {isRegister ? (
            <CreateUser
              onSuccess={() => {
                alert('Usuário criado com sucesso!');
                setIsRegister(false);
              }}
            />
          ) : (
            <LoginUser
              onSuccess={(user: any) => {
                alert('Login realizado com sucesso!');
                onLogin(user); // Passa o usuário para o componente pai
                onClose();     // Fecha o modal
              }}
            />
          )}

          {/* Alternância entre Login e Cadastro */}
          <div className="mt-4 text-center">
            {isRegister ? (
              <span className="text-sm">
                Já tem conta?{' '}
                <button
                  className="text-blue-600 underline"
                  onClick={() => setIsRegister(false)}
                >
                  Fazer login
                </button>
              </span>
            ) : (
              <span className="text-sm">
                Não tem conta?{' '}
                <button
                  className="text-blue-600 underline"
                  onClick={() => setIsRegister(true)}
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
