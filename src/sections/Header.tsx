"use client";
import { motion } from "framer-motion";

export default function Header() {
    return (
        <section className="top-6 z-10 sticky flex justify-between items-center bg-black/60 backdrop-blur-md mx-auto px-2 py-2 border border-[#2e2e2e] rounded-full max-w-lg text-sm">
            <a href="" className="flex items-center gap-1 text-white">
                <span className="bg-white rounded-full w-8 h-8" />
                <span>Tim Chmieletzki</span>
                <span className="text-[#a1a1a1]">-</span>
                <span className="text-[#a1a1a1]">Student</span>
            </a>
            <nav className="flex justify-center items-center rounded-full text-[#a1a1a1]">
                <a
                    href=""
                    className="px-4 hover:text-white transition duration-300"
                >
                    <motion.span
                        className="bg-[linear-gradient(to_right,#2dd4bf,#5eead4,#99f6e4,#5eead4,#2dd4bf,#5eead4,#99f6e4,#5eead4,#2dd4bf)] [background-size:200%] bg-clip-text text-transparent"
                        animate={{
                            backgroundPositionX: "-100%",
                        }}
                        transition={{
                            duration: "2",
                            repeat: Infinity,
                            ease: "linear",
                            repeatType: "loop",
                        }}
                    >
                        Performance
                    </motion.span>
                </a>
                <button
                    type="submit"
                    className="bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 rounded-full h-8 text-white transition duration-300"
                >
                    E-Mail
                </button>
            </nav>
        </section>
    );
}
