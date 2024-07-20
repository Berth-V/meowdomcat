import { useEffect, useState, useRef } from "react";
import "./App.css";

/*
  -Hacer un input donde pueda ingresar la busqueda
  -Vincular el input a la peticion Fetch
*/

function App() {
  const [catBrowse, setCatBrowse] = useState();
  const [catImageSrc, setCatImageSrc] = useState();
  const browserRef = useRef();
  const onSubmit = (e) => {
    e.preventDefault();
    setCatBrowse(browserRef.current.value);
  };
  const catFactRequest = (catString) => {
    fetch(`https://cataas.com/cat/says/${catString}`)
      .then((response) => response.json())
      .then((response) => console.log(response));
  };
  useEffect(() => catFactRequest(catBrowse), []);

  return (
    <div className="box">
      <form onSubmit={onSubmit} className="browser__box">
        <input
          ref={browserRef}
          name="input_browse"
          placeholder="Type your Cat Word"
          type="text"
        />
        <button type="submit">Browse</button>
      </form>
      <img src={catBrowse} alt="Random Cat Gif" />
    </div>
  );
}

export default App;
