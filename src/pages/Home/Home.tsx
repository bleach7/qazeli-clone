import { RecommendationSlider } from "@/components/pages";
import { Container, MailingForm } from "@/components/ui";
import { useLayoutEffect } from "react";

export const Home = () => {
  useLayoutEffect(() => {
    const homeHero = document.getElementById("home-hero");
    const root = document.documentElement;

    if (homeHero && root) {
      const homeHeroHeight = homeHero.offsetHeight;

      if (homeHeroHeight) {
        root.style.setProperty("--home-hero-height", `${homeHeroHeight}px`);
      }
    }

    return () => {
      const root = document.documentElement;

      root.style.removeProperty("--home-hero-height");
    };
  }, []);

  return (
    <>
      <section id="home-hero" className="mb-[80px]">
        <div className="relative">
          <div className="pb-[351px] pt-[171px]">
            <div className="flex flex-col items-center text-white">
              <h1 className="mb-[20px] font-cormorant-infant text-[96px] font-bold uppercase leading-[128px]">
                Туризм в один клик
              </h1>
              <p className="max-w-[807px] text-center text-[20px] uppercase leading-[27px]">
                Бронирование отелей, загородных баз отдыха и апартаментов по
                всему Казахстану
              </p>
            </div>
          </div>
          <div className="absolute bottom-[120px] left-0 z-10 w-full">
            <Container>
              <form className="flex items-center drop-shadow-[0px_8px_90px_rgba(0,0,0,0.3)]">
                <fieldset className="flex-auto rounded-[25px_0_0_25px] bg-white py-[47px] pl-[30px] pr-[84px]"></fieldset>
                <button
                  type="submit"
                  className="inline-block self-stretch rounded-[0_25px_25px_0] bg-[#31BDF8] px-[116px] text-[16px] font-medium leading-[21px] text-white"
                >
                  Поиск
                </button>
              </form>
            </Container>
          </div>
        </div>
      </section>
      <section className="mb-[117px]">
        <Container>
          <div>
            <h2 className="mb-[50px] text-center text-[48px] font-semibold leading-[64px]">
              Рекомендации
            </h2>
            <RecommendationSlider />
          </div>
        </Container>
      </section>
      <MailingForm />
    </>
  );
};
