import useRequestInfo from "@/hooks/useRequestInfo";
import { ButtonUtils } from "@/utils/ButtonUtils";
import InputNameUtils from "@/utils/InputNameUtils";
import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
  ComboboxEmpty,
} from "@/hooks/components/ui/combobox";
import React from "react";
import useDarkMode from "@/hooks/useDarkMode";

interface FormularioArirangProps {
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

const FormularioArirang = ({ onSubmit }: FormularioArirangProps) => {
  const { handleSubmit, usuario, albums, selectedAlbum, setSelectedAlbum } =
    useRequestInfo();

  const { darkSide } = useDarkMode();
  const { name } = usuario;
  const [searchValue, setSearchValue] = React.useState("");
  const handleFormSubmit = onSubmit || handleSubmit;
  const selectedAlbumName =
    albums.find((a) => a.id === selectedAlbum)?.name || "";
  const filteredAlbums = albums.filter((album) =>
    album.name.toLowerCase().includes(searchValue.toLowerCase()),
  );

  const tagsStyles = `${darkSide ? "bg-arirangWhiteTag" : "bg-arirangRedTag2"} px-8 py-2 bg-cover bg-no-repeat`;

  return (
    <div className="w-full h-full  flex items-center justify-center relative">
      <div
        className={`${darkSide ? "bg-[#f5193b]" : "bg-white"}  py-6 flex flex-col items-center justify-center rounded-2xl`}
      >
        <div
          data-testid="title"
          className={`text-3xl flex flex-col w-full items-center justify-center  max-md:text-xl  text-center font-bold uppercase max-sm:text-md space-y-0 ${darkSide ? "text-[#d60f2d]" : "text-black"} `}
        >
          <span
            className={`${tagsStyles} object-contain px-6 py-2.5 mx-12 rotate-[-7deg] translate-x-[-5%]   z-90`}
          >
            What is
          </span>

          <span
            className={`${tagsStyles} rotate-[8deg] translate-x-[-1%]   z-60`}
          >
            your
          </span>

          <span className={`${tagsStyles} z--1000`}>love song?</span>
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

            <div className="flex flex-col">
              <Combobox
                value={selectedAlbumName}
                onValueChange={(value) => {
                  const album = albums.find((a) => a.name === value);
                  setSelectedAlbum(album?.id || "");
                  setSearchValue("");
                }}
              >
                <ComboboxInput
                  placeholder="Choose an album..."
                  className="text-center bg-[#d60f2d]  border-0 rounded-sm py-1 px-2 text-white placeholder:text-red-200"
                  value={searchValue || selectedAlbumName}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
                <ComboboxContent>
                  <ComboboxList className="bg-[#d60f2d] text-white ">
                    <ComboboxEmpty>No albums found.</ComboboxEmpty>
                    {filteredAlbums.map((album) => (
                      <ComboboxItem
                        key={album.id}
                        value={album.name}
                        className={`bg-[#ab041d]`}
                      >
                        {album.name}
                      </ComboboxItem>
                    ))}
                  </ComboboxList>
                </ComboboxContent>
              </Combobox>
            </div>

            <ButtonUtils
              label="Search"
              className={`w-full cursor-pointer uppercase py-2 px-2 max-sm:text-sm  text-white  ${name && selectedAlbum ? "bg-red-800 hover:bg-red-900 rounded-xl active:bg-red-900/70" : "disabled:cursor-not-allowed disabled:text-red-400 disabled:hover-none disabled:bg-red-600/50"}`}
              disabled={!name || !selectedAlbum}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormularioArirang;
