import { motion } from "framer-motion";
import { fadeIn } from "./utils/motion"
import styles from "../styles";
import { insights } from "../constants";
import InsightTool from "./utils/InsightTool";


const Insights = () => {
    return (
        <div className="text-center flex flex-col gap-4 w-[100%]">
            <h1>| Insight</h1>
            <motion.h1
                variants={fadeIn("down", "springs", 0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                className={`${styles.subHeading}`}
            >
               Insight about metaverse
            </motion.h1>
            <div className="flex flex-col gap-4 ">
                {insights.map(item=>(
                    <InsightTool 
                        title={item.title}
                        body={item.subtitle}
                        imgUrl={item.imgUrl}
                    />
                ))}
                
            </div>

        </div>
    );
}

export default Insights;