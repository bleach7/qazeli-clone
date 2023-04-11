import hotelImg from "@/assets/imgs/hotel.jpg";
import { LocationIcon, StarIcon } from "@/assets/imgs/icons";
import { Link } from "react-router-dom";

export const HotelItemPreview = () => {
  return (
    <article className="grid grid-cols-[322px_1fr] overflow-hidden rounded-[25px] bg-white shadow-[0px_4px_90px_rgba(0,0,0,0.05)]">
      <div className="min-h-[322px] w-full">
        <img
          src={hotelImg}
          width={322}
          height={359}
          alt="SENATOR Hotel"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="px-[25px] pb-[40px] pt-[25px]">
        <div className="mb-[15px] flex items-center justify-between">
          <div className="flex flex-col gap-y-[7px]">
            <div className="flex items-center gap-x-[25px]">
              <h1 className="text-[20px] font-semibold leading-[27px]">
                SENATOR Hotel
              </h1>
              <ul className="flex items-center gap-x-[10px] text-[#F1E230]">
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
              <p className="text-[14px] leading-[19px] text-[#31BDF8]">
                Отзывов (0)
              </p>
            </div>
            <div className="flex items-center gap-x-[10px]">
              <LocationIcon className="h-auto w-[20px] text-[#31BDF8]" />
              <p>Казахстан, Караганда, проспект Нурсултана Назарбаева, 33/4</p>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-[14px] font-medium leading-[19px]">
              1 взр / 1 сутки
            </p>
            <p className="text-[32px] font-semibold leading-[43px] text-[#31BDF8]">
              26000 KZT
            </p>
          </div>
        </div>
        <ul className="mb-[18px] grid w-fit min-w-[363px] list-disc grid-cols-2 gap-[10px] pl-[20px] font-normal leading-[19px] text-[14p]">
          <li>Одноместный номер</li>
          <li>Двухспальная кровать</li>
          <li>Завтрак</li>
          <li>Бесплатный Wi-Fi</li>
          <li>Ресторан</li>
          <li>Семейные номера</li>
        </ul>
        <p className="mb-[10px] text-[14px] font-medium leading-[19px]">
          Уютный гостиничный комплекс «Ар Нуво» находится в самом центре города
          Караганды и всего в 40 минутах езды от аэропорта. У нас вы сможете
          остановиться в одном из 35
        </p>
        <Link
          to="/hotels/1"
          className="mb-[12px] inline-block border-b border-dashed border-[#31BDF8] font-medium text-[#31BDF8]"
        >
          Подробнее
        </Link>
        <div className="flex items-center gap-x-[30px]">
          <Link
            to="/hotels/1"
            className="rounded-[25px] bg-[#31BDF8] px-[20px] py-[20px] text-[16px] font-medium leading-[21px] text-white"
          >
            Выбрать номер
          </Link>
          <p className="flex flex-col text-[14px] font-medium leading-[19px]">
            Свободно <span className="text-[#58D072]">3 из 3</span>
          </p>
        </div>
      </div>
    </article>
  );
};
