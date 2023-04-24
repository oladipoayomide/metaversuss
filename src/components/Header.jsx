
import { motion } from "framer-motion"
import { navVariants } from "./utils/motion";
const Header = () => {

    return (
        <>
            <motion.div className="container-fluid">
                <motion.nav className="header d-flex container justify-between py-5 relative"
                    variants={navVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.25 }}


                >
                    <img src="/search.svg" alt="search" className="w-[24px] h-[24px] object-contain" />
                    <h2><strong>METAVERSUS</strong></h2>
                    <img src="/menu.svg" alt="menu" className="object-contain w-[24px] h-[24px]" />

                    <div className="absolute w-[50%] inset-0 gradient-01 " />
                </motion.nav>
            </motion.div>
        </>
    );
}

export default Header; 