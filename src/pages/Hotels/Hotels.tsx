import { Container, HotelItemPreview, MailingForm } from "@/components/ui";
import { Link } from "react-router-dom";

export const Hotels = () => {
  return (
    <>
      <section>
        <Container>
          <div className="pb-[50px] pt-[40px]">
            <ul className="flex items-center gap-x-[30px] text-[14px] font-medium leading-[19px]">
              <li>
                <Link to="/">Главная</Link>
              </li>
              <li className="text-[#31BDF8]">Поиск отелей</li>
            </ul>
          </div>
        </Container>
      </section>
      <section className="mb-[204px]">
        <Container>
          <div className="grid grid-cols-[363px_1fr] gap-x-[30px]">
            <aside>
              <form className="mb-[20px] rounded-[25px] bg-[#31BDF8] px-[25px] pb-[32px] pt-[25px]">
                <legend className="text-[20px] font-medium leading-[27px] text-white">
                  Детали поиска
                </legend>
              </form>
              <ul className="mb-[20px] flex items-center gap-x-[24px] rounded-[25px] bg-white px-[25px] py-[22px] shadow-[0px_4px_90px_rgba(0,0,0,0.05)]">
                <li>
                  <button
                    type="button"
                    className="grid w-fit grid-cols-[20px_1fr] gap-x-[10px] rounded-[25px] bg-[#31BDF8] px-[25px] py-[20px] font-medium text-white"
                  >
                    <span></span>
                    <span>Список</span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="grid w-fit grid-cols-[20px_1fr] gap-x-[10px] rounded-[25px] bg-[#EDF2F5] px-[25px] py-[20px] font-medium text-[#26333D]"
                  >
                    <span></span>
                    <span>Карта</span>
                  </button>
                </li>
              </ul>
            </aside>
            <section>
              <button
                type="button"
                className="mb-[30px] inline-block rounded-[25px] bg-[#58D072] px-[20px] py-[10px] text-[20px] font-medium leading-[27px] text-white"
              >
                8 доступно на выбранные даты
              </button>
              <ul className="mb-[30px] flex items-center gap-x-[30px] text-[14px] font-medium leading-[19px] text-[#26333D]">
                <li>
                  <button
                    type="button"
                    className="inline-block border-b border-dashed border-[#31BDF8] pb-[7px] text-[#31BDF8]"
                  >
                    Популярные
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="inline-block border-b border-dashed border-b-[#26333D] pb-[7px]"
                  >
                    Новинки
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="inline-block border-b border-dashed border-b-[#26333D] pb-[7px]"
                  >
                    Сначала дешевые
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="inline-block border-b border-dashed border-b-[#26333D] pb-[7px]"
                  >
                    Сначала дорогие
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="inline-block border-b border-dashed border-b-[#26333D] pb-[7px]"
                  >
                    Высокий рейтинг
                  </button>
                </li>
              </ul>
              <div className="mb-[20px] flex flex-col gap-y-[20px]">
                <HotelItemPreview />
              </div>
              <ul className="flex items-center gap-x-[5px] text-[14px] font-medium leading-none text-[#26333D]">
                <li>
                  <button
                    type="button"
                    className="flex h-[36px] w-[36px] items-center justify-center rounded-full border border-[#31BDF8] text-[#31BDF8] transition-colors duration-300 ease-in-out hover:bg-[#31BDF8] hover:text-white"
                  >
                    <span>1</span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="flex h-[36px] w-[36px] items-center justify-center rounded-full border border-[#26333D] transition-colors duration-300 ease-in-out hover:bg-slate-200"
                  >
                    <span>2</span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="flex h-[36px] w-[36px] items-center justify-center rounded-full border border-[#26333D] transition-colors duration-300 ease-in-out hover:bg-slate-200"
                  >
                    <span>3</span>
                  </button>
                </li>
              </ul>
            </section>
          </div>
        </Container>
      </section>
      <MailingForm />
    </>
  );
};
