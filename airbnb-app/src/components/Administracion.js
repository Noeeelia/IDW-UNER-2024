import React, { useState, useEffect } from 'react';
import '../styleForms.css/styleForms.css';

const Administracion = () => {
  const [formData, setFormData] = useState({ descripcion: '' });
  const [editIndex, setEditIndex] = useState(null);
  const [data, setData] = useState([]);
  const [idCounter, setIdCounter] = useState(1);

  useEffect(() => {
    fetch('http://localhost:3001/alojamiento')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error al obtener datos:', error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.descripcion) {
      alert('Por favor, ingrese una descripción.');
      return;
    }

    if (editIndex !== null) {
      const updatedData = { ...data[editIndex], ...formData };

      // Enviar solicitud PUT para actualizar tipos de alojamientos exitentes
      await fetch(`http://localhost:3001/tiposAlojamiento/putTipoAlojamiento/:id/${updatedData.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedData),
      });

      const newData = data.map((item, index) => (index === editIndex ? updatedData : item));
      setData(newData);
      setEditIndex(null);
    } else {
      const newData = { id: idCounter, ...formData };

      // Enviar solicitud POST para crear un nuevo  alojamiento
      await fetch('http://localhost:3001/tiposAlojamiento/createTipoAlojamiento', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newData),
      });

      setData([...data, newData]);
      setIdCounter(idCounter + 1);
    }

    setFormData({ descripcion: '' });
  };

  const handleEdit = (index) => {
    setFormData(data[index]);
    setEditIndex(index);
  };

  const handleDelete = async (index) => {
    const itemToDelete = data[index];

    // Enciar solicitud DELETE para eliminar tipo de alojamiento
    await fetch(`http://localhost:3001/tiposAlojamiento/deleteTipoAlojamiento/:id/${itemToDelete.id}`, {
      method: 'DELETE',
    });

    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
    if (editIndex === index) {
      setFormData({ descripcion: '' });
      setEditIndex(null);
    }
  };

  return (
    <>
      <section className="formulario-alojamiento">
        <h2>Nuevo Tipo de Alojamiento</h2>
        <div className="cuadro-alojamiento">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label className="label" htmlFor="descripcion">Descripción</label>
                <input
                  className="casilla-alojamiento"
                  id="descripcion"
                  name="descripcion"
                  value={formData.descripcion}
                  onChange={handleChange}
                  placeholder="Ingrese su nuevo tipo de alojamiento"
                  required
                />
              </div>
            </div>
            <div className="boton-container-alojamiento">
              <button type="submit">{editIndex !== null ? 'Guardar cambios' : 'Registrar'}</button>
            </div>
          </form>
        </div>
      </section>

      <section className="tabla-alojamiento">
        <div className="contenido-centrado">
          <div className="tabla-container-alojamiento">
            <h2>Alojamientos Registrados</h2>
            <table id="datosTabla">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Descripción</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.descripcion}</td>
                    <td>
                      <button className="edit-btn" onClick={() => handleEdit(index)}>Editar</button>
                      <button className="delete-btn" onClick={() => handleDelete(index)}>Eliminar</button>
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

export default Administracion;
