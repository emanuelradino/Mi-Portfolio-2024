import { dataFormation} from "@/data";
import Title from "./shared/title";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Formacion = () => {
    return (
        <div className="p-4 md:px-12 md:py-44 max-w-5xl mx-auto">
            <Title title=" Formación Académica" subtitle="Universidad Siglo 21" />

            <Carousel className="mx-10 mt-6">
                <CarouselContent className="gap-8">
                    {dataFormation.map((formation) => (
                        <CarouselItem key={formation.id}
                            className="md:basis-1/3 p-4 text-center flex 
                    flex-col items-center border-slate-400 border-2 
                    rounded-lg">
                            
                            <div>
                                <p className="min-h-12 text-2xl mt-4">{formation.name}</p>
                                <p>{formation.description}</p>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
}

export default Formacion;