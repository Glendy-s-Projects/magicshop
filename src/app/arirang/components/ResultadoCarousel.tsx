import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, type 
    CarouselApi } from "@/hooks/components/ui/carousel";
import ResultadoCard1 from "../ResultadoCard1";
import ResultadoArirangpt2 from "../Resultadopt2";


interface ResultadoCarouselProps {
    usuario: { name?: string; song?: string};
    resultado: { song?: string} | null;
    darkSide: boolean;
    activeIndex: number;
    onChangeIndex: (newIndex: number) => void;
    setApi?: (api: CarouselApi) => void;
}

const ResultadoCarousel = ( { usuario, resultado, darkSide, activeIndex, setApi }: ResultadoCarouselProps ) => {


    return (
        <Carousel setApi={setApi}>
            <CarouselContent>
                <CarouselItem>
                    <ResultadoCard1 
                    usuario={usuario} 
                    resultado={resultado} 
                    darkSide={darkSide}
                    isActive={activeIndex === 0}
                    />
                </CarouselItem>
                <CarouselItem>
                    <ResultadoArirangpt2 
                    usuario={usuario}
                    isActive={activeIndex === 1}
                     />
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="hover:bg-[#f5193b]" />
            <CarouselNext />
        </Carousel>
    )
};

export default ResultadoCarousel;