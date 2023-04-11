import { ArrowLeftIcon, ArrowRightIcon } from "@/assets/imgs/icons";
import classNames from "classnames";
import { useSwiper } from "swiper/react";
import { IRecommendationSliderButtons } from "./RecommendationSliderButtons.interface";

export const RecommendationSliderButtons = ({
  currentIndex,
  className,
}: IRecommendationSliderButtons) => {
  const swiper = useSwiper();

  return (
    <div
      className={classNames(
        "mt-[80px] flex items-center gap-x-[15px]",
        className
      )}
    >
      <button
        type="button"
        onClick={() => swiper.slidePrev()}
        className={classNames(
          "flex h-[47px] w-[47px] items-center justify-center rounded-full border border-[#EDF2F5] bg-white text-[#EDF2F5] transition-colors duration-300 ease-in-out",
          {
            ["border-[#F1E230] text-[#F1E230]"]: currentIndex !== 0,
          }
        )}
      >
        <ArrowLeftIcon className="h-[20px] w-[20px] -translate-x-[1px]" />
      </button>
      <button
        type="button"
        onClick={() => swiper.slideNext()}
        className={classNames(
          "flex h-[47px] w-[47px] items-center justify-center rounded-full border border-[#EDF2F5] bg-white text-[#EDF2F5] transition-colors duration-300 ease-in-out",
          {
            ["border-[#F1E230] text-[#F1E230]"]: currentIndex !== 2,
          }
        )}
      >
        <ArrowRightIcon className="h-[20px] w-[20px] translate-x-[2px]" />
      </button>
    </div>
  );
};
