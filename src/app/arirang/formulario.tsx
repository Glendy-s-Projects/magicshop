import useRequestInfo from "@/hooks/useRequestInfo";
import { ButtonUtils } from "@/utils/ButtonUtils";
import InputNameUtils from "@/utils/InputNameUtils";
import React from "react";

interface FormularioArirangProps {
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

const FormularioArirang = ({ onSubmit }: FormularioArirangProps) => {
  const { handleSubmit, usuario } = useRequestInfo();
  const { name } = usuario;

  const handleFormSubmit = onSubmit || handleSubmit;
  const tagsStyles= " bg-arirangWhiteTag px-8 py-2"
  return (
    <div className="w-96 h-96 relative">
      <div className=" bg-[#f5193b] h-full flex flex-col items-center justify-center ">
        <div
          data-testid="title"
          className="text-3xl flex flex-col w-full items-center justify-center px-4  max-md:text-xl  text-center font-bold uppercase max-sm:text-md space-y-0 text-red-600"
        >
          <span className={`${tagsStyles} object-contain px-6 py-2.5 mx-12 rotate-[-7deg] translate-x-[-5%]   z-90`}>
            What is
          </span>

          <span className={`${tagsStyles} rotate-[8deg] translate-x-[-1%]   z-60`}>
            your
          </span>

          <span className={`${tagsStyles} z--1000`}>
            love song?
          </span>
        </div>

        <div className="max-sm:px-10 max-sm:py-10 w-96 px-8">
          <form
            data-testid="form"
            className=" rounded-xl p-4 flex flex-col gap-6 text-white max-sm:text-sm "
            onSubmit={handleFormSubmit}
          >
            <InputNameUtils
              placeholder="write your name"
              className="placeholder:text-red-200 text-center bg-[#d60f2d] border-0 rounded-sm py-1 px-2"
            />
            <ButtonUtils
              label="Search"
              className={`w-full cursor-pointer uppercase py-2 px-2 max-sm:text-sm  text-white  ${name ? "bg-red-800 hover:bg-red-900 rounded-xl active:bg-red-900/70" : "disabled:cursor-not-allowed disabled:text-red-400 disabled:hover-none disabled:bg-red-600/50"}`}
              disabled={!name}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormularioArirang;
