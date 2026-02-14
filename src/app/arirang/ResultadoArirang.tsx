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
    <div className={`flex flex-col gap-6 `}>
      <div
        className={`flex flex-col shadow-2xl shadow-black/80 font-virthday3`}
        id="print"
      >
        <div>
          <div>
            <span>
              To: <span>{name}</span>
            </span>
          </div>
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
