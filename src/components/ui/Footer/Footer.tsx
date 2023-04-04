import { InstagramIcon } from "@/assets/imgs/icons";
import { FOOTER_NAV_LINKS } from "@/constants";
import { Link } from "react-router-dom";
import { Container } from "../Container";
import { Logo } from "../Logo";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#26333D]">
      <Container>
        <div className="flex flex-col items-start pb-[54px] pt-[40px] md:pb-[44px] md:pt-[90px] lg:flex-row lg:justify-between">
          <div className="mb-[30px] max-w-[624px] text-[12px] leading-[16px] text-[#68879E] lg:mb-0">
            <div className="mb-[30px] flex items-end">
              <Logo className="mr-[47px] h-[29px] w-[107px]" />
              <ul className="flex items-center gap-x-[20px] text-[#EDF2F5] md:pb-[5px]">
                <li className="flex">
                  <Link
                    to="#instagram"
                    aria-label="Instagram"
                    className="inline-block h-[24px] w-[24px] transition-colors duration-300 ease-in-out hover:text-[#31BDF8]"
                  >
                    <InstagramIcon className="h-full w-full" />
                  </Link>
                </li>
              </ul>
            </div>
            <p className="mb-[20px]">
              Единый туристический модуль по Казахстану, позволяющий управлять
              всеми существующими туристическими услугами в режиме реального
              времени.
            </p>
            <p className="mb-[33px]">
              Настоящий прорыв, революционный тренд в туристической сфере «QAZ
              ELI»
            </p>
            <p>Copyright &copy;&nbsp;{year} Qaz Eli</p>
          </div>
          <ul className="flex max-w-[400px] flex-col gap-x-[20px] gap-y-[23px] text-[14px] font-medium leading-[19px] text-[#EDF2F5] sm:flex-row sm:flex-wrap sm:items-center 2xl:max-w-[524px]">
            {FOOTER_NAV_LINKS.map((link, i) => (
              <li key={i}>
                <Link
                  to={link.pathname}
                  className="inline-block transition-colors duration-300 ease-in-out hover:text-[#31BDF8]"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
};
