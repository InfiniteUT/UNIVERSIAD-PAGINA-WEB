import Link from 'next/link';
import axios from 'axios';

// Función para obtener los datos de los usuarios
async function getUsers() {
  const url = 'https://jsonplaceholder.typicode.com/users';
  const response = await axios.get(url);
  return response.data;
}

// Página que muestra la lista de usuarios
export default async function Users() {
  const users = await getUsers();

  return (
    <div className="container">
      <h1>Lista de Usuarios</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                <Link href={`/users/${user.id}`}>
                  {user.name}
                </Link>
              </td>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
