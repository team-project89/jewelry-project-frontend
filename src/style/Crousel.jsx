import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselDemo({ images = [], sizeProduct }) {
  return (
    <Carousel className={`w-full max-w-${sizeProduct} mx-auto rounded-lg shadow-lg`}>
      <CarouselContent>
        {images.map((imageUrl, index) => (
          <CarouselItem key={index}>
            <Card className="border-none bg-transparent">
              <CardContent className="flex aspect-square items-center justify-center p-2 hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full relative group">
                  <img
                    src={imageUrl}
                    alt={`Image ${index + 1}`}
                    className="object-contain w-full h-full rounded-lg hover:shadow-xl transition-shadow duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-lg" />
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-white/50 hover:bg-white/90 -left-4 shadow-lg border-none" />
      <CarouselNext className="bg-white/50 hover:bg-white/90 -right-4 shadow-lg border-none" />
    </Carousel>
  );
}
