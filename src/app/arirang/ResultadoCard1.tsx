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

  return (
    <div 
      className="w-full h-96 relative"
      id={isActive ? "print" : undefined}
    >
      <div
        className={`${darkSide ? " bg-cardArirangWhite" : "bg-cardArirangRed"} bg-cover items-center pb-14  h-full flex flex-col  justify-end rounded-2xl`}
        data-testid="title"
      >
        <span
          className={` px-4 ml-2 font-extrabold uppercase text-[1rem] pr-10 h-[73px] z-50 top-48 left-2 translate-x-[-2%] max-w-[200px] overflow-hidden text-ellipsis `}
        >
          {songName}
        </span>
      </div>
    </div>
  );
};

export default ResultadoCard1;
