import { motion } from "framer-motion";
import { fadeIn } from "./utils/motion";
import styles from "../styles";
const World = () => {
    return (
        <div className="flex flex-col text-center">
            <h1>| People on the World</h1>
            <motion.h1
                variants={fadeIn("down", "springs", 0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                className={`${styles.subHeading}`}
            >
                Track friends around you and invite them to play together in the same world
            </motion.h1>
            <div className="relative mx-auto w-[100%] h-[325px] lg:h-[500px] my-10"
            >
                <img src="/map.png" alt="map" className="absolute object-cover" />
                
                <div className="absolute w-[70px] bg-[gray] rounded-[50%] p-1.5 top-[10%] left-[10%]">
                <img src="/people-01.png" alt="person"/>
                </div>


                <div className="absolute w-[70px] bg-[gray] rounded-[50%] p-1.5 top-[30%] right-[10%]">
                <img src="/people-03.png" alt="person" />

                </div>

                <div className="absolute w-[70px] bg-[gray] rounded-[50%] p-1.5 top-[50%]  left-[45%]">
                <img src="/people-02.png" alt="person" />
                </div>

            </div>
            
        </div>
    );
}

export default World;