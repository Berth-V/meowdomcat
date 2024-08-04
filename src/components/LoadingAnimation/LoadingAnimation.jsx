import { motion } from "framer-motion";
import FootPrint from "../../assets/huella.png";
import "./LoadingAnimation.css";

export default function LoadingAnimation() {
  //This is a function to replace "o" letter in the FootPrint IMG tag
  const o = () => {
    return <img className="box__loading__fprint--oletter" src={FootPrint} />;
  };
  //Framer Motion Variants
  const itemsAnimationVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  const boxAnimationVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };
  return (
    <motion.div
      className="box__loading__animation__container"
      variants={boxAnimationVariants}
      initial="hidden"
      animate="show"
    >
      {/* o() is a function to resume <img> tag in the loading animation*/}
      <h2 className="box__loading__text">L{o()}ading</h2>
      <motion.img
        className="box__loading__fprint"
        src={FootPrint}
        alt="Loading FootPrint"
        //Framer Motion Attributes
        variants={itemsAnimationVariants}
      />
      <motion.img
        className="box__loading__fprint"
        src={FootPrint}
        alt="Loading FootPrint"
        //Framer Motion Attributes
        variants={itemsAnimationVariants}
      />
      <motion.img
        className="box__loading__fprint"
        src={FootPrint}
        alt="Loading FootPrint"
        //Framer Motion Attributes
        variants={itemsAnimationVariants}
      />
    </motion.div>
  );
}
