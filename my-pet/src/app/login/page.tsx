import React, { useState } from 'react';

const LoginPage = () => {
  // Estado para armazenar os valores dos inputs
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // Função para lidar com o envio do formulário
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // Impede o recarregamento da página
    event.preventDefault();

    // Lógica de autenticação (aqui você chamaria sua API)
    console.log('Dados do Login:');
    console.log('Email:', email);
    console.log('Senha:', password);

    alert(`Tentativa de login com o email: ${email}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="seuemail@exemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <div>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        
        <button type="submit">
          Entrar
        </button>
      </form>
    </div>
  );
};

export default LoginPage;