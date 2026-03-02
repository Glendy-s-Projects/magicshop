interface ResultadoArirang2CardProps {
  usuario: { name?: string; song?: string };
  isActive: boolean;
  darkSide: boolean;
}

const ResultadoCard2 = ({
  usuario,
  isActive,
  darkSide,
}: ResultadoArirang2CardProps) => {
  const { name } = usuario;

  const tagsStyles =
    "bg-contain bg-no-repeat text-4xl py-2 translate-x-[-5%] w-56 absolute";

  return (
    <>
      <div className="w-64 h-96 relative">
        <div
          className={`${darkSide ? " bg-red-700" : "bg-white"}  h-full flex flex-col items-center justify-center rounded-2xl`}
          id={isActive ? "print" : undefined}
        >
          <div
            data-testid="title"
            className="flex flex-col w-full h-full pb-1 items-end justify-end px-2 mx-2  text-center font-bold uppercase max-sm:text-md text-black"
          >
            <div className="flex flex-col items-center justify-center px-0 gap-4">
              <span
                className={`${darkSide ? " bg-arirangRedTag2White" : "bg-arirangRedTag2"}  bg-cover py-2 text-lg absolute font-extrabold top-7 left-3 z-30`}
                style={{ transform: "rotate(-6deg)" }}
              >
                {name}
              </span>
            </div>

            <div>
              <span
                className={` ${tagsStyles} ${tagsStyles} ${darkSide ? "bg-ribbonWhatIsWhite" : "bg-ribbonWhatIs"} h-16 bg-cover w-60 left-5 top-16 pr-[68px] z-20 whitespace-nowrap py-4`}
                style={{ transform: "rotate(-1deg)" }}
              >
                WHAT IS
              </span>

              <span
                className={`${tagsStyles}  ${darkSide ? "bg-ribbonYourWhite" : "bg-ribbonYour"}  pr-36 py-10 pb-1 z-10 top-[87px] left-8`}
                style={{ transform: "rotate(1deg)" }}
              >
                YOUR
              </span>

              <span
                className={`${darkSide ? "bg-ribbonLoveWhite" : "bg-ribbonLove"}  ${tagsStyles} pr-24 pt-3 z-50 top-[155px] left-4`}
                style={{ transform: "rotate(0deg)" }}
              >
                LOVE
              </span>

              <span
                className={`${darkSide ? "bg-ribbonSongWhite " : "bg-ribbonSong"}  ${tagsStyles} pr-10 px-2 h-[73px] z-50 top-52 left-2 translate-x-[-8%] `}
                style={{ transform: "rotate(2deg)" }}
              >
                SONG?
              </span>

              <span
                className={` ${darkSide ? "bg-ribbonQRWhite" : "bg-ribbonQR"}   pr-20 h-20 w-36 z-10 py-4 top-64 left-2 bg-cover absolute`}
                style={{ transform: "rotate(-4deg)" }}
              ></span>
            </div>

            <div className="flex flex-col justify-center items-center w-16">
              <div className="pl-2">
                <span
                  className={`${darkSide ? "bg-ribbonHeartWhite  " : "bg-ribbonHeart"}  px-14 inline-block h-14 bg-cover`}
                ></span>
              </div>

              {/* <span className="bg-ribbonSquare bg-cover py-8 px-9"></span> */}
            </div>
          </div>

          <h1 className="w-full text-end text-xs p-2 font-extrabold ">
            ARIRANG
          </h1>
        </div>
      </div>
    </>
  );
};

export default ResultadoCard2;
