"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight } from "@geist-ui/icons";

export default function Hero() {
    const greetings = ["Hallo", "Hello", "Hola"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % greetings.length);
        }, 6000);

        return () => clearInterval(interval);
    });

    return (
        <section>
            <div className="bg-purple-500 mx-auto mt-6 py-16 max-w-2xl">
                <div className="bg-blue-500 font-medium text-4xl">
                    <h1>{greetings[index]}, mein Name ist Tim.</h1>
                    <p>
                        Ich bin 21 Jahre alt und studiere aktuell
                        Wirtschaftsinformatik an der Berliner Hochschule für
                        Technik.
                    </p>
                </div>
                <div className="flex gap-6 bg-green-500 pt-6 font-medium">
                    <div className="flex gap-1 bg-[#0a0a0a] hover:bg-white/20 px-3 py-[5px] border border-[#2e2e2e] rounded-full transition duration-300">
                        <a href="https://github.com/tim-chmieletzki">GitHub</a>
                        <ArrowUpRight className="text-white" />
                    </div>
                    <div className="flex gap-1 bg-[#0a0a0a] hover:bg-white/20 px-3 py-1 border border-[#2e2e2e] rounded-full transition duration-300">
                        <a href="https://www.linkedin.com/in/tim-chmieletzki-753ba130a/">
                            LinkedIn
                        </a>
                        <ArrowUpRight className="text-white" />
                    </div>
                </div>
            </div>
        </section>
    );
}
