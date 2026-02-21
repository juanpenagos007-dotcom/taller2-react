import React from "react";
import Card from "./Card";

function Props() {
  const personas = [
    {
      nombre: "Katsuko Saruhashi",
      imagen: "https://i.imgur.com/YfeOqp2s.jpg"
    },
    {
      nombre: "Akilu Lemma",
      imagen: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      nombre: "Lin Lanying",
      imagen: "https://i.imgur.com/1bX5QH6s.jpg"
    }
  ];

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Props React</h2>
      <div className="d-flex justify-content-center gap-3 flex-wrap">
        {personas.map((p, index) => (
          <Card key={index} nombre={p.nombre} imagen={p.imagen} />
        ))}
      </div>
    </div>
  );
}

export default Props;