/* eslint-disable react/prop-types */
import { motion } from "framer-motion"
import { FaDownload } from "react-icons/fa"
import { IoIosCloseCircle } from "react-icons/io"
import { LuAppWindow } from "react-icons/lu"
function Card({ desc, fileSize, close, tag, tagTitle, reference }) {

    return (
        <motion.div drag dragConstraints={reference} className="overflow-hidden relative w-60 h-72 px-8 py-10 z-[6] rounded-3xl  bg-white/40 backdrop-blur-3xl text-white ">
            <LuAppWindow size={20} />
            <p className="text-sm font-semibold mt-5">{desc}</p>
            <div className="footer absolute bottom-0 left-0 w-full h-34 ">

                <div className="flex items-center justify-between mb-2 px-8">
                    <h4>{fileSize}</h4>
                    <span className="w-6 h-6 flex justify-center items-center bg-slate-500 rounded-full">
                        {close ? <FaDownload size={10} /> : <IoIosCloseCircle size={15} />}
                    </span>
                </div>
                {tag.isOpen &&
                    <div className="w-full h-10  flex items-center justify-center  bg-green-500">
                        <h3 className=" text-black text-sm font-semibold">{tagTitle}</h3>
                    </div>
                }

            </div>
        </motion.div>
    )
}

export default Card

