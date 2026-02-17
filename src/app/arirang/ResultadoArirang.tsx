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

  return (
    <div className="w-96 h-96 relative">
      <div
        className={`bg-white h-full flex flex-col items-center justify-center `}
        id="print"
      >
        <div data-testid="title" className="test-3xl flex-colw-full w-full items-center justify-center px-2 mx-2 max-md:text-xl  text-center font-bold uppercase max-sm:text-md space-y-0 text-white"
        >
          <span className=" bg-red-700 px-2 pr-10 pt-1 pb-1 py-2 max-h-9 rotate-[5deg] translate-x-[-5%] border border-gray-600  z-90 absolute top-9 left-8">
            My
          </span>

          <span className=" bg-red-700 px-2 py-1 pr-16 pb-1 max-h-9 rotate-[-1deg] translate-x-[-5%] border-gray-600 z-80 absolute top-17 left-8">
            Love
          </span>

          <span className="bg-red-700 px-2 py-1 pr-9 pb-1 max-h-9 rotate-[5deg] translate-x-[-5%] border-gray-600 z-70 absolute top-24 left-10">
            Song
            </span>

            <span className="bg-red-700 px-2 py-1 pr-15 pb-1 max-h-9 rotate-[-5deg] translate-x-[-5%] border-gray-600 z-60 absolute top-31 left-7">
              is
            </span>

          <span className="bg-red-700 px-16 py-2 pr-16 pb-1 max-12 rotate-[5deg] translate-x-[-5%] border-gray-600 z-50 absolute top-40 left-10"> <span> (</span>  <span> ) </span>
               
            
            <span className="bg-red-700 px-1 py-2 pr-16 pb-1 max-12 rotate-[5deg] translate-x-[-5%] border-gray-600 z-50 absolute top-40 left-15">  

            </span>
          </span>
        </div>

      </div>

      <div className="flex items-center justify-center gap-2">
        <ButtonUtils
          label="Download"
          onClick={handleDownloadImage}
          className="bg-black text-white py-2 px-4"
          disableColors="disabled:bg-opacity-25 disabled:cursor-not-allowed"
        />
        <ButtonUtils
          label="Restart"
          onClick={onReset || handleResetContent}
          className="bg-black text-white py-2 px-4"
        />
      </div>



    </div>
  );
};

export default ResultadoArirang;



