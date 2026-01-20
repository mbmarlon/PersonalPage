import useAuth from "../hooks/useAuth";
import { login, logout } from "../firebase/auth";
import Post from "./UploadPost";

export default function Admin() {
  const { user, loading } = useAuth();

  if (loading) return <p>Cargando...</p>;

  // 🔐 NO autenticado
  if (!user) {
    return (
      <div className="admin">
        <h1>Admin login</h1>
        <button onClick={login}>Iniciar sesión con Google</button>
      </div>
    );
  }

  // ✅ Autenticado
  return (
    <div className="admin">
      <h1>Admin Panel</h1>
      <p>{user.email}</p>
      <button className="button" onClick={logout}>
        Cerrar sesión
      </button>

      <Post />
    </div>
  );
}
