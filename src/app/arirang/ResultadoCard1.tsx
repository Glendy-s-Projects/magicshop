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
    <div className="w-full h-full relative">
      <div
        className={`${darkSide ? " bg-cardArirangWhite" : "bg-cardArirangRed"} bg-cover items-center pb-12  h-full flex flex-col  justify-end rounded-2xl`}
        id={isActive ? "print" : undefined}
        data-testid="title"
      >
        <span
          className={` px-2 ml-2 font-extrabold uppercase text-[1rem] pr-10 h-[73px] z-50 top-52 left-2 translate-x-[-2%] max-w-[200px] overflow-hidden text-ellipsis truncate whitespace-nowrap`}
        >
          {songName}
        </span>
      </div>
    </div>
  );
};

export default ResultadoCard1;
