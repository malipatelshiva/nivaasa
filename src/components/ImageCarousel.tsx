import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// 👉 IMPORTANT (if not already added globally)
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

function ImageCarousel({ images }: { images: string[] }) {
  return (
    <div className="w-full h-full">

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="w-full h-full rounded-xl overflow-hidden"
      >

        {images.map((img, index) => (
          <SwiperSlide key={index} className="w-full h-full">

            <img
              src={img}
              alt={`slide-${index}`}
              className="w-full h-full object-cover"
            />

          </SwiperSlide>
        ))}

      </Swiper>

    </div>
  );
}

export default ImageCarousel;