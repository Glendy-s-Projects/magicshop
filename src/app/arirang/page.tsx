"use client";
import { useState, useEffect } from "react";
import "./loader.css";
import Image from "next/image";
import FormularioArirang from "./formulario";
import useRequestInfo from "@/hooks/useRequestInfo";
import ResultadoArirang from "./ResultadoArirang";
import ArirangTags from "./components/ArirangTags";
import { getBTSAlbums } from "@/services/btsAlbums";

import localFont from "next/font/local";

const myFont = localFont({
  src: "../../../public/Akzidenz_Grotesk_Next_Medium.otf",
});





const arirang = [
  {
    image: "/arirang/a.png",
    title: "a",
  },
  {
    image: "/arirang/ri.png",
    title: "ri",
  },
  {
    image: "/arirang/rang.png",
    title: "rang",
  },
];

const LoaderArirang = () => {
  return (
    <div className={`arirang-loader`}>
      {arirang.map((item, index) => (
        <Image
          key={index}
          src={item.image}
          alt={item.title}
          className={`arirang-image object-contain`}
          width={100}
          height={100}
        />
      ))}
    </div>
  );
};

const Arirang = () => {
  const [initialLoading, setInitialLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const { handleSubmit, handleResetContent, setAlbums, generateRandomSong } =
    useRequestInfo();

  useEffect(() => {
    const loadAlbums = async () => {
      try {
        const albums = await getBTSAlbums();
        const albumOptions = albums.map((album) => ({
          id: album.id,
          name: album.name,
        }));
        setAlbums(albumOptions);
      } catch (error) {
        console.error("Error loading albums:", error);
      }
    };
    loadAlbums();
  }, [setAlbums]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowLoader(true);

    try {
      await generateRandomSong();
      setTimeout(() => {
        handleSubmit(e);
        setShowLoader(false);
        setShowResult(true);
      }, 3000);
    } catch (error) {
      console.error("Error generating song:", error);
      setShowLoader(false);
    }
  };

  const handleReset = () => {
    setShowResult(false);
    handleResetContent();
  };

  return (
    <div className="h-screen  overflow-hidden relative ">
      <ArirangTags/>

      <div className={`flex flex-col min-h-screen w-full items-center justify-center z-10 relative bg-black/20 ${myFont.className}`}>
        {initialLoading ? (
          <LoaderArirang />
        ) : showLoader ? (
          <LoaderArirang />
        ) : showResult ? (
          <ResultadoArirang onReset={handleReset} />
        ) : (
          <FormularioArirang onSubmit={handleFormSubmit} />
        )}
      </div>
    </div>
  );
};

export default Arirang;
