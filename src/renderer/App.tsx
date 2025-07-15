import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  // Accede a las variables y funciones expuestas por preload.ts
  const saludo = window.myAPI?.saludo ?? 'Sin saludo';
  const saluda = window.myAAPI?.saluda ?? 'Sin saludo';

  // Estado para la hora actual
  const [hora, setHora] = useState(new Date());

  // Efecto para actualizar la hora cada segundo
  useEffect(() => {
    const interval = setInterval(() => setHora(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  //Devuelve el contenido del componente
  return (
    <div className="contenedor">
      <h1 className="titulo">Saludo:</h1>
      <p className="saludo">{saludo}</p>
      <p className="saludo">{saluda()}</p>
      <h2 className="reloj">Hora actual: {hora.toLocaleTimeString()}</h2>
    </div>
  );
}


export default App;