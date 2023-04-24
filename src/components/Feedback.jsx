import { motion } from "framer-motion";
import { slideIn } from "./utils/motion";
const Feedback = () => {
    return (
        <motion.div className="feedback flex flex-col lg:flex-row gap-4 my-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}

        >

            <motion.div className="flex flex-col  gap-3 p-4 border-[gray] border rounded-[30px] "
                variants={slideIn("left", "tween", 1)}
            >

                <h1 className="font-bold text-[20px] lg:pt-20">
                    Samantha</h1>
                <p className="text-sm">Founder | Metaversus</p>
                <p className="mt-2 leading-[30px]">
                    “With the development of today's technology, metaverse is very useful for today's work, or can be called web 3.0. by using metaverse you can use it as anything”</p>
            </motion.div>
            <motion.div
                variants={slideIn("right", "tween", 1)}
                className="relative z-10"

            >
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{
                        scale: 1, opacity: 1,
                        transition: {
                            duration: 0.8,
                            type: 'tween',
                            delay: 0.8,
                            ease: "easeOut"
                        }
                    }} viewport={{ once: true }}

                ><img src="/stamp.png" alt="stamp" className="absolute w-[150px] top-5 -left-20 hidden lg:block " /></motion.div>
                <img src="/planet-09.png" alt="planet" className="rounded-[30px]" />
            </motion.div>

        </motion.div>
    );
}

export default Feedback
