import React, { useState, useEffect } from 'react';
import '../estilosForms.css/styleServicio.css';

const AddServicio = () => {
  const [nombre, setNombre] = useState('');
  const [servicios, setServicios] = useState([]);
  const [editando, setEditando] = useState(false);
  const [servicioSeleccionado, setServicioSeleccionado] = useState(null);

  // Función para crear un nuevo servicio
  const enviar = async (e) => {
    e.preventDefault();
    const json = { Nombre: nombre };

    try {
      const response = await fetch('http://localhost:3001/servicio/createServicio', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(json)
      });
      if (response.ok) {
        const newServicio = await response.json();
        setServicios([...servicios, newServicio]);
        alert('Servicio creado correctamente');
        setNombre(''); // Limpiar el campo de entrada
      } else {
        alert('Error al crear el servicio');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al establecer la conexión con el servicio');
    }
  };

  // Obtener la lista de servicios al cargar el componente
  useEffect(() => {
    const listar = async () => {
      try {
        const response = await fetch('http://localhost:3001/servicio/getAllServicios');
        if (response.ok) {
          const data = await response.json();
          setServicios(data);
        } else {
          alert('Error al obtener los servicios');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Error al establecer la conexión con el servicio');
      }
    };

    listar();
  }, []);

  // Función para actualizar un servicio
  const actualizarServicio = async (e) => {
    e.preventDefault();
    if (!servicioSeleccionado) return;

    const json = { Nombre: nombre };

    try {
      const response = await fetch(`http://localhost:3001/servicio/updateServicio/${servicioSeleccionado.idServicio}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(json)
      });
      if (response.ok) {
        const updatedServicio = await response.json();
        const updatedList = servicios.map(servicio => servicio.idServicio === servicioSeleccionado.idServicio ? updatedServicio : servicio);
        setServicios(updatedList);
        alert('Servicio actualizado correctamente');
        setNombre(''); // Limpiar el campo de entrada
        setEditando(false);
        setServicioSeleccionado(null);
      } else {
        alert('Error al actualizar el servicio');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al establecer la conexión con el servicio');
    }
  };

  // Función para seleccionar un servicio para editar
  const seleccionarParaEditar = (servicio) => {
    setNombre(servicio.Nombre);
    setEditando(true);
    setServicioSeleccionado(servicio);
  };

  // Función para eliminar un servicio
  const eliminarServicio = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/servicio/deleteServicio/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        const updatedList = servicios.filter(servicio => servicio.idServicio !== id);
        setServicios(updatedList);
        alert('Servicio eliminado correctamente');
      } else {
        alert('Error al eliminar el servicio');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al establecer la conexión con el servicio');
    }
  };

  return (
    <>
      <section className="formulario-servicio">
        <h2>{editando ? 'Actualizar Servicio' : 'Nuevo Servicio'}</h2>
        <div className="cuadro-servicio">
          <form onSubmit={editando ? actualizarServicio : enviar}>
            <div className="form-row">
              <div className="form-group">
                <label className="label" htmlFor="nombre">Nombre del Servicio</label>
                <input
                  className="casilla-servicio"
                  type='text'
                  id="nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Ingrese el nombre del servicio"
                  required
                />
              </div>
            </div>
            <div className="boton-container-servicio">
              <button type="submit">{editando ? 'Guardar Cambios' : 'Registrar'}</button>
            </div>
          </form>
        </div>
      </section>

      <section className="tabla-servicios">
        <div className="contenido-centrado">
          <div className="tabla-container-servicios">
            <h2 className='titulos-h2'>Servicios Registrados</h2>
            <table id="datosTabla">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {servicios.map((servicio) => (
                  <tr key={servicio.idServicio}>
                    <td>{servicio.idServicio}</td>
                    <td>{servicio.Nombre}</td>
                    <td>
                      <button className='edit-btn' onClick={() => seleccionarParaEditar(servicio)}>Editar</button>
                      <button className='delete-btn' onClick={() => eliminarServicio(servicio.idServicio)}>Eliminar</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddServicio;

