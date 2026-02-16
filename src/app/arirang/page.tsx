"use client";
import { useState, useEffect } from "react";
import "./loader.css";
import Image from "next/image";
import FormularioArirang from "./formulario";
import useRequestInfo from "@/hooks/useRequestInfo";
import ResultadoArirang from "./ResultadoArirang";
//import { transform } from "next/dist/build/swc/generated-native";

// Comentario aqui
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

const ArirangTag = ({
  title,
  color,
  transform,
  textSize,
  textColor,
}: {
  title: string;
  color: string;
  transform: string;
  textSize: string;
  textColor: string;
}) => {
  return (
    <div className={`${color} ${transform} absolute p-2 top-1/2 left-1/2`}>
      <h1
        className={`${textSize} ${textColor} uppercase text-center whitespace-nowrap font-semibold`}
      >
        {title}
      </h1>
    </div>
  );
};

const tagTransforms = [
  "rotate-[20deg] translate-x-[-25%] translate-y-[-55%]",
  "rotate-[8deg] translate-y-[56%] translate-x-[-98%]",
  "rotate-[45deg] translate-y-[-50%] translate-x-[-50%]",
  "rotate-[15deg] translate-y-[42%] translate-x-[-65%]",
  "rotate-[-25deg] translate-x-[-34%] translate-y-[-45%]",
  "rotate-[-26deg] translate-x-[-75%] translate-y-[-50%]",
  "rotate-[-10deg] translate-x-[-26%] translate-y-[-45%]",
  // "rotate-[-35deg] translate-x-[-60%] translate-y-[-25%]", // transparent
  "rotate-[-2deg] translate-x-[-60%] translate-y-[-100%]",
  "rotate-[25deg] translate-x-[-48%] translate-y-[-65%]",
  "rotate-[45deg] translate-x-[-32%] translate-y-[10%]",
  //"rotate-[-10deg] translate-x-[-85%] translate-y-[25%]",
  "rotate-[-30deg] translate-x-[-25%] translate-y-[-15%]",
  "rotate-[5deg] translate-x-[-45%] translate-y-[75%]",
  "rotate-[40deg] translate-x-[-39%] translate-y-[-50%]",
  "rotate-[7deg] translate-x-[-20%] translate-y-[-20%]",
  "rotate-[-32deg] translate-x-[-32%] translate-y-[-19%]"
];

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
      {/* <div className="bottom-8">
        <ArirangTag
          title="What is"
          color="text-red-700"
          transform="rotate-[-12deg] translate-x-[-50%] translate-y-[-50%]"
          textSize="text-sm"
        />

        <ArirangTag
          title="what is your love song?"
          color="text-red-700"
          transform="rotate-[12deg] translate-x-[-50%] translate-y-[-50%] top-1/2"
          textSize="text-4xl"
        />

        <ArirangTag
          title="love song?"
          color="text-red-700"
          transform="rotate-[0deg] translate-x-[-50%] translate-y-[-50%] top-2/3"
          textSize="text-2xl"
        />
      </div> */}
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
      </div>
    </div>
  );
};

export default Arirang;
