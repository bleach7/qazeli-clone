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
        <div className="flex items-start justify-between pb-[44px] pt-[90px]">
          <div className="max-w-[624px] text-[12px] leading-[16px] text-[#68879E]">
            <div className="mb-[30px] flex items-end">
              <Logo className="mr-[47px]" />
              <ul className="flex items-center gap-x-[20px] text-[#EDF2F5]">
                <li>
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
          <ul className="flex max-w-[524px] flex-wrap items-center gap-x-[20px] gap-y-[23px] text-[14px] font-medium leading-[19px] text-[#EDF2F5]">
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
