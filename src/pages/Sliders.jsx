import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import expressDelivery from "../../public/expressDelivery.png";
import cashOnDelivery from "../../public/cashOnDelivery.png";
import giftVoucher from "../../public/giftVoucher.png";
import freeDelivery from "../../public/freeDelivery.png";
import couponSavings from "../../public/couponSavings.png";

const images = [
  expressDelivery,
  cashOnDelivery,
  giftVoucher,
  freeDelivery,
  couponSavings,
];

export default function Sliders() {
  return (
    <div className="w-full">
      <div className="w-full py-8 px-6">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-full mx-auto"
        >
          <CarouselContent className="flex -ml-1 w-full">
            {images.map((image, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3 pl-1"
              >
                <div className="px-1">
                  <Card className="w-full">
                    <CardContent className="flex items-center justify-center p-0">
                      <img
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className="h-[244px] w-full rounded-lg object-cover"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute -left-3 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-lg p-2 text-black hover:bg-[#007b63] hover:text-white border hover:border-[#007b63]" />
          <CarouselNext className="absolute -right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-lg p-2 text-black hover:bg-[#007b63] hover:text-white border hover:border-[#007b63]" />
        </Carousel>
      </div>
    </div>
  );
}
