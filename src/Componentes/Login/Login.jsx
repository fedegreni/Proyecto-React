import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true); 
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    const auth = getAuth();

    if (isLogin) {
      
      try {
        await signInWithEmailAndPassword(auth, email, password);
        navigate("/"); 
      } catch (err) {
        setError("Error al iniciar sesión: " + err.message);
      }
    } else {
      
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        setEmail("");
        setPassword("");
        setError(null); 
        navigate("/"); 
      } catch (err) {
        setError("Error al crear cuenta: " + err.message);
      }
    }
  };

  const toggleLogin = () => {
    setIsLogin((prev) => !prev); 
    setError(null); 
  };

  return (
    <div className="login-container">
      <h2>{isLogin ? "Iniciar Sesión" : "Crear Cuenta"}</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">{isLogin ? "Iniciar Sesión" : "Crear Cuenta"}</button>
      </form>
      <p>
        {isLogin ? "¿No tienes cuenta?" : "¿Ya tienes cuenta?"}{" "}
        <button onClick={toggleLogin}>
          {isLogin ? "Crear cuenta" : "Iniciar sesión"}
        </button>
      </p>
    </div>
  );
};

export default Login;
