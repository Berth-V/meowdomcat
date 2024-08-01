import "./App.css";
import { useState, useEffect } from "react";
import { PiCatLight } from "react-icons/pi";
import { motion } from "framer-motion";
import LoadingAnimation from "./components/LoadingAnimation/LoadingAnimation";
import ImgTiitle from "./assets/miawdomtittle.png";
import CatPc from "./assets/pccat.png";
import SkateCat from "./assets/skate_cat.png";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [catSrc, setCatSrc] = useState();
  const loadingTrueSetter = () => {
    setIsLoading(true);
  };

  useEffect(() => {
    isLoading &&
      fetch("https://api.thecatapi.com/v1/images/search")
        .then((response) => response.json())
        .then(
          (data) => {
            setCatSrc(data[0].url);
            const loadingFalseSetter = () => {
              setIsLoading(false);
            };
            setTimeout(loadingFalseSetter, 1500);
          },
          [isLoading]
        );
  });

  return (
    <>
      <div className="box">
        <img src={ImgTiitle} alt="Miawdom Cat Tittle" />
        <h2 className="box__h2">Press Button to Get Another Cat</h2>
        <button
          className="box__random__btn"
          type="submit"
          onClick={loadingTrueSetter}
        >
          <PiCatLight className="box__random__btn__icon" />
          Miawdom Cat
        </button>
        <div className="box__cat__img__container">
          {isLoading ? (
            <LoadingAnimation />
          ) : (
            <img className="box__cat__img" src={catSrc} />
          )}
          {/* Stickers Animados */}
          {/* <a href="https://www.flaticon.com/free-stickers/computer" title="computer stickers">Computer stickers created by Stickers - Flaticon</a> */}
          <motion.img
            className="pc__cat"
            src={CatPc}
            alt="Cat PC Animation"
            initial={{ y: -1000, rotate: 30 }}
            animate={{ y: 0, transition: { delay: 1.8 } }}
          />
          {/* <a href="https://www.flaticon.com/free-stickers/cat" title="cat stickers">Cat stickers created by DinosoftLabs - Flaticon</a> */}
          <motion.img
            src={SkateCat}
            alt="Skate Cat"
            className="skate__cat"
            initial={{ x: -1000 }}
            animate={{ x: 0, transition: { duration: 1.8 } }}
          />
        </div>
      </div>
      <footer className="footer">
        <div className="footer__credits">
          Credits to:
          <br />
          <a
            className="footer__a"
            href="https://www.flaticon.com/free-stickers/computer"
            title="computer stickers"
          >
            Computer stickers created by Stickers - Flaticon
          </a>
          <br />
          <a
            className="footer__a"
            href="https://www.flaticon.com/free-stickers/cat"
            title="cat stickers"
          >
            Cat stickers created by DinosoftLabs - Flaticon
          </a>
          <br />
          <a
            className="footer__a"
            href="https://www.flaticon.com/free-icons/paw"
            title="paw icons"
          >
            Paw icons created by Vector Stall - Flaticon
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
