import React, { useState, useEffect } from 'react';
import AddImagen from './AddImagen';
import '../estilosForms.css/StyleImagen.css'
import '../estilosForms.css/styleForms.css';

const AddAlojamiento = () => {
  const [formData, setFormData] = useState({
    idAlojamiento: null,
    titulo: '',
    descripcion: '',
    tipoAlojamiento: '',
    latitud: '',
    longitud: '',
    precioPorDia: '',
    cantidadDormitorios: '',
    cantidadBanios: '',
    estado: ''
  });

  const [tiposAlojamiento, setTiposAlojamiento] = useState([]);
  const [alojamientos, setAlojamientos] = useState([]);
  const [selectedAlojamiento, setSelectedAlojamiento] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchTiposAlojamiento();
    fetchAlojamientos();
  }, []);

  const fetchTiposAlojamiento = async () => {
    try {
      const response = await fetch('http://localhost:3001/tiposAlojamiento/getTiposAlojamiento');
      if (response.ok) {
        const data = await response.json();
        setTiposAlojamiento(data);
      } else {
        console.error('Error al obtener tipos de alojamiento:', response.statusText);
      }
    } catch (error) {
      console.error('Error en la conexión:', error);
    }
  };

  const fetchAlojamientos = async () => {
    try {
      const response = await fetch('http://localhost:3001/alojamiento/getAlojamientos');
      if (response.ok) {
        const data = await response.json();
        setAlojamientos(data);
      } else {
        console.error('Error al obtener alojamientos:', response.statusText);
      }
    } catch (error) {
      console.error('Error en la conexión:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isEmptyField = Object.values(formData).some(value => value === '');
    if (isEmptyField) {
      alert('Por favor, complete todos los campos del formulario.');
      return;
    }

    const latitud = parseFloat(formData.latitud);
    const longitud = parseFloat(formData.longitud);
    const precioPorDia = parseFloat(formData.precioPorDia);
    const cantidadDormitorios = parseInt(formData.cantidadDormitorios);
    const cantidadBanios = parseInt(formData.cantidadBanios);
    const tipoAlojamiento = parseInt(formData.tipoAlojamiento);

    if (isNaN(latitud) || latitud < -90 || latitud > 90) {
      alert('Por favor, ingrese una latitud válida (entre -90 y 90).');
      return;
    }

    if (isNaN(longitud) || longitud < -180 || longitud > 180) {
      alert('Por favor, ingrese una longitud válida (entre -180 y 180).');
      return;
    }

    if (isNaN(precioPorDia) || precioPorDia < 0) {
      alert('Por favor, ingrese un precio por día válido.');
      return;
    }

    if (isNaN(cantidadDormitorios) || cantidadDormitorios < 0) {
      alert('Por favor, ingrese una cantidad de dormitorios válida.');
      return;
    }

    if (isNaN(cantidadBanios) || cantidadBanios < 0) {
      alert('Por favor, ingrese una cantidad de baños válida.');
      return;
    }

    if (isNaN(tipoAlojamiento)) {
      alert('Por favor, seleccione un tipo de alojamiento válido.');
      return;
    }

    try {
      const url = formData.idAlojamiento
        ? `http://localhost:3001/alojamiento/putAlojamiento/${formData.idAlojamiento}`
        : 'http://localhost:3001/alojamiento/createAlojamiento';
      const method = formData.idAlojamiento ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          ...formData, 
          latitud, 
          longitud, 
          precioPorDia, 
          cantidadDormitorios, 
          cantidadBanios,
          tipoAlojamiento 
        }),
      });

      if (!response.ok) {
        throw new Error('Error en la creación del alojamiento');
      }

      const newAlojamiento = await response.json();
      setAlojamientos(formData.idAlojamiento
        ? alojamientos.map(alojamiento => alojamiento.idAlojamiento === newAlojamiento.idAlojamiento ? newAlojamiento : alojamiento)
        : [...alojamientos, newAlojamiento]);

      alert(`Alojamiento ${formData.idAlojamiento ? 'actualizado' : 'creado'} creado correctamente.`);

      setFormData({
        idAlojamiento: null,
        titulo: '',
        descripcion: '',
        tipoAlojamiento: '',
        latitud: '',
        longitud: '',
        precioPorDia: '',
        cantidadDormitorios: '',
        cantidadBanios: '',
        estado: ''
      });
    } catch (error) {
      console.error('Error al enviar los datos:', error);
      alert('Ocurrió un error al enviar los datos. Por favor, intenta nuevamente más tarde.');
    }
  };

  const handleEdit = (alojamiento) => {
    setFormData({
      idAlojamiento: alojamiento.idAlojamiento,
      titulo: alojamiento.Titulo,
      descripcion: alojamiento.Descripcion,
      tipoAlojamiento: alojamiento.TipoAlojamiento,
      latitud: alojamiento.Latitud,
      longitud: alojamiento.Longitud,
      precioPorDia: alojamiento.PrecioPorDia,
      cantidadDormitorios: alojamiento.CantidadDormitorios,
      cantidadBanios: alojamiento.CantidadBanios,
      estado: alojamiento.Estado
    });
  };

  const handleDelete = async (idAlojamiento) => {
    const confirmDelete = window.confirm('¿Está seguro de que desea eliminar este alojamiento?');

    if (confirmDelete) {
      try {
        const response = await fetch(`http://localhost:3001/alojamiento/deleteAlojamiento/${idAlojamiento}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          setAlojamientos(alojamientos.filter(alojamiento => alojamiento.idAlojamiento !== idAlojamiento));
          alert('Alojamiento eliminado correctamente.');
        } else {
          console.error('Error al eliminar el alojamiento:', response.statusText);
          alert('Ocurrió un error al eliminar el alojamiento. Por favor, intenta nuevamente más tarde.');
        }
      } catch (error) {
        console.error('Error en la conexión:', error);
        alert('Ocurrió un error al eliminar el alojamiento. Por favor, intenta nuevamente más tarde.');
      }
    }
  };

  const openModal = (alojamiento) => {
    setSelectedAlojamiento(alojamiento);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAlojamiento(null);
  };

  const handleAddImage = (newImage) => {
    setAlojamientos(alojamientos.map(alojamiento =>
      alojamiento.idAlojamiento === newImage.idAlojamiento
        ? { ...alojamiento, Imagenes: [...(alojamiento.Imagenes || []), newImage] }
        : alojamiento
    ));
  };

  return (
    <>
      <section className="formulario-alojamiento">
        <h2>Registrar Alojamiento</h2>
        <div className="cuadro-alojamiento">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label className="label" htmlFor="titulo">Título</label>
                <input
                  className="casilla-alojamiento"
                  type="text"
                  id="titulo"
                  name="titulo"
                  value={formData.titulo}
                  onChange={handleChange}
                  placeholder="Ingrese el título del alojamiento"
                  required
                />
              </div>
              <div className="form-group">
                <label className="label" htmlFor="descripcion">Descripción</label>
                <textarea
                  className="casilla-alojamiento"
                  id="descripcion"
                  name="descripcion"
                  value={formData.descripcion}
                  onChange={handleChange}
                  placeholder="Ingrese la descripción del alojamiento"
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="label" htmlFor="tipoAlojamiento">Tipo de Alojamiento</label>
                <select
                  className="casilla-alojamiento"
                  id="tipoAlojamiento"
                  name="tipoAlojamiento"
                  value={formData.tipoAlojamiento}
                  onChange={handleChange}
                  required
                >
                  <option value="">Seleccione el tipo de alojamiento</option>
                  {tiposAlojamiento.map(tipo => (
                    <option key={tipo.idTipoAlojamiento} value={tipo.idTipoAlojamiento}>{tipo.Descripcion}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label className="label" htmlFor="latitud">Latitud</label>
                <input
                  className="casilla-alojamiento"
                  type="text"
                  id="latitud"
                  name="latitud"
                  value={formData.latitud}
                  onChange={handleChange}
                  placeholder="Ingrese la latitud"
                  required
                />
              </div>
              <div className="form-group">
                <label className="label" htmlFor="longitud">Longitud</label>
                <input
                  className="casilla-alojamiento"
                  type="text"
                  id="longitud"
                  name="longitud"
                  value={formData.longitud}
                  onChange={handleChange}
                  placeholder="Ingrese la longitud"
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="label" htmlFor="precioPorDia">Precio por Día</label>
                <input
                  className="casilla-alojamiento"
                  type="text"
                  id="precioPorDia"
                  name="precioPorDia"
                  value={formData.precioPorDia}
                  onChange={handleChange}
                  placeholder="Ingrese el precio por día"
                  required
                />
              </div>
              <div className="form-group">
                <label className="label" htmlFor="cantidadDormitorios">Dormitorios</label>
                <input
                  className="casilla-alojamiento"
                  type="number"
                  id="cantidadDormitorios"
                  name="cantidadDormitorios"
                  value={formData.cantidadDormitorios}
                  onChange={handleChange}
                  placeholder="Ingrese la cantidad de dormitorios"
                  required
                />
              </div>
              <div className="form-group">
                <label className="label" htmlFor="cantidadBanios">Baños</label>
                <input
                  className="casilla-alojamiento"
                  type="number"
                  id="cantidadBanios"
                  name="cantidadBanios"
                  value={formData.cantidadBanios}
                  onChange={handleChange}
                  placeholder="Ingrese la cantidad de baños"
                  required
                />
              </div>
              <div className="form-group">
                <label className="label" htmlFor="estado">Estado</label>
                <select
                  className="casilla-alojamiento"
                  id="estado"
                  name="estado"
                  value={formData.estado}
                  onChange={handleChange}
                  required
                >
                  <option value="">Seleccione el estado del alojamiento</option>
                  <option value="Disponible">Disponible</option>
                  <option value="Reservado">Reservado</option>
                </select>
              </div>
            </div>
            <div className="boton-container-alojamiento">
              <button type="submit">
                {formData.idAlojamiento ? 'Guardar Cambios' : 'Registrar Alojamiento'}
              </button>
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
                  <th>Título</th>
                  <th>Descripción</th>
                  <th>Tipo Alojamiento</th>
                  <th>Latitud</th>
                  <th>Longitud</th>
                  <th>Precio por Día</th>
                  <th>Dormitorios</th>
                  <th>Baños</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {alojamientos.map(alojamiento => (
                  <tr key={alojamiento.idAlojamiento}>
                    <td>{alojamiento.Titulo}</td>
                    <td>{alojamiento.Descripcion}</td>
                    <td>{alojamiento.TipoAlojamiento}</td>
                    <td>{alojamiento.Latitud}</td>
                    <td>{alojamiento.Longitud}</td>
                    <td>{alojamiento.PrecioPorDia}</td>
                    <td>{alojamiento.CantidadDormitorios}</td>
                    <td>{alojamiento.CantidadBanios}</td>
                    <td>{alojamiento.Estado}</td>
                    <td>
                      <button className='edit-btn' onClick={() => handleEdit(alojamiento)}>Editar</button>
                      <button className='delete-btn' onClick={() => handleDelete(alojamiento.idAlojamiento)}>Eliminar</button>
                      <button className='add-image-btn' onClick={() => openModal(alojamiento)}>Agregar Imagen</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      

      {isModalOpen && (
        <AddImagen
          alojamientoId={selectedAlojamiento.idAlojamiento}
          onClose={closeModal}
          onAddImage={handleAddImage}
        />
      )}
    </>
  );
};

export default AddAlojamiento; 
