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
  return (
    <div className="w-96 h-96 relative">
      <div className=" bg-black/5 h-full flex flex-col items-center justify-center ">
        <div className="flex flex-col items-center justify-center text-purple-100 ">
          <h1
            data-testid="title"
            className="text-3xl max-md:text-xl pt-6 text-center font-extrabold uppercase max-sm:text-md pb-2 text-red-700"
          >
            What is your love song?
          </h1>
        </div>
        <div className="max-sm:px-10 max-sm:py-10 w-96 px-8">
          <form
            data-testid="form"
            className=" rounded-xl p-4 flex flex-col gap-6 text-white max-sm:text-sm "
            onSubmit={handleFormSubmit}
          >
            <InputNameUtils
              placeholder="write your name"
              className="placeholder:text-violet-200  bg-black/60"
            />
            <ButtonUtils
              label="Search"
              className="w-full cursor-pointer uppercase py-2 px-2 max-sm:text-sm bg-gray-800/80 text-white hover:bg-gray-700 disabled:bg-gray-900/70 disabled:cursor-not-allowed disabled:text-gray-600"
              disabled={!name}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormularioArirang;
