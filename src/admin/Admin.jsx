import useAuth from "../hooks/useAuth";
import { login, logout } from "../firebase/auth";
import Post from "./UploadPost";

export default function Admin() {
  const { user, loading } = useAuth();

  if (loading) return <p>Cargando...</p>;

  // 🔐 NO autenticado
  if (!user) {
    return (
      <div>
        <h2>Admin login</h2>
        <button onClick={login}>Iniciar sesión con Google</button>
      </div>
    );
  }

  // ✅ Autenticado
  return (
    <div>
      <h2>Admin Panel</h2>
      <p>{user.email}</p>
      <button onClick={logout}>Cerrar sesión</button>

      <Post />
    </div>
  );
}
