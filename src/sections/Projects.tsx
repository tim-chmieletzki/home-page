export default function Projects() {
    return (
        <section>
            <div className="mx-auto h-px bg-[#2e2e2e] max-w-3xl" />
            <div className="mx-auto py-16 max-w-3xl">
                <div className="flex-col justify-center items-center">
                    <h1 className="top-24 sticky bg-green-500">
                        Ausgewählte Projekte
                    </h1>
                    <div className="top-24 sticky flex bg-green-400 w-full h-[500px]">
                        <h1>Projekt 1</h1>
                        <div>Bild</div>
                    </div>
                    <div className="top-24 sticky flex bg-green-300 w-full h-[500px]">
                        <h1>Projekt 2</h1>
                        <div>Bild</div>
                    </div>
                    <div className="top-24 sticky flex bg-green-200 w-full h-[500px]">
                        <h1>Projekt 3</h1>
                        <div>Bild</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
