import React, { useState } from 'react';
import { useAuth } from '../ruteo/AuthContext'; // (6). Importando contexto
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  
  // (6). Usando el contexto
  const { signIn } = useAuth();               
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignIn = (e) => {
  }

  return (
    <div id='public'>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSignIn}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Contraseña:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
}

export default LoginForm;
