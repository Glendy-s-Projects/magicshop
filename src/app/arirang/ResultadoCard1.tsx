import Image from "next/image";
interface ResultadoArirangCardProps {
  usuario: { name?: string; song?: string };
  resultado: { song?: string } | null;
  darkSide: boolean;
  isActive: boolean;
}

const ResultadoCard1 = ({
  usuario,
  resultado,
  darkSide,
  isActive,
}: ResultadoArirangCardProps) => {
  const songName = usuario?.song || resultado?.song || "Arirang";
  const { name } = usuario;

  const cardsARIRANG = [
    {
      cardArirangRed: "/arirang/arirangRed.webp",
    },
    {
      cardArirangWhite: "/arirang/arirangWhite.webp",
    },
  ];

  return (
    <div className="w-full h-96 relative" id={isActive ? "print" : undefined}>
      <Image
        src={`${darkSide ? cardsARIRANG[0].cardArirangRed : cardsARIRANG[1].cardArirangWhite}`}
        alt="Card Arirang"
        className="object-cover rounded-2xl"
        width={800}
        height={800}
      />

      <div className="absolute inset-0 flex items-center justify-center text-center gap-5 px-10 text-sm max-md:text-xs pt-44 max-sm:pt-6">
        <div className="relative w-full flex flex-col items-center justify-center mt-10 max-md:mt-5 max-sm:mt-52 ">
          <span className="text-[0.7rem] flex flex-col  max-md:text-xs max-sm:text-[0.6rem] text-black tracking-tighter  p-2 max-sm:p-1  ">
        <span
          className={` px-0 font-extrabold uppercase text-[1rem] pr-14 h-[58px] pt-1   overflow-hidden text-ellipsis tracking-tighter leading-none `}
        >
          {songName}
        </span>

        <span
          className={` px-4 font-extrabold uppercase text-[0.8rem] pr-4 h-[54px]  overflow-hidden text-ellipsis `}
        >
          {name}
        </span>
          </span>
        </div>
      </div>

    </div>
  );
};

export default ResultadoCard1;
