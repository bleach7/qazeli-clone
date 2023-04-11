import {
  Container,
  HotelSlide,
  RecommendationSliderButtons,
} from "@/components/ui";
import { useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

export const HotelSlider = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  return (
    <section className="mb-[80px]">
      <Container>
        <div>
          <Swiper
            spaceBetween={30}
            slidesPerView={4}
            onSlideChange={(state) => setCurrentIndex(state.activeIndex)}
            className="relative"
          >
            <SwiperSlide>
              <HotelSlide />
            </SwiperSlide>
            <SwiperSlide>
              <HotelSlide />
            </SwiperSlide>
            <SwiperSlide>
              <HotelSlide />
            </SwiperSlide>
            <SwiperSlide>
              <HotelSlide />
            </SwiperSlide>
            <SwiperSlide>
              <HotelSlide />
            </SwiperSlide>
            <SwiperSlide>
              <HotelSlide />
            </SwiperSlide>
            <RecommendationSliderButtons
              currentIndex={currentIndex}
              className="absolute bottom-0 left-0 z-50"
            />
          </Swiper>
        </div>
      </Container>
    </section>
  );
};
