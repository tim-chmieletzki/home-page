import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import TechStack from "@/sections/TechStack";

export default function Home() {
    return (
        <div>
            <Header />
            <Hero />
            <About />
            <Projects />
            <TechStack />
        </div>
    );
}
