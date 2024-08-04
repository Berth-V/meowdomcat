import "./StickersCatAnimation.css";
import { motion } from "framer-motion";
import CatPc from "../../assets/pccat.png";
import SkateCat from "../../assets/skate_cat.png";

export default function StickersCatAnimation() {
  return (
    <>
      <motion.img
        className="pc__cat"
        src={CatPc}
        alt="Cat PC Animation"
        //Framer Motion Attributes
        initial={{ y: -1000, rotate: 30 }}
        animate={{ y: 0, transition: { delay: 1.8 } }}
      />
      <motion.img
        className="skate__cat"
        src={SkateCat}
        alt="Skate Cat"
        //Framer Motion Attributes
        initial={{ x: -1000 }}
        animate={{ x: 0, transition: { duration: 1.8 } }}
      />
    </>
  );
}
