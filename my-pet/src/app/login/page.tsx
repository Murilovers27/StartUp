"use client"; // 👈 ADICIONADO: Marca este arquivo como um Client Component

import React, { useState } from 'react';

const LoginPage: React.FC = () => {
  // Estados para gerenciar o formulário
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de autenticação virá aqui (chamar API, verificar credenciais)
    console.log('Tentativa de login:', { email, password });
    alert('Tentativa de Login efetuada. (A lógica real virá depois!)');
  };

  return (
    <div className="login-page-container">
      <h1 className="login-title">Acessar MyPetZone</h1>
      <p className="login-subtitle">Bem-vindo de volta! Faça seu login abaixo.</p>
      
      {/* Formulário de Login */}
      <form onSubmit={handleSubmit} className="login-form">
        <input 
          type="email" 
          placeholder="E-mail" 
          required 
          className="login-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          type="password" 
          placeholder="Senha" 
          required 
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="login-button btn-default">
          Entrar
        </button>
      </form>

      <p className="signup-link">
        Não tem conta? <a href="/signup">Cadastre-se</a>
      </p>
    </div>
  );
};

export default LoginPage;