/*// EditarImagen.js
import React, { useState, useEffect } from 'react';
import '../estilosForms.css/StyleEditarImagen.css';
import '../estilosForms.css/styleForms.css';

const EditarImagen = () => {
  const [imagenes, setImagenes] = useState([]);
  const [newImage, setNewImage] = useState('');
  const [alojamientos, setAlojamientos] = useState([]);
  const [selectedAlojamiento, setSelectedAlojamiento] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchAlojamientos();
  }, []);

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

  const fetchImagenes = async (idAlojamiento) => {
    try {
      const response = await fetch(`http://localhost:3001/imagen/getAlojamiento/${idAlojamiento}`);
      if (response.ok) {
        const data = await response.json();
        setImagenes(data);
      } else {
        console.error('Error al obtener imágenes:', response.statusText);
      }
    } catch (error) {
      console.error('Error en la conexión:', error);
    }
  };

  const handleAddImage = async () => {
    if (!newImage || !selectedAlojamiento) return;

    try {
      const response = await fetch('http://localhost:3001/imagen/createImagen', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          idAlojamiento: selectedAlojamiento.idAlojamiento,
          RutaArchivo: newImage,
        }),
      });

      if (response.ok) {
        const newImagen = await response.json();
        setImagenes([...imagenes, newImagen]);
        setNewImage('');
        alert('Imagen agregada correctamente');
      } else {
        console.error('Error al agregar imagen:', response.statusText);
      }
    } catch (error) {
      console.error('Error en la conexión:', error);
    }
  };

  const handleEditImage = async (idImagen, RutaArchivo) => {
    const newRutaArchivo = prompt('Ingrese la nueva URL de la imagen:', RutaArchivo);
    if (!newRutaArchivo || newRutaArchivo === RutaArchivo) return;

    try {
      const response = await fetch(`http://localhost:3001/imagen/updateImagen/${idImagen}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          idAlojamiento: selectedAlojamiento.idAlojamiento,
          RutaArchivo: newRutaArchivo,
        }),
      });

      if (response.ok) {
        setImagenes(imagenes.map((imagen) =>
          imagen.idImagen === idImagen ? { ...imagen, RutaArchivo: newRutaArchivo } : imagen
        ));
      } else {
        console.error('Error al editar imagen:', response.statusText);
      }
    } catch (error) {
      console.error('Error en la conexión:', error);
    }
  };

  const handleDeleteImage = async (idImagen) => {
    const confirmDelete = window.confirm('¿Está seguro de que desea eliminar esta imagen?');

    if (confirmDelete) {
      try {
        const response = await fetch(`http://localhost:3001/imagen/deleteImagen/${idImagen}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          setImagenes(imagenes.filter(image => image.idImagen !== idImagen));
          alert('Imagen eliminada correctamente.');
        } else {
          console.error('Error al eliminar imagen:', response.statusText);
        }
      } catch (error) {
        console.error('Error en la conexión:', error);
      }
    }
  };

  const openModal = (alojamiento) => {
    setSelectedAlojamiento(alojamiento);
    fetchImagenes(alojamiento.idAlojamiento);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAlojamiento(null);
    setImagenes([]);
  };

  const handleFileChange = (event) => {
    setNewImage(event.target.value);
  };

  const handleCancel = () => {
    setNewImage('');
  };

  return (
    <>
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
                      <button className='edit-btn' onClick={() => openModal(alojamiento)}>Administrar Imágenes</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Administrar Imágenes de {selectedAlojamiento.Titulo}</h2>
            <div className="form-group">
              <label className="label" htmlFor="newImage">Agregar Imagen (URL):</label>
              <input
                className="casilla"
                type="text"
                id="newImage"
                value={newImage}
                onChange={handleFileChange}
              />
              <button
                className="boton"
                onClick={handleAddImage}>
                Agregar Imagen
              </button>
              <button
                className="boton-cancel"
                onClick={handleCancel}>
                Cancelar
              </button>
            </div>
            <table className="custom-table">
              <thead>
                <tr>
                  <th>ID Imagen</th>
                  <th>Ruta de Archivo</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {imagenes.map((imagen) => (
                  <tr key={imagen.idImagen}>
                    <td>{imagen.idImagen}</td>
                    <td>{imagen.RutaArchivo}</td>
                    <td>
                      <button
                        className="edit-button"
                        onClick={() => handleEditImage(imagen.idImagen, imagen.RutaArchivo)}>
                        Editar
                      </button>
                      <button
                        className="delete-button"
                        onClick={() => handleDeleteImage(imagen.idImagen)}>
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default EditarImagen;

*/