import { useState } from "react";

const FitCultural = () => {
    // Criando um thumbnail.
    // useState para mudar o estado do play
    const [playing, setPlaying] = useState(false);

    return (
        <>
            <div className="flex flex-col items-center md:justify-center gap-5 m-1 p-10 px-4">
                <div className="flex flex-col md:items-start justify-center gap-5 md:flex-row  md:gap-20">
                    <div className="flex flex-col gap-5">
                        <div className="flex gap-5 flex-wrap">
                            <img
                                className="w-20 object-contain" src="/imgMissao.png" alt="" />
                            <h3 className="flex items-center justify-center text-[#A97744] text-2xl font-bold">Missão</h3>
                        </div>
                        <p className="text-[#3B2416] max-w-xs">
                            Fornecer soluções, produtos e serviços
                            de maneira clara e objetiva construindo relacionamentos duradouros com a comunidade, parceiros, colaboradores
                            e sócios, através da criação de valores.
                        </p>
                    </div>

                    <div className="flex flex-col gap-5">
                        <div className="flex gap-5">
                            <img className="w-20 object-contain" src="/imgVisao.png" alt="" />
                            <h3 className="text-[#A97744] text-2xl font-bold flex items-center justify-center">Visão</h3>
                        </div>
                        <p className="text-[#3B2416]  max-w-xs">
                            Ser referência em inovação e estimular exponencialmente a nossa gestão de maneira diversificada, próspera e justa. Com devoção e disciplina em todas as nossas operações de negócio.
                        </p>
                    </div>

                    <div className="flex flex-col gap-5">
                        <div className="flex gap-5">
                            <img className="w-20 object-contain" src="/imgValores.png" alt="" />
                            <h3 className="text-[#A97744] text-2xl font-bold flex items-center justify-center">Valores</h3>
                        </div>
                        <p className="text-[#3B2416] max-w-xs">
                            Amor ao Trabalho - Organização - Disciplina - Inovação - Busca Contínua Pela Qualidade - Foco no Cliente
                        </p>
                    </div>
                </div>
                <div className="w-full max-w-6xl px-4 mt-10">
                    <h2 className="
                        w-87.5 text-[30px] text-[#A97744]
                        md:text-[35px]
                        md:w-150
                        lg:w-192.5 
                        lg:text-[50px]
                        font-bold leading-tight">Coisas boas acontecem àqueles
                        que gostam de café</h2>

                    <div className="w-full aspect-video mt-20 relative">
                        {
                            playing ? (
                                <iframe className="absolute inset-0 w-full h-full rounded-lg" src="https://www.youtube.com/embed/RWCP7z8ufiA?autoplay=1"
                                    title="TIAMATE COFFEE " frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media;"
                                    allowFullScreen />
                            ) : (
                                <button onClick={() => setPlaying(true)}
                                    className="absolute inset-0 group cursor-pointer" >

                                    {/* Thumbnail do vídeo */}
                                    <img src="https://img.youtube.com/vi/RWCP7z8ufiA/maxresdefault.jpg" alt="Assistir vídeo"
                                        className="w-full h-full object-cover rounded-lg" />

                                    {/* Overlay escuro cobrindo 100% imagem */}
                                    <div className="absolute inset-0 bg-black/50 rounded-lg" />

                                    {/* Botão de play customizado */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        {/* Corrigido: "group-hover:bg-scale-110" → "group-hover:scale-110" (bg- não se aplica a scale) */}
                                        <img src="/thumbnailVideo.png" alt="Play"
                                            className="w-25 h-20 md:w-40 md:h-30 group-hover:scale-110 transition-transform" />
                                    </div>
                                </button>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default FitCultural;