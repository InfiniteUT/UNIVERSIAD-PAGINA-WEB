// Importa axios para hacer la solicitud a la API
import axios from 'axios';

// Función para obtener los datos del usuario desde la API
async function getUser(id) {
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  const response = await axios.get(url);
  return response.data;
}

// Componente de página para mostrar los detalles del usuario
export default async function User({ params }) {
  const user = await getUser(params.id);

  return (
    <div className="container">
      <h1>Información del Usuario</h1>
      <ul>
        <li><strong>ID:</strong> {user.id}</li>
        <li><strong>Nombre:</strong> {user.name}</li>
        <li><strong>Username:</strong> {user.username}</li>
        <li><strong>Email:</strong> {user.email}</li>
        <li><strong>Teléfono:</strong> {user.phone}</li>
        <li><strong>Website:</strong> {user.website}</li>
        <li><strong>Dirección:</strong> {`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}</li>
        <li><strong>Compañía:</strong> {user.company.name}</li>
      </ul>
    </div>
  );
}
