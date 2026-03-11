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

  return (
    <div className="w-full h-96 relative" id={isActive ? "print" : undefined}>
      <div
        className={`${darkSide ? " bg-cardArirangWhite" : "bg-cardArirangRed"} bg-cover items-center pb-2  h-full flex flex-col  justify-end rounded-2xl`}
        data-testid="title"
      >
        <span
          className={` px-4 ml-2 font-extrabold uppercase text-[0.8rem] pr-10 h-[58px] z-50  top-48 left-2 translate-x-[-2%] max-w-[200px] overflow-hidden text-ellipsis `}
        >
          {songName}
        </span>

        <span
          className={` px-4 ml-2 font-extrabold uppercase text-[0.8rem] pr-4s h-[54px] z-50   left-2 translate-x-[-2%] max-w-[180px] overflow-hidden text-ellipsis `}
        >
          {name}
        </span>
      </div>
    </div>
  );
};

export default ResultadoCard1;
