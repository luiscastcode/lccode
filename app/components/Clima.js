"use client";
import React, { useState, useEffect } from "react";
 

const apiId = process.env.NEXT_PUBLIC_CLIMA_API_KEY;
export default function Clima() {
  const [listaClima, setListaClima] = useState([
    {
      ciudad: "",
      temp: "",
      icono: "",
    },
  ]);
  useEffect(() => {
    async function obtenerClima() {
      const city = "valencia";
      const country = "VE";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiId}&units=metric`;

      const response = await fetch(url);
      const data = await response.json();

      setListaClima([
        {
          ciudad: data.name,
          temp: data.main.temp,
          icono: data.weather[0].icon,
        },
      ]);

 
    }
    obtenerClima();
  }, []);

  return (
    <>
      {listaClima.map((lista, listaIndex) => (
        <div
          key={listaIndex}
          className="w-full flex flex-col justify-center text-center items-center text-slate-200 p-7 mt-32 bg-slate-950 rounded-md"
        >
          <h4 className="text-3xl mb-2">Clima en:</h4>
          <h4 className="text-5xl">{lista.ciudad}</h4>
          <img
            className="mx-auto"
            src={`https://openweathermap.org/img/wn/${lista.icono}@2x.png`}
            alt="icon"
             
          />
          <h4 className="text-3xl mb-2">Temp: </h4>
          <h4 className="text-5xl"> {lista.temp} º</h4>
        </div>
      ))}
    </>
  );
}
