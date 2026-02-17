import useDownload from "@/hooks/useDownload";
import useRequestInfo from "@/hooks/useRequestInfo";
import { ButtonUtils } from "@/utils/ButtonUtils";
import React from "react";

interface ResultadoArirangProps {
  onReset?: () => void;
}

const ResultadoArirang = ({ onReset }: ResultadoArirangProps) => {
  const { usuario, handleResetContent } = useRequestInfo();
  const { name } = usuario;
  const { handleDownloadImage } = useDownload();

  const tagsStyles =
    "  bg-arirangRedTag object-contain  px-4   w-36 text-2xl max-h-10  translate-x-[-5%]  absolute ";

  return (
    <div className="w-96 h-96 relative">
      <div
        className={`bg-white h-full flex flex-col items-center justify-center `}
        id="print"
      >
        <div
          data-testid="title"
          className=" flex-col w-full items-center justify-center px-2 mx-2 max-md:text-xl  text-center font-bold uppercase max-sm:text-md space-y-0 text-white"
        >
          <span
            className={`${tagsStyles} pr-10 pt-1  pb-1 rotate-[5deg] z-90 top-9 left-8`}
          >
            My
          </span>

          <span
            className={`${tagsStyles}   pr-16 pb-1 rotate-[-1deg]   z-80  top-17 left-8`}
          >
            Love
          </span>

          <span
            className={`${tagsStyles}  pr-9 pb-1 rotate-[5deg]   z-70  top-24 left-10`}
          >
            Song
          </span>

          <span
            className={`${tagsStyles}  pr-15 pb-1 rotate-[-5deg]   z-60  top-31 left-7`}
          >
            is
          </span>

          <span
            className={`${tagsStyles} px-18 w-56  pr-16  max-12 rotate-[5deg]   z-50  top-40 left-10`}
          >
            {}
            <span> (</span>
            <span> ) </span>
            <span
              className={` ${tagsStyles} w-44 text-xs py-2 pr-16 pb-1 max-12 rotate-[5deg] z-50 top-40 left-15`}
            >
              {name}
            </span>
          </span>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 pt-2">
        <ButtonUtils
          label="Download"
          onClick={handleDownloadImage}
          className="bg-black text-white py-2 px-4"
          disableColors="disabled:bg-opacity-25 disabled:cursor-not-allowed "
        />
        <ButtonUtils
          label="Restart"
          onClick={onReset || handleResetContent}
          className="bg-black text-white py-2 px-4 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default ResultadoArirang;
