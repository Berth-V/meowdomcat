import "./App.css";
import { useState, useEffect } from "react";
import { PiCatLight } from "react-icons/pi";
import { motion } from "framer-motion";
import FootPrint from "./assets/huella.png";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [catSrc, setCatSrc] = useState();
  const loadingTrueSetter = () => {
    setIsLoading(true);
  };

  //This is a function to replace "o" letter for a FootPrint IMG tag
  const o = () => {
    return <img className="box__loading__fprint--oletter" src={FootPrint} />;
  };

  //Framer Motion Variants
  const boxAnimationVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const itemsAnimationVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
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
    <div className="box">
      <h1 className="box__h1">Miawdom Cat</h1>
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
          <motion.div
            className="box__loading__animation__container"
            variants={boxAnimationVariants}
            initial="hidden"
            animate="show"
          >
            {/* o() is a function to resume img tag in the loading animation*/}
            <h2 className="box__loading__text">L{o()}ading</h2>
            <motion.img
              className="box__loading__fprint"
              src={FootPrint}
              alt="Loading FootPrint"
              variants={itemsAnimationVariants}
            />
            <motion.img
              className="box__loading__fprint"
              src={FootPrint}
              alt="Loading FootPrint"
              variants={itemsAnimationVariants}
            />
            <motion.img
              className="box__loading__fprint"
              src={FootPrint}
              alt="Loading FootPrint"
              variants={itemsAnimationVariants}
            />
          </motion.div>
        ) : (
          <img className="box__cat__img" src={catSrc} />
        )}
      </div>
    </div>
  );
}

export default App;
