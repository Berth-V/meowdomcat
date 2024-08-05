import "./App.css";
import { useState, useEffect } from "react";
import { PiCatLight } from "react-icons/pi";
import ImgTiitle from "./assets/meowdomtittle.png";
import LoadingAnimation from "./components/LoadingAnimation/LoadingAnimation";
import StickersCatAnimation from "./components/StickersCatAnimation/StickersCatAnimation";
import Footer from "./components/Footer/Footer";

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
            setTimeout(loadingFalseSetter, 1000);
          },
          isLoading
        );
  });

  return (
    <>
      <div className="box">
        <div className="box__content">
          <img
            src={ImgTiitle}
            className="box__tittle__img"
            alt="Meowdom Cat Tittle"
          />
          <h2 className="box__h2">Press Button to Get Another Cat</h2>
          <button
            className="box__random__btn"
            type="submit"
            onClick={loadingTrueSetter}
          >
            <PiCatLight className="box__random__btn__icon" />
            Meowdom Cat
          </button>
          <div className="box__cat__img__container">
            {isLoading ? (
              //Loading Animation Component
              <LoadingAnimation />
            ) : (
              <img className="box__cat__img" src={catSrc} />
            )}
            {/* Cats Stickers Animations */}
            <StickersCatAnimation />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
