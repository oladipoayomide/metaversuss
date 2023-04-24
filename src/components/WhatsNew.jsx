import { fadeIn } from "./utils/motion";
import styles from "../styles";
import { motion } from "framer-motion";
import { planetsVariants } from "./utils/motion";

import NewFeature from "./utils/NewFeature";
import { newFeatures } from "../constants";
const WhatsNew = () => {
    return (<section>
        <div className="flex flex-col lg:flex-row items-center justify-center" >
            <motion.div className="w-[100%] lg:w-[40%]"
                variants={fadeIn("left", "tween", 0, 0.5)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <h1>| What's New?</h1>
                <motion.h1
                    variants={fadeIn("down", "springs", 0.1)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    className={`${styles.subHeading}`}
                >
                    What's new about Metaversus?
                </motion.h1>
                <div className="flex flex-rol gap-3 mt-4">
                    {
                        newFeatures.map(item =>
                        (
                            <NewFeature
                                imgUrl={item.imgUrl}
                                title={item.title}
                                subtitle={item.subtitle}
                            />
                        )
                        )
                    }
                </div>

            </motion.div>
            <div className="w-[0%] lg:w-[10%]" />
            <motion.div
                variants={planetsVariants("right", 1)}
                initial="hidden"
                whileInView="visible" viewport={{ once: true }}
                className="w-[100%] lg:w-[40%]"
            >
                <img src="whats-new.png" alt="whats-new" className="" />
            </motion.div>

        </div>

    </section>);
}

export default WhatsNew;