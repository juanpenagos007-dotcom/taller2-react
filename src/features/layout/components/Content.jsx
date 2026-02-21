import React from 'react'

export const Content = () => {

  const productos = [
    {
      id: 1,
      nombre: "Auriculares Bluetooth",
      precio: 159900,
      categoria: "Audio",
      imagen: "/taller2-react/img/auriculares-bluetooth.jpg"
    },
    {
      id: 2,
      nombre: "Teclado Mecánico",
      precio: 249000,
      categoria: "Periféricos",
      imagen: "/taller2-react/img/teclado-mecanico.jpg"
    },
    {
      id: 3,
      nombre: "Mouse Gamer",
      precio: 99000,
      categoria: "Periféricos",
      imagen: "/taller2-react/img/mouse-gamer.jpg"
    },
    {
      id: 4,
      nombre: "Monitor 24''",
      precio: 580000,
      categoria: "Pantallas",
      imagen: "taller2-react/img/monitor-24.jpg"
    }
  ];

  return (
    <div className="container mt-4">
      <div className="row">

        {/* IZQUIERDA - PRODUCTOS */}
        <div className="col-md-8">
          <h4 className="mb-3">Productos</h4>

          <div className="row">
            {productos.map(producto => (
              <div className="col-md-6 mb-4" key={producto.id}>
                <div className="card shadow h-100">
                  <img 
                    src={producto.imagen} 
                    className="card-img-top" 
                    alt={producto.nombre}
                  />
                 <strong>
                  COP ${producto.precio.toLocaleString()}
                 </strong>
                  <div className="card-footer text-center">
                    <button className="btn btn-outline-primary btn-sm me-2">
                      Editar
                    </button>
                    <button className="btn btn-outline-danger btn-sm">
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DERECHA - FORMULARIO */}
        <div className="col-md-4">
          <div className="card shadow">
            <div className="card-header bg-primary text-white">
              Agregar producto
            </div>
            <div className="card-body">

              <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input className="form-control" />
              </div>

              <div className="row">
                <div className="col">
                  <label className="form-label">Precio</label>
                  <input className="form-control" />
                </div>
                <div className="col">
                  <label className="form-label">Stock</label>
                  <input className="form-control" />
                </div>
              </div>

              <div className="mt-3">
                <label className="form-label">Categoría</label>
                <select className="form-select">
                  <option>Audio</option>
                  <option>Periféricos</option>
                  <option>Pantallas</option>
                </select>
              </div>

              <div className="mt-3">
                <label className="form-label">URL Imagen</label>
                <input className="form-control" />
              </div>

              <button className="btn btn-primary w-100 mt-3">
                Guardar
              </button>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};