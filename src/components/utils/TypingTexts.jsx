import { motion } from "framer-motion"
import { typingVariants, textVariants } from "./motion";
const firstGame = "Read devils are ready for you!"

const TypingTexts = ({ title, body }) => {
    return (<>
        <motion.h1 className=" tracking-tight"
            variants={typingVariants(0.2)}
            initial="hidden"
            whileInView="visible"
        > {Array.from(title).map((letter, index) => {
            return (
                <motion.span key={index}
                    variants={textVariants}
                >    {letter === " " ? "\u00A0" : letter} </motion.span>
            )
        })} </motion.h1>
        <motion.p>{body}</motion.p>
      
    </>);
}

export default TypingTexts;