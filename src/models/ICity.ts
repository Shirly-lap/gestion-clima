//  fecha de creación, 
//  motivo de análisis climático, 
//  pais, nobmbre de la ciudad con 
//  visor de temperatura con un color que indique: (rojo: calor, verde: medio fresco, amarillo: medio calor y azul - fresco),
//   además de botones o elementos de acción para editar, ver en detalle y eliminar.
export interface ICity {
    id: undefined | string | number,
    city: string,
    country: string,
    image: string,
    date: Date,
    cityDescription: string,
    temperature: number; // Temperatura actual de la ciudad
    // temperatureStatus: 'hot' | 'warm' | 'cool' | 'cold'; // Estado de la temperatura
}
