import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, type 
    CarouselApi } from "@/hooks/components/ui/carousel";
import ResultadoCard1 from "../ResultadoCard1";
import ResultadoCard2 from "../ResultadoCard2";


interface ResultadoCarouselProps {
    usuario: { name?: string; song?: string};
    resultado: { song?: string} | null;
    darkSide: boolean;
    activeIndex: number;
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
                    <ResultadoCard2
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