export default function About() {
    return (
        <section>
            <div className="mx-auto h-px bg-[#2e2e2e] max-w-3xl" />
            <div className="mx-auto py-16 max-w-3xl">
                <div className="bg-violet-500">
                    <h1>Über mich</h1>
                    <p>Kurze Beschreibung</p>
                    <div className="flex-col bg-violet-400">
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
