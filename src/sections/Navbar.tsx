export default function Navbar() {
    return (
        <header>
            <div className="top-0 sticky flex justify-between items-center bg-black/60 backdrop-blur-md mx-auto my-8 px-2 py-2 border border-[#2e2e2e] rounded-full max-w-3xl text-sm">
                <a href="#" className="flex items-center gap-2 text-[#ededed]">
                    <span className="flex justify-center items-center bg-[#ededed] rounded-full w-8 h-8" />
                    <span>Tim Chmieletzki</span>
                    <span className="text-[#a1a1a1]">- Student für WI</span>
                </a>
                <nav className="flex justify-center items-center rounded-full text-[#a1a1a1]">
                    <a
                        href="#"
                        className="px-4 rounded-full hover:text-[#ededed]"
                    >
                        Projekte
                    </a>
                    <a
                        href="#"
                        className="px-4 rounded-full hover:text-[#ededed]"
                    >
                        Socials
                    </a>
                    <button
                        type="submit"
                        className="bg-white/10 hover:bg-white/20 backdrop-blur-sm px-4 rounded-full h-8 text-[#ededed]"
                    >
                        E-Mail
                    </button>
                </nav>
            </div>
        </header>
    );
}
