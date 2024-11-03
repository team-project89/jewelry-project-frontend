import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselDemo({ images }) {
  return (
    <Carousel className='w-full max-w-xs mx-auto'>
      <CarouselContent>
        {images.map((imageUrl, index) => (
          <CarouselItem key={index}>
            <div className='p-1 flex flex-row'>
              <Card>
                <CardContent className='flex aspect-square items-center justify-center p-6'>
                  <img
                    src={imageUrl}
                    alt={`Image ${index + 1}`}
                    className='object-contain w-full h-full '
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
