import { ArrowRightIcon } from "@/assets/imgs/icons";
import recommendationImg from "@/assets/imgs/recommendation.jpg";
import { Link } from "react-router-dom";

export const RecommendationSlide = () => {
  return (
    <Link
      to="#recommendation"
      className="group relative flex min-h-[384px] flex-col justify-between overflow-hidden rounded-[25px] px-[32px] pb-[31px] pt-[36px] text-white"
    >
      <div className="absolute inset-0 h-full w-full before:absolute before:inset-0 before:h-full before:w-full before:bg-[linear-gradient(0deg,_rgba(0,0,0,0.4),_rgba(0,0,0,0.4))] before:transition-colors before:duration-300 before:ease-in-out before:content-[''] group-hover:before:bg-[linear-gradient(0deg,_rgba(49,189,248,0.82),rgba(49,189,248,0.82))]">
        <img
          src={recommendationImg}
          width={363}
          height={384}
          alt="Казахстан, Павлодар, Желтоксан 70"
          className="h-full w-full object-cover"
        />
      </div>
      <ArrowRightIcon className="z-10 h-auto w-[28px] -translate-x-4 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
      <div className="z-10 text-[14px] font-medium leading-[19px]">
        <h3 className="mb-[15px] flex flex-col gap-y-[3px]">
          проспект Ленина, 58
          <span className="text-[20px] font-semibold leading-[27px]">
            Россия, Екатеринбург
          </span>
        </h3>
        <p>
          <span className="mr-[11px] text-[20px] font-semibold leading-[27px]">
            12000 KZT
          </span>
          20 м2
        </p>
      </div>
    </Link>
  );
};
