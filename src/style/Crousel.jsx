import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";

export function CarouselDemo({ images = [], sizeProduct, token, id }) {
  return (
    <Carousel className={`w-full max-w-${sizeProduct} mx-auto  rounded-e-md`}>
      <CarouselContent>
        {images.map((imageUrl, index) => (
          <CarouselItem key={index}>
            <div className='p-1 flex flex-row'>
              <Card>
                <CardContent className='flex aspect-square items-center justify-center p-6'>
                  <Link to={token ? `singleproduct/${id}` : `/${id}`} className="w-full">
                    <img
                      src={imageUrl}
                      alt={`Image ${index + 1}`}
                      className='object-contain w-full h-auto p-4'
                    />
                  </Link>
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
