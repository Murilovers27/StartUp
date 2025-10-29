"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

// 1. Importando os ícones que acabamos de instalar
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }
    console.log("Tentativa de cadastro com:", { name, email, password });
    // Aqui você chamaria sua API de cadastro
  };

  return (
    <div className={styles.signupPage}>
      <div className={styles.signupCard}>
        <h1 className={styles.title}>Crie sua conta</h1>
        <p className={styles.subtitle}>Rápido e fácil, comece agora.</p>

        <form onSubmit={handleSubmit} className={styles.form}>
          
          {/* Campo de Nome */}
          <div className={styles.inputGroup}>
            <span className={styles.inputIcon}><FaUser /></span>
            <input
              type="text"
              placeholder="Nome Completo"
              className={styles.input}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Campo de Email */}
          <div className={styles.inputGroup}>
            <span className={styles.inputIcon}><FaEnvelope /></span>
            <input
              type="email"
              placeholder="E-mail"
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Campo de Senha */}
          <div className={styles.inputGroup}>
            <span className={styles.inputIcon}><FaLock /></span>
            <input
              type="password"
              placeholder="Senha"
              className={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength={6} // Boa prática
              required
            />
          </div>

          {/* Campo de Confirmar Senha */}
          <div className={styles.inputGroup}>
            <span className={styles.inputIcon}><FaLock /></span>
            <input
              type="password"
              placeholder="Confirme sua senha"
              className={styles.input}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            Cadastrar
          </button>
        </form>

        <p className={styles.loginLink}>
          Já tem uma conta? 
          <Link href="/login">
            <span> Acesse aqui</span>
          </Link>
        </p>
      </div>
    </div>
  );
}