import { MailIcon, PhoneIcon } from "@/assets/imgs/icons";
import { Container } from "../Container";

export const MailingForm = () => {
  return (
    <section className="relative mt-auto before:absolute before:inset-0 before:h-full before:w-full before:bg-[url('/src/assets/imgs/mailing.jpg')] before:bg-cover before:bg-center before:bg-no-repeat before:content-['']">
      <Container>
        <div className="relative z-10 pb-[158px] pt-[159px]">
          <div className="mb-[30px] text-center text-white">
            <h2 className="mb-[10px] font-cormorant-infant text-[64px] font-bold uppercase leading-[85px]">
              Подпишитесь на наши новости
            </h2>
            <p className="text-[20px] font-medium uppercase leading-[27px] text-white">
              Узнавайте первыми ежедневные обновления, акции, свободные места
            </p>
          </div>
          <form className="grid auto-rows-[74px] grid-cols-3 gap-x-[30px]">
            <div className="relative">
              <MailIcon className="absolute left-[30px] top-2/4 h-auto w-[20px] -translate-y-2/4 text-[#26333D]" />
              <input
                type="email"
                placeholder="Электронная почта"
                className="inline-block h-full w-full rounded-[25px] py-[27px] pl-[60px] pr-[30px] text-[16px] font-medium leading-[21px] text-[#26333D] shadow-[0px_8px_90px_rgba(0,0,0,0.3)] placeholder:text-[#26333D]"
              />
            </div>
            <div className="relative">
              <PhoneIcon className="absolute left-[30px] top-2/4 h-auto w-[20px] -translate-y-2/4 text-[#26333D]" />
              <input
                type="tel"
                placeholder="Номер телефона"
                className="inline-block h-full w-full rounded-[25px] py-[27px] pl-[60px] pr-[30px] text-[16px] font-medium leading-[21px] text-[#26333D] shadow-[0px_8px_90px_rgba(0,0,0,0.3)] placeholder:text-[#26333D]"
              />
            </div>
            <button
              type="submit"
              className="inline-block rounded-[25px] bg-[#31BDF8] px-[30px] py-[27px] text-[16px] font-medium leading-[21px] text-white shadow-[0px_8px_90px_rgba(0,0,0,0.3)]"
            >
              Подписаться
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
};
