import React, { useState, useEffect } from 'react';
import '../estilosForms.css/styleForms.css';

const AddTipoAlojamiento = () => {
  const [descripcion, setDescripcion] = useState('');
  const [tiposAlojamiento, setTiposAlojamiento] = useState([]);
  const [editando, setEditando] = useState(false);
  const [tipoAlojamientoSeleccionado, setTipoAlojamientoSeleccionado] = useState(null);

  // Función para crear un nuevo tipo de alojamiento
  const enviar = async (e) => {
    e.preventDefault();
    const json = { Descripcion: descripcion };

    try {
      const response = await fetch('http://localhost:3001/tiposAlojamiento/createTipoAlojamiento', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(json)
      });
      if (response.ok) {
        const newTipo = await response.json();
        setTiposAlojamiento([...tiposAlojamiento, newTipo]);
        alert('Se creó correctamente el tipo alojamiento');
        setDescripcion(''); // Limpiar el campo de entrada
      } else {
        alert('Error al crear el tipo de alojamiento');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al establecer la conexión con el servicio');
    }
  };

  // Obtener la lista de tipos de alojamiento al cargar el componente
  useEffect(() => {
    const listar = async () => {
      try {
        const response = await fetch('http://localhost:3001/tiposAlojamiento/getTiposAlojamiento');
        if (response.ok) {
          const data = await response.json();
          setTiposAlojamiento(data);
        } else {
          alert('Error al obtener los tipos de alojamiento');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Error al establecer la conexión con el servicio');
      }
    };

    listar();
  }, []);

  // Función para actualizar un tipo de alojamiento
  const actualizarTipo = async (e) => {
    e.preventDefault();
    if (!tipoAlojamientoSeleccionado) return;

    const json = { Descripcion: descripcion };

    try {
      const response = await fetch(`http://localhost:3001/tiposAlojamiento/putTipoAlojamiento/${tipoAlojamientoSeleccionado.idTipoAlojamiento}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(json)
      });
      if (response.ok) {
        const updatedTipo = await response.json();
        const updatedList = tiposAlojamiento.map(tipo => tipo.idTipoAlojamiento === tipoAlojamientoSeleccionado.idTipoAlojamiento ? updatedTipo : tipo);
        setTiposAlojamiento(updatedList);
        alert('Se actualizó correctamente el tipo de alojamiento');
        setDescripcion(''); // Limpiar el campo de entrada
        setEditando(false);
        setTipoAlojamientoSeleccionado(null);
      } else {
        alert('Error al actualizar el tipo de alojamiento');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al establecer la conexión con el servicio');
    }
  };

  // Función para seleccionar un tipo de alojamiento para editar
  const seleccionarParaEditar = (tipo) => {
    setDescripcion(tipo.Descripcion);
    setEditando(true);
    setTipoAlojamientoSeleccionado(tipo);
  };

  // Función para eliminar un tipo de alojamiento
  const eliminarTipo = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/tiposAlojamiento/deleteTipoAlojamiento/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        const updatedList = tiposAlojamiento.filter(tipo => tipo.idTipoAlojamiento !== id);
        setTiposAlojamiento(updatedList);
        alert('Se eliminó correctamente el tipo de alojamiento');
      } else {
        alert('Error al eliminar el tipo de alojamiento');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al establecer la conexión con el servicio');
    }
  };

  return (
    <>
      <section className="formulario-alojamiento">
        <h2>{editando ? 'Actualizar Tipo de Alojamiento' : 'Nuevo Tipo de Alojamiento'}</h2>
        <div className="cuadro-alojamiento">
          <form onSubmit={editando ? actualizarTipo : enviar}>
            <div className="form-row">
              <div className="form-group">
                <label className="label" htmlFor="descripcion">Descripción</label>
                <input
                  className="casilla-alojamiento"
                  type='text'
                  id="descripcion"
                  value={descripcion}
                  onChange={(e) => setDescripcion(e.target.value)}
                  placeholder="Ingrese su nuevo tipo de alojamiento"
                  required
                />
              </div>
            </div>
            <div className="boton-container-alojamiento">
              <button type="submit">{editando ? 'Guardar Cambios' : 'Registrar'}</button>
            </div>
          </form>
        </div>
      </section>

      <section className="tabla-tipos-alojamiento">
        <div className="contenido-centrado">
          <div className="tabla-container-tipos-alojamiento">
            <h2 className='titulos-h2'>Tipos Alojamientos Registrados</h2>
            <table id="datosTabla">
              <thead>
                <tr>
                  <th>Descripción</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {tiposAlojamiento.map((tipo) => (
                  <tr key={tipo.idTipoAlojamiento}>
                    <td>{tipo.Descripcion}</td>
                    <td>
                      <button className='edit-btn' onClick={() => seleccionarParaEditar(tipo)}>Editar</button>
                      <button className='delete-btn' onClick={() => eliminarTipo(tipo.idTipoAlojamiento)}>Eliminar</button>
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

export default AddTipoAlojamiento;


