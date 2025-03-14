export default function Header() {
    return (
        <section className="top-6 z-10 sticky flex justify-between items-center bg-black/60 backdrop-blur-md mx-auto px-2 py-2 border border-[#2e2e2e] rounded-full max-w-lg text-sm">
            <a href="" className="flex items-center gap-1 text-white">
                <div className="w-8 h-8 rounded-full bg-white" />
                <span>Tim Chmieletzki</span>
                <span className="text-[#a1a1a1]">-</span>
                <span className="text-[#a1a1a1]">Student</span>
            </a>
            <nav className="flex justify-center items-center rounded-full text-[#a1a1a1]">
                <a
                    href=""
                    className="px-4 hover:text-white transition duration-300"
                >
                    Performance
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
