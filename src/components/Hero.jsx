import { motion } from "framer-motion"
import { slideIn, heroVariants } from "./utils/motion";
import styles from "../styles";
const Hero = () => {

    const heroStyles = " text-center lg:text-[144px] md:text-[112px] sm:text-[84px] text-[45px] font-bold uppercase lg:leading-[144px] md:leading-[115px] sm:leading-[89px] leading-[48px]"



    return (
        <div className="relative  
        " >
            <motion.div className={` ${styles.innerWidth} mx-auto flex flex-col relative `}
                variants={heroVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.25 }}
            >


                <motion.h1
                    variants={heroVariants.children} className={`${heroStyles} mx-auto
                    text-center
                    `}>metaverse</motion.h1>
                <motion.div
                    variants={heroVariants.children} className="flex justify-center z-10 align-items-center">
                    <h1 className={`${heroStyles}
                            
                        `}>ma</h1>
                    <div className={`${styles.heroDText}`}></div>
                    <h1 className={`${heroStyles}
                            
                        `}>ness</h1>

                </motion.div>




            </motion.div>
         
                <motion.div className={` pl-10`}>
                    <motion.div className="relative md:-mt-[20px]  -mt-[12px] mx-auto "
                        variants={slideIn("right", 'tween', 1, 0.1)}
                        viewport={{ once: true }}
                        initial='hidden'
                        whileInView='visible'
                    >
                        <div className=" absolute
                                rounded-tl-[140px]   right-0  h-[300px] w-full   hero-gradient  -top-[20px] z-0
                            "/>
                        <img
                            src="/cover.png" alt="cover" className=" w-full sm:h-[500px] h-[350px]  object-cover rounded-tl-[140px] relative z-5 "
                        />
                        <a href="#explore">
                            <div >
                                <img className="absolute -bottom-10
                                sm:-bottom-20 right-10 sm:w-[156px] w-[128px] md:w-[200px] object-contain z-10" src="/stamp.png" alt="stamp" />
                            </div>
                        </a>
                    </motion.div>
                </motion.div>
     
        </div>
    );
}

export default Hero;