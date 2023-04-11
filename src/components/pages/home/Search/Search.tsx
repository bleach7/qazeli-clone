import {
  ArrowDownIcon,
  CalendarIcon,
  LocationIcon,
  UsersIcon,
} from "@/assets/imgs/icons";

export const Search = () => {
  return (
    <form className="flex items-center drop-shadow-[0px_8px_90px_rgba(0,0,0,0.3)]">
      <fieldset className="flex flex-auto items-center text-[16px] font-medium leading-[21px] text-[#26333D]">
        <button
          type="button"
          className="grid min-h-[114px] grid-cols-[20px_1fr] items-center gap-x-[10px] rounded-[25px_0_0_25px] border-r border-[#EDF2F5] bg-white pl-[30px] pr-[192px]"
        >
          <LocationIcon />
          <span>Направления</span>
        </button>
        <button
          type="button"
          className="grid min-h-[114px] grid-cols-[20px_1fr_20px] items-center gap-x-[10px] border-r border-[#EDF2F5] bg-white pl-[34px] pr-[168px]"
        >
          <CalendarIcon />
          <span>28 марта - Дата тура</span>
          <ArrowDownIcon />
        </button>
        <button
          type="button"
          className="grid min-h-[114px] grid-cols-[20px_1fr_20px] items-center gap-x-[10px] border-r border-[#EDF2F5] bg-white pl-[30px] pr-[52px]"
        >
          <UsersIcon />
          <span>Взрослых</span>
          <ArrowDownIcon />
        </button>
        <button
          type="button"
          className="grid min-h-[114px] grid-cols-[20px_1fr_20px] items-center gap-x-[10px] border-r border-[#EDF2F5] bg-white pl-[30px] pr-[84px]"
        >
          <UsersIcon />
          <span>Детей</span>
          <ArrowDownIcon />
        </button>
      </fieldset>
      <button
        type="submit"
        className="inline-block self-stretch rounded-[0_25px_25px_0] bg-[#31BDF8] px-[116px] text-[16px] font-medium leading-[21px] text-white"
      >
        Поиск
      </button>
    </form>
  );
};
