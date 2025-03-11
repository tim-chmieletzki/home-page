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
            <div className="mx-auto mt-6 py-16 max-w-3xl">
                <div className="bg-transparent font-medium text-4xl">
                    <h1>{greetings[index]}, mein Name ist Tim.</h1>
                    <p>
                        Ich bin 21 Jahre alt und studiere derzeit an der
                        Berliner Hochschule für Technik Berlin
                        Wirtschaftsinformatik.
                    </p>
                </div>
                <div className="flex gap-6 pt-8 font-medium">
                    <a
                        href="https://www.bht-berlin.de/"
                        className="flex items-center gap-1 bg-[#0a0a0a] hover:bg-white/20 px-3 py-[5px] border border-[#2e2e2e] rounded-full transition duration-300"
                    >
                        <h1>Uni</h1>
                        <ArrowUpRight className="text-white" />
                    </a>
                </div>
            </div>
        </section>
    );
}
