import { motion } from "framer-motion"
import { startingFeatures } from "../constants";
import styles from "../styles";
import { staggerChildren, planetsVariants, slideIn, fadeIn } from "./utils/motion";
import Steppings from "./utils/Steppings";
import TypingTexts from "./utils/TypingTexts";
const GetStarted = () => {


    return (



        <section className="mb-5">
            <motion.div
                variants={staggerChildren}
                initial='hidden'
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                className="flex flex-col align-center justify-center lg:flex-row gap-5 "

            >
                <motion.div
                    variants={planetsVariants("left", 0.5)}
                    className="w-[100%] lg:w-[40%]"
                >
                    <img src="get-started.png" alt="get-started" className="" />
                </motion.div>
                <div className="w-[0%] lg:w-[10%]"/>
                <motion.div
                    variants={slideIn("right", "tween", 0.5)}
                    viewport={{ once: false }}
                    className=" text-left w-[100%] lg:w-[30%] flex flex-col gap-3"
                >
                    <TypingTexts
                        title="| How Metaversus Works"
                    />
                    <motion.h1
                        variants={fadeIn("down", "spring", 0.1)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: false}}
                        className={`${styles.subHeading}`}
                    >
                        Get started with just a  few clicks
                    </motion.h1>

                    {
                        startingFeatures.map(item =>
                        (<Steppings
                            id={item.id}
                            body={item.body}
                        />)


                        )
                    }

                </motion.div>
            </motion.div>



        </section>
    );
}

export default GetStarted;