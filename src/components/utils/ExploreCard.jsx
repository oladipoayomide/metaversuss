import { motion } from "framer-motion"
import { fadeIn } from "./motion";
const ExploreCard = ({ title, active, handleActive, index, imgUrl }) => {



    return (
        <motion.div
            variants={fadeIn("left", "tween", index * 0.3, 0.1)}
            className={`${active === index ? "h-[325px] lg:w-[370px]" : 'lg:w-[170px] h-[80px]'}  lg:h-[563px] w-[100%]   relative item-center justify-center flex flex-col cursor-pointer animetrans`}
            onClick={() => { handleActive(index) }}
        >

            <img src={imgUrl} alt={title}
                className="w-100 absolute rounded-[25px]  h-100 object-cover"
            />
            {active !== index ? (<h1 className="lg:absolute lg:bottom-20  z-0 lg:origin-[0,0] lg:rotate-[-90deg] font-semibold text-[26px] text-center lg:text-left ">{title}</h1>) : (
                <div
                    className=" flex text-left flex-col gap-3 p-4 bg-[#0000008c] absolute bottom-0 w-100 rounded-b-[25px] h-2/3 lg:h-1/3"
                >
                    <div className=" flex items-center justify-center border-white border-[0.5px]  headset p-1 bg-[#ffffff7a] rounded-[40%] w-[50px] h-[50px]"><img src="/headset.svg" alt="headset" /></div>

                    <h1 className="uppercase">enter the metaverse</h1>
                    <h1 className="text-[20px] font-semibold">{title}</h1>

                </div>
            )}

        </motion.div>
    );
}

export default ExploreCard;