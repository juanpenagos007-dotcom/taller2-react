import React from "react";

function Card({ nombre, imagen }) {
  return (
    <div className="card text-center shadow mb-3" style={{ width: "180px" }}>
      <img 
        src={imagen} 
        alt={nombre} 
        className="card-img-top" 
        style={{ height: "120px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h6>{nombre}</h6>
      </div>
    </div>
  );
}

export default Card;