import TypingTexts from "./utils/TypingTexts";
import { motion } from "framer-motion"
import { fadeIn } from "./utils/motion";

const About = () => {
    return (
        <div className="about-page text-[#C7C7C7] my-20  text-center flex flex-col gap-3">
            <TypingTexts title="| About Metaversus" />
            <motion.div
                  variants={fadeIn("down", "spring", 0.5)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{once: false, amount: 0.25}}
                  className="text-center"
            >
                <motion.p className="text-[1rem] lg:text-[2rem]  overflow-hidden
                "
                >
                    <span className="font-extrabold text-[white]">Metaverse</span> is a new thing in the future, where you can enjoy the virtual world by feeling like it's really real, you can feel what you feel in this metaverse world, because this is really the <span className="font-extrabold text-[white]">madness of the metaverse</span> of today, using only <span className="font-extrabold text-[white]">VR</span> devices you can easily explore the metaverse world you want, turn your dreams into reality. Let's <span className="font-extrabold text-[white]">explore</span> the madness of the metaverse by scrolling down
                  
                </motion.p>
                <img src="/arrow-down.svg" alt="arrow down" className="mx-auto my-4" />
            </motion.div>


        </div>

    );
}

export default About;