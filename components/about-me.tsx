import { Phone } from "lucide-react";
import { dataAboutMe, dataSlider } from "@/data";
import Title from "./shared/title";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Button } from "./ui/button";
import Image from "next/image";

const AboutMe = () => {
    return (
        <div className="p-6 md:px-12 md:py-30 max-w-5xl mx-auto text-center" id="about-me">
            <Title title="Sobre mí" subtitle="Toda mi trayectoria profesional" />

            {/* Contenedor General con más espacio */}
            <div className="flex flex-col md:grid md:grid-cols-2 gap-10 items-center mt-8"> 
                {/* Carrusel con margen superior */}
                <div className="flex items-center justify-center w-full mt-6 md:mt-0"> 
                    <Carousel
                        opts={{
                            align: "start"
                        }}
                        orientation="vertical"
                        className="w-full max-w-xs h-fit"
                    >
                        <CarouselContent className="-mt-1 h-[200px]">
                            {dataSlider.map((data) => (
                                <CarouselItem key={data.id}>
                                    <div className="flex items-center justify-center">
                                        <Image
                                            src={data.url}
                                            alt="Imagen"
                                            width={250}
                                            height={400}
                                            className="w-full h-auto rounded-lg"
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>

                {/* Información con margen superior y padding */}
                <div className="max-w-lg mx-auto mt-8 md:mt-0 p-4"> 
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {dataAboutMe.map((data) => (
                            <div key={data.id} className="border border-gray-200 rounded-xl p-4 shadow-md shadow-slate-100 dark:bg-slate-800">
                                {data.icon}
                                <p className="my-2">{data.name}</p>
                                <p className="text-gray-400">{data.description}</p>
                            </div>
                        ))}
                    </div>

                    <p className="my-8 text-lg">
                        Como Analista en Sistemas de Información y desarrollador Frontend, me dedico a combinar diseño y funcionalidad para crear experiencias digitales impactantes y accesibles.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;