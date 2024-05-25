import React, { useEffect, useState } from "react";
import s from "./Pokemons.module.css";
import pokemonn from "../logo.svg";

const Pokemons = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          alert("Error");
        }
      })
      .then((data) => {
        console.log(data.results)
        setData(data.results)
      });
  }, []);

  return (
    <>
      <div className={s.container}>
        {data.map((item) => (
          <div className={s.item}  key={item.name}>
            <img src={item.url} alt="pokemon" className={s.img}/>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Pokemons;
