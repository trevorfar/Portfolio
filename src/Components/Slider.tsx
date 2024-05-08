import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
 } from "@/Components/ui/carousel";
import Image from "next/image";

const Slider = ({ images }: any) => {
  return (
    <Carousel>
      <CarouselContent>
        {images.map((image: any, index: number) => (
          <CarouselItem key={index}>
            <Image
              src={image}
              alt=""
              width={800}
              height={400}
              quality={100}
              placeholder="blur"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Slider;
