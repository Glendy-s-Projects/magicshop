import usePhotobooth from "@/hooks/usePhotobooth";
import { myFont } from "@/utils/Fonts";
import Image from "next/image";
import { ChangeEvent } from "react";

type PhotoProps = {
  preview: string | null;
  handleFileChange: (event: ChangeEvent<HTMLInputElement>) => void;
  backgroundImage: string | null;
};

const Photo = ({ preview, handleFileChange }: PhotoProps) => {
  const { changeColor } = usePhotobooth();
  return (
    <div data-test-id="Photo" className="flex flex-col items-center m-1">
      <label
        htmlFor="avatarInput"
        className={` ${preview ? "cursor-not-allowed" : "cursor-pointer"}`}
      >
        <div
          className="relative w-64 h-64 max-sm:w-40 max-sm:h-36"
          style={{ backgroundImage: "url('/arirang/bg.webp')", backgroundSize: "cover", backgroundPosition: "center" }}
        >
          {preview ? (
            <Image
              src={preview}
              alt="photoboothbts"
              fill
              className="object-cover"
            />
          ) : (
            <div
              className={`relative flex items-center justify-center w-full h-full cursor-grab  `}
            >
              <h1
                className={`text-center ${myFont.className} ${changeColor === true
                  ? "text-transparent max-sm:text-xs max-sm:truncate"
                  : "max-sm:text-xs max-lg:text-sm max-xl:text-sm text-purple-900"
                  }`}
              >
                Click to Add Your Photo
              </h1>
            </div>
          )}
        </div>
      </label>
      <input
        type="file"
        className="hidden"
        id="avatarInput"
        accept="image/*"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default Photo;
