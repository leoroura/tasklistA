import React from 'react'
import { useState, useEffect } from 'react'


export default function Header() {
    //usamos useState para obtener la fecha y hora, renderizándola constantemente
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        // Esta función se ejecuta después de que el componente se renderice
        const intervalId = setInterval(() => {
        // Actualiza la fecha actual cada segundo
        setCurrentDate(new Date());
    }, 1000);

    // Esta función se ejecuta cuando el componente se desmonta
    return () => clearInterval(intervalId);
    }, []); // El array vacío asegura que el efecto se ejecute solo una vez al renderizar el componente
    
    return (
        <div>
            <p class="fecha">Hoy es: {currentDate.toLocaleString()}</p>
            <h1>Lista de tareas: </h1>
        </div>
    )
}
