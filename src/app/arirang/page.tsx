"use client";
import { useState, useEffect } from "react";
import "./loader.css";
import Image from "next/image";
import FormularioArirang from "./formulario";
import useRequestInfo from "@/hooks/useRequestInfo";
import ResultadoArirang from "./ResultadoArirang";
import ArirangTag from "./components/ArirangTag";
import { tagTransforms } from "./data/arirangUtils";
import ArirangTags from "./components/ArirangTags";

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
    <div className="arirang-loader">
      {arirang.map((item, index) => (
        <Image
          key={index}
          src={item.image}
          alt={item.title}
          className="arirang-image object-contain"
          width={40}
          height={40}
        />
      ))}
    </div>
  );
};

const Arirang = () => {
  const [initialLoading, setInitialLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const { handleSubmit, handleResetContent } = useRequestInfo();

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowLoader(true);
    setTimeout(() => {
      handleSubmit(e);
      setShowLoader(false);
      setShowResult(true);
    }, 3000);
  };

  const handleReset = () => {
    setShowResult(false);
    handleResetContent();
  };

  // min-h-screen to h-scree
  return (
    <div className="h-screen flex flex-col px-8 items-center justify-center overflow-hidden relative">
      {/* <div className="">
        <iframe
          data-testid="embed-iframe"Z
          style={{
            borderRadius: "12px",
            display: initialLoading ? "block" : "none",
          }}
          src="https://open.spotify.com/embed/prerelease/1DcxHW214MCDxXju71RbvX?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen={false}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="eager"
        ></iframe>
      </div> */}
      <ArirangTags />
      <ArirangTag
        title="What is your love song? What is your love song? What is your love song? What is your love song? What is your love song? What is your love song?"
        color="bg-white"
        textColor="text-red-700/50"
        transform="rotate-[25deg] translate-x-[-40%] translate-y-[-45%] w-[900vw] md:w-[600vw] lg:w-[300vw]"
        textSize="text-xl"
      />
      <ArirangTag
        title="What is your love song? What is your love song? What is your love song? What is your love song? What is your love song? What is your love song?"
        color="bg-white"
        textColor="text-red-700"
        transform="rotate-[-35deg] translate-x-[-49%] translate-y-[-50%] w-[900vw] md:w[700vw]"
        textSize="text-xl"
      />

      <ArirangTag
        title="What is your love song? What is your love song? What is your love song? What is your love song? What is your love song? What is your love song?"
        color="bg-red-700/40"
        textColor="text-red-800"
        transform="rotate-[-35deg] translate-x-[-60%] translate-y-[-25%]"
        textSize="text-xl"
      />

      <ArirangTag
        title="What is your love song? 
        what is your love song? 
        what is your love song? 
        what is your love song?
        what is your love song? 
        what is your love song?
        what is your love song? 
        what is your love song?
        what is your love song? 
        what is your love song?
        what is your love song? 
        what is your love song?
        what is your love song? 
        what is your love song?
        what is your love song? 
        what is your love song?
        what is your love song? 
        what is your love song?
        "
        color="bg-red-700/40"
        textColor="text-white"
        transform="rotate-[-10deg] translate-x-[-85%] translate-y-[25%] w-[900vw] md:w-[600vw] lg:w-[300vw]"
        textSize="text-xl"
      />

      {tagTransforms.map((transform, index) => (
        <ArirangTag
          key={index}
          title="My love song is Arirang 
          What is your love song? 
          What is your love song 
          ARIRANG
          What is your love song?
          What is your love song?
          ARIRANG
          What is your love song?
          What is your love song?
          ARIRANG
          What is your love song?
          What is your love song?
          What is your love song?
          What is your love song?
          "
          color="bg-red-700"
          textColor="text-white"
          transform={`${transform} w-[800vw] md:w-[600vw] lg:w-[300vw]`}
          textSize="text-xl"
        />
      ))}

      <ArirangTag
        title="What is your love song? What is your love song? What is your love song? What is your love song? What is your love song? What is your love song?"
        color="bg-white"
        textColor="text-red-700"
        transform="rotate-[35deg] translate-x-[-58%] translate-y-[-50%] w-[900vw]"
        textSize="text-xl"
      />
      <ArirangTag
        title="What is your love song? What is your love song? What is your love song? What is your love song? What is your love song? What is your love song?"
        color="bg-white"
        textColor="text-red-700"
        transform="rotate-[15deg] translate-x-[-61%] translate-y-[-10%] w-[300vw] md:w-[600vw]"
        textSize="text-xl"
      />

      <ArirangTag
        title="What is your love song? What is your love song? What is your love song? What is your love song? What is your love song? What is your love song?"
        color="bg-white"
        textColor="text-red-700"
        transform="rotate-[25deg] translate-x-[-35%] translate-y-[-45%] w-[900vw] md:w-[600vw] lg:w-[300vw]"
        textSize="text-xl"
      />

      <div className="flex flex-col min-h-screen w-full items-center justify-center z-10 relative ">
        <h1 className="text-4xl font-extrabold uppercase text-red-700">
          Arirang
        </h1>

        {initialLoading ? (
          <LoaderArirang />
        ) : showLoader ? (
          <LoaderArirang />
        ) : showResult ? (
          <ResultadoArirang onReset={handleReset} />
        ) : (
          <FormularioArirang onSubmit={handleFormSubmit} />
        )}
        {/* <ResultadoArirang onReset={handleReset} /> */}
      </div>
    </div>
  );
};

export default Arirang;
