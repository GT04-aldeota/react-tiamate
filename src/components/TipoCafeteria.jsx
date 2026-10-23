import { useState } from "react";

const CheckIcon = () => (
  <svg
    className="mt-0.5 h-6 w-6 shrink-0 text-[#a8743f]"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="8 12.5 11 15.5 16 9" />
  </svg>
);

// Bloco reutilizável: recebe os dados de UMA cafeteria
const CardCafeteria = ({ nome, infos, fotos }) => {
  // cada card tem a sua própria foto ativa
  const [fotoAtiva, setFotoAtiva] = useState(fotos[0]);
  const miniaturas = fotos.filter((foto) => foto !== fotoAtiva);

  return (
    <section className="mx-auto grid w-full max-w-6xl grid-cols-1 items-start gap-8 px-4 text-[#3b1f14] sm:px-6 md:grid-cols-2 md:gap-10 lg:grid-cols-[1fr_1.3fr] lg:px-8">
      {/* Informações */}
      <div>
        <span className="text-base text-neutral-700">Cafeteria</span>
        <h2 className="mb-6 mt-1 text-3xl font-bold text-[#a8743f] sm:text-4xl lg:text-[40px]">
      {nome}
        </h2>

        <ul className="flex flex-col gap-5">
          {infos.map((item) => (
            <li key={item.titulo} className="flex items-start gap-4">
              <CheckIcon />
              <p className="text-[15px] leading-normal">
                <strong>{item.titulo}:</strong> {item.valor}
                {item.extra && (
                  <>
                    <br />
                    {item.extra}
                  </>
                )}
              </p>
            </li>
          ))}
        </ul>
      </div>

     {/* Galeria: miniaturas SEMPRE ao lado da foto grande */}
<div className="grid w-full grid-cols-[1fr_4rem] items-stretch gap-2 sm:grid-cols-[1fr_6rem] sm:gap-3 md:grid-cols-[1fr_7rem] lg:grid-cols-[1fr_9rem]">
  {/* Foto grande */}
  <div className="aspect-[503/517] min-w-0 overflow-hidden rounded-lg">
    <img
      src={fotoAtiva}
      alt={nome}
      className="h-full w-full object-cover"
    />
  </div>

  {/* Miniaturas: coluna ao lado, mesma altura da foto grande */}
  <div className="relative">
    <div className="absolute inset-0 flex flex-col gap-2">
      {miniaturas.map((src) => (
        <button
          key={src}
          type="button"
          onClick={() => setFotoAtiva(src)}
          className="min-h-0 flex-1 overflow-hidden rounded-lg"
        >
          <img
            src={src}
            alt={`Miniatura ${nome}`}
            className="h-full w-full object-cover transition hover:opacity-80"
          />
        </button>
      ))}
    </div>
  </div>
</div>
    </section>
  );
};

// Componente principal: aqui ficam os dados das duas cafeterias
const TipoCafeteria = () => {
  const cafeterias = [
    {
      nome: "Tiamate Coffee",
      infos: [
        { titulo: "Espaço", valor: "30 a 45 m²" },
        { titulo: "Faturamento Médio", valor: "R$ 40 MIL" },
        {
          titulo: "Royaltyes",
          valor: "5% do faturamento.",
          extra: "(Valor mínimo R$ 2.000,00)",
        },
        { titulo: "Taxa de Marketing", valor: "2% do Faturamento" },
        { titulo: "Ponto de Equilíbrio", valor: "2 a 3 Meses" },
        { titulo: "Prazo de Retorno", valor: "18 a 24 Meses" },
        { titulo: "Lucro Médio", valor: "25%" },
        { titulo: "Investimento total estimado", valor: "R$130 MIL" },
      ],
      fotos: [
        "/mini1.png", // a primeira é a que aparece grande no início
        "/mini2.png",
        "/mini3.png",
        "/mini4.png",
        "/mini5.png",
      ],
    },
    {
      nome: "Tiamate Coffee To Go",
      infos: [
        { titulo: "Espaço", valor: "8 a 12 m²" },
        { titulo: "Faturamento Médio", valor: "R$ 25 MIL" },
        {
          titulo: "Royaltyes",
          valor: "5% do faturamento.",
          extra: "(Valor mínimo R$ 1.500,00)",
        },
        { titulo: "Taxa de Marketing", valor: "2% do Faturamento" },
        { titulo: "Ponto de Equilíbrio", valor: "2 a 3 Meses" },
        { titulo: "Prazo de Retorno", valor: "18 a 24 Meses" },
        { titulo: "Lucro Médio", valor: "25%" },
        { titulo: "Investimento total estimado", valor: "R$100 MIL" },
      ],
      
      fotos: [
        "/mini6.png",
        "/mini7.png",
        "/mini8.png",
        "/mini9.png",
        "/mini10.png",
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-24 py-10">
      {cafeterias.map((cafeteria) => (
        <CardCafeteria
          key={cafeteria.nome}
          nome={cafeteria.nome}
          infos={cafeteria.infos}
          fotos={cafeteria.fotos}
        />
      ))}
    </div>
  );
};

export default TipoCafeteria;