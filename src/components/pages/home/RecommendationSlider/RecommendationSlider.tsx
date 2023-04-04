import {
  RecommendationSlide,
  RecommendationSliderButtons,
} from "@/components/ui";
import { useState } from "react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "./RecommendationSlider.css";

export const RecommendationSlider = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  return (
    <Swiper
      pagination={{
        type: "progressbar",
      }}
      modules={[Pagination]}
      spaceBetween={30}
      slidesPerView={4}
      onSlideChange={(state) => setCurrentIndex(state.activeIndex)}
      className="hero-recommendation-swiper"
    >
      <SwiperSlide>
        <RecommendationSlide />
      </SwiperSlide>
      <SwiperSlide>
        <RecommendationSlide />
      </SwiperSlide>
      <SwiperSlide>
        <RecommendationSlide />
      </SwiperSlide>
      <SwiperSlide>
        <RecommendationSlide />
      </SwiperSlide>
      <SwiperSlide>
        <RecommendationSlide />
      </SwiperSlide>
      <SwiperSlide>
        <RecommendationSlide />
      </SwiperSlide>
      <RecommendationSliderButtons currentIndex={currentIndex} />
    </Swiper>
  );
};
