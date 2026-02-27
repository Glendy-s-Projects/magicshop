interface ResultadoArirangCardProps {
    usuario: { name?: string; song?: string};
    resultado: { song?: string} | null;
    darkSide: boolean;
    isActive: boolean;
}

const ResultadoCard1 = ( { usuario, resultado, darkSide, isActive } : ResultadoArirangCardProps) => {

    const songName = usuario?.song || resultado?.song || "Arirang";
    const { name } = usuario;


    const tagsStyles = `${darkSide ? "bg-arirangWhiteTag" : "bg-arirangRedTag2"} bg-contain bg-no-repeat px-2 w-56 text-4xl py-2 translate-x-[-5%] absolute`;
 
  return (

    <div className="w-64 h-96 relative">
      <div
        className={`${darkSide ? "bg-[#f5193b]" : "bg-white"} h-full flex flex-col items-center justify-center rounded-2xl `}
        id={isActive ? "print" : undefined}
      >
        <div
          data-testid="title"
          className={`flex flex-col w-full h-full pb-10 items-end justify-end px-2 mx-2  text-center font-bold uppercase max-sm:text-md   ${darkSide ? "text-red-600" : "text-black"}`}
        >
          <div>
            <span
              className={`${tagsStyles} pr-10 z-50 top-9 left-8`}
              style={{ transform: "rotate(5deg)" }}
            >
              My
            </span>

            <span
              className={`${tagsStyles}   pr-16 pb-1 z-40  top-20 left-8 translate-x-[-1%] `}
              style={{ transform: "rotate(-1deg)" }}
            >
              Love
            </span>

            <span
              className={`${tagsStyles}  pr-9 pb-1 z-30  top-30 left-10`}
              style={{ transform: "rotate(5deg)" }}
            >
              Song
            </span>

            <span
              className={`${tagsStyles}  pr-16 pb-1    z-20  top-36 left-7`}
              style={{ transform: "rotate(-5deg)" }}
            >
              is
            </span>
          </div>

          <div className="flex flex-col items-center justify-center px-0 gap-4">
            <span
              className={` ${darkSide ? "bg-arirangWhiteTag" : "bg-arirangRedTag2"} bg-cover px-2 w-full `}
            >
              <span className="text-red-900 text-3xl"> (</span>
              <span className="max-sm:text-xs text-xs">{songName}</span>
              <span className="text-red-900 text-3xl"> ) </span>
            </span>
            <span
              className={` ${darkSide ? "bg-arirangWhiteTag" : "bg-arirangRedTag2"} bg-cover w-44 py-2   text-xs   `}
              style={{ transform: "rotate(-12deg)" }}
            >
              {name}
            </span>
          </div>
        </div>

        <h1
          className={`w-full text-end text-xs p-2 font-extrabold ${darkSide ? "text-white" : "text-[#f5193b]"}`}
        >
          ARIRANG
        </h1>
      </div>
    </div>
  );
};


export default ResultadoCard1;