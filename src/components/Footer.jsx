import { socials } from "../constants";
import { motion } from "framer-motion";
import { footerVariants } from "./utils/motion";
const Footer = () => {
    return (
        <motion.footer className="flex flex-col gap-3 my-5 relative"
            variants={footerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}


        >
            <div className="absolute w-[50%] inset-0 feedback-gradient " />
            <h1 className="font-bold text-[3rem]">Enter the Metaverse</h1>
            <div className="flex item-center justify-center flex-row gap-2 w-[220px] rounded-[25px] z-[20] p-3 bg-[#26638e]" style={{cursor: "pointer"}}>
                <img src="/headset.svg" alt="headset" />
                <h1 className="uppercase">Enter metaverse</h1>

            </div>
            <div className="border-b-[2px] border-[gray] " />
          


            <div className="flex flex-col lg:flex-row justify-between items-start gap-3">
                <div className="flex flex-col lg:float-right lg:flex-row gap-3">
                    <h1 className="font-bold">Metaversus</h1>
                    <div className="flex flex-row z-[20] gap-2">
                        {socials.map(({ url, name, id }) => (
                            <img src={url} alt={name} className="w-[25px] " style={{cursor: "pointer"}} key={id} />
                        ))}
                    </div>
                </div>
                <p className="self-start lg:self-center">Copyright © 2021 - 2022 Metaversus. All rights reserved.</p>
                <a className="z-[10] underline " href="https://www.linkedin.com/in/oladipoayomide/" target="/blank" rel="noreopener noreferrer">Oladipo Ayomide</a>
                
            </div>

        </motion.footer>


    );
}

export default Footer;