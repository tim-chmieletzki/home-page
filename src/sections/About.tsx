export default function About() {
    return (
        <section>
            <div className="mx-auto h-px bg-[#2e2e2e] max-w-3xl" />
            <div className="mx-auto py-16 max-w-3xl">
                <div>
                    <h1 className="text-2xl font-medium">Über mich</h1>
                    <p className="text-[#a1a1a1] py-6">
                        Für mich ist jede Herausforderung eine Gelegenheit, zu
                        lernen und zu wachsen. Ich liebe es, Projekte zu
                        erschaffen, Lösungen zu finden und Dinge auf das nächste
                        Level zu bringen. Mein Antrieb? Nie stehen bleiben,
                        sondern immer den nächsten Schritt wagen.
                    </p>
                    <div className="flex-col text-[#a1a1a1] bg-violet-400">
                        <div className="flex">
                            <div>Datum</div>
                            <div>Aktivität</div>
                        </div>
                        <div className="flex">
                            <div>Datum</div>
                            <div>Aktivität</div>
                        </div>
                        <div className="flex">
                            <div>Datum</div>
                            <div>Aktivität</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
