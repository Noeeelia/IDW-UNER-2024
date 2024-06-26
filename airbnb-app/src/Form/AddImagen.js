/*// AddImagen.js
import React, { useState } from 'react';

const AddImagen = ({ alojamientoId, onClose, onAddImage }) => {
  const [rutaArchivo, setRutaArchivo] = useState('');

  const handleChange = (e) => {
    setRutaArchivo(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!rutaArchivo) {
      alert('Por favor, ingrese la ruta de la imagen.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/imagen/createImagen', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ idAlojamiento: alojamientoId, RutaArchivo: rutaArchivo }),
      });

      if (!response.ok) {
        throw new Error('Error en la creación de la imagen');
      }

      const newImage = await response.json();
      onAddImage(newImage);
      alert('Imagen creada correctamente.');
      onClose();
    } catch (error) {
      console.error('Error al enviar los datos:', error);
      alert('Ocurrió un error al enviar los datos. Por favor, intenta nuevamente más tarde.');
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2 className='titulos-h2'>Agregar Imagen</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="label" htmlFor="rutaArchivo">Ruta de la Imagen</label>
            <input
              className="casilla"
              type="text"
              id="rutaArchivo"
              name="rutaArchivo"
              value={rutaArchivo}
              onChange={handleChange}
              placeholder="Ingrese la ruta de la imagen"
              required
            />
          </div>
          <div className="boton-container">
            <button type="submit">Agregar Imagen</button>
            <button type="button" onClick={onClose}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddImagen;
*/