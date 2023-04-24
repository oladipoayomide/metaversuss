import TypingTexts from "./utils/TypingTexts";
import { motion } from "framer-motion";
import styles from "../styles/index"
import { staggerChildren } from "./utils/motion";
import { exploreWorlds } from "../constants";
import ExploreCard from "./utils/ExploreCard";
import { useState } from "react";


const Explore = () => {
    const [active, setActive] = useState(2);
    const handleActive = (id) => {
        setActive(id)
        console.log(active)
    }

    return (

        <motion.div className="text-center flex flex-col gap-2 py-5 px-0 " id="explore"
            
        >
            <TypingTexts title="| The World" />
            <h1 className={styles.subHeading}
            >
                Choose the world you want <br className="hidden md:block" /> to explore
            </h1>

            <motion.div className="flex flex-col lg:flex-row gap-3 mx-1 items-center justify-center"
                variants={staggerChildren(0.1, 0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}

            >
                {exploreWorlds.map(item => {
                    return <ExploreCard
                        title={item.title}
                        key={item.index}
                        index={item.index}
                        imgUrl={item.imgUrl}
                        active={active}
                        handleActive={handleActive}
                    />
                })}
            </motion.div>
        </motion.div>


    );
}

export default Explore;