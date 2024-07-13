import { LazyLoadImage } from "react-lazy-load-image-component";
import { images } from "../../utils/carouselImages";
import Marquee from "react-fast-marquee";

const CarouselSlider = () => {
  return (
    <div className="z-[50] mx-2 scroll-m-0">
      <Marquee>
        {images.map((image) => (
          <div key={image.id}>
            <LazyLoadImage
              src={image.url}
              alt={image.id}
              className="w-[250px] h-[150px] md:w-[320px] md:h-[220px] xl:w-[400px] xl:h-[300px] mx-2 lg:mx-4 rounded-full object-cover overflow-y-hidden"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};
export default CarouselSlider;
