import { useState, useEffect } from 'react';
import useDarkMode from "@/hooks/useDarkMode";
import useDownload from "@/hooks/useDownload";
import useRequestInfo from "@/hooks/useRequestInfo";
import { ButtonUtils } from "@/utils/ButtonUtils";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi}
   from "@/hooks/components/ui/carousel";
import ResultadoCarousel from "./components/ResultadoCarousel";
import Switcher  from '@/utils/Switcher';

interface ResultadoArirangProps {
  onReset?: () => void;
}

const ResultadoArirang = ({ onReset }: ResultadoArirangProps) => {
  const { usuario, handleResetContent, resultado } = useRequestInfo();
  const { darkSide } = useDarkMode();
  const { handleDownloadImage } = useDownload();

  const [activeIndex, setActiveIndex] = useState(0);
  const [emblaApi, setEmblaApi] = useState<CarouselApi | null>(null);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setActiveIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect(); // Establecer el índice activo inicial

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const handleDowloadActiveCard = () => {
    handleDownloadImage();
  };


  return (
    <>
      <div>
        <iframe
          data-testid="modal-iframe"
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/prerelease/1DcxHW214MCDxXju71RbvX?utm_source=generator"
          width="300"
          height="100"
          frameBorder="0"
          allowFullScreen={false}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="eager"
        />
      </div>

    

    <div className="w-64 h-96 relative">

    <ResultadoCarousel 
        usuario={usuario}
        resultado={resultado}
        darkSide={darkSide}
        activeIndex={activeIndex}
        onChangeIndex={setActiveIndex}
        setApi={setEmblaApi}
    />


        <div className="flex items-center justify-center gap-2 pt-2 z-50 ">
          <ButtonUtils
            label="Download"
            onClick={handleDowloadActiveCard}
            className="bg-black text-white py-2 px-4 cursor-pointer"
            disableColors="disabled:bg-opacity-25 disabled:cursor-not-allowed  "
          />
          <ButtonUtils
            label="Restart"
            onClick={onReset || handleResetContent}
            className="bg-black text-white py-2 px-4 cursor-pointer"
          />

          <div className="flex items-center flex-col justify-center">
            <Switcher />
            <span className="text-[8px]">{!darkSide ? <span className="text-white">Light</span> : "Dark"}</span>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default ResultadoArirang;

