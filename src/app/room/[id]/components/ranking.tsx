

const Ranking = async ({ params }: any) => {

    const ranking = [
        {
            name: "João Silva",
            points: "28",
        },
        {
            name: "Maria Lima",
            points: "25",
        },
        {
            name: "Paulo Costa",
            points: "21",
        },
    ]

    if (!ranking) {
        return (
            <div className="flex h-full flex-col items-center justify-center gap-2 p-5">
                <h2 className="font-bold">Ranking inexistente</h2>
                <p className="text-sm opacity-60">Crie atividades para que seus alunos ganhem pontos para o ranking</p>
            </div>
        );
    }

    return (
        <>
            <h2 className="font-bold mb-2">Ranking de pontuação</h2>
            {ranking.map((ranking, index) => (
                <div
                    key={index}
                    className="mb-4 flex items-start pb-4 last:mb-0 last:pb-0"
                >
                    <span className="flex-shrink-0 h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                    <div className="ml-2 space-y-1">
                        <p className="text-sm font-medium leading-none">
                            {ranking.name} - {ranking.points}
                        </p>
                    </div>
                </div>
            ))}

        </>
    );
}

export default Ranking;
