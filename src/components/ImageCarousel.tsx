import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

type Props = {
  images: string[];
};

function ImageCarousel({ images }: Props) {
  return (
    <div className="w-full h-full">

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full h-full rounded-xl overflow-hidden"
      >

        {images.map((img, index) => (
          <SwiperSlide key={index} className="w-full h-full">
            <img
              src={img}
              alt={`slide-${index}`}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}

      </Swiper>

    </div>
  );
}

export default ImageCarousel;