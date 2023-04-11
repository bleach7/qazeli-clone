import hotelImg from "@/assets/imgs/hotel.jpg";
import { StarIcon } from "@/assets/imgs/icons";
import { Link } from "react-router-dom";

export const HotelSlide = () => {
  return (
    <div className="pb-[91px]">
      <article className="overflow-hidden rounded-[25px] shadow-[0px_4px_90px_rgba(0,0,0,0.05)]">
        <div className="h-[366px] w-full">
          <img
            src={hotelImg}
            width={363}
            height={366}
            alt="Hotel Duman"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="bg-white px-[28px] pb-[41px] pt-[35px]">
          <ul className="mb-[15px] flex items-center gap-x-[10px] text-[#F1E230]">
            <li>
              <button type="button" disabled>
                <StarIcon className="h-full w-[20px]" />
              </button>
            </li>
            <li>
              <button type="button" disabled>
                <StarIcon className="h-full w-[20px]" />
              </button>
            </li>
            <li>
              <button type="button" disabled>
                <StarIcon className="h-full w-[20px]" />
              </button>
            </li>
            <li>
              <button type="button" disabled>
                <StarIcon className="h-full w-[20px]" />
              </button>
            </li>
            <li>
              <button type="button" disabled>
                <StarIcon className="h-full w-[20px]" />
              </button>
            </li>
          </ul>
          <p className="text-[14px] font-medium leading-[19px]">
            ул. Хусейн бен Талал, 25
          </p>
          <h3 className="mb-[15px] text-[20px] font-semibold leading-[27px]">
            Wyndham Garden Astana
          </h3>
          <Link
            to="#"
            className="inline-block w-fit rounded-[25px] border border-[#31BDF8] bg-white px-[11px] pb-[9px] pt-[10px] text-[14px] leading-[19px] text-[#31BDF8]"
          >
            Узнать больше
          </Link>
        </div>
      </article>
    </div>
  );
};
