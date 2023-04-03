import {
  AirplaneIcon,
  LocationIcon,
  LoginIcon,
  PhoneIcon,
  RailwayIcon,
  TaxiIcon,
} from "@/assets/imgs/icons";
import sponsorsImg from "@/assets/imgs/sponsors.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Container } from "../Container";
import { LangSwitcher } from "../LangSwitcher";
import { Logo } from "../Logo";

export const Header = () => {
  const location = useLocation();

  return (
    <header className="relative before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-[url('/src/assets/imgs/header-bg.jpg')] before:bg-cover before:bg-left-top before:bg-no-repeat before:content-['']">
      <Container>
        <div className="pb-[81px] pt-[50px]">
          <div className="relative flex items-center justify-between pb-[30px] before:absolute before:bottom-0 before:left-0 before:h-px before:w-full before:bg-white before:opacity-[0.14] before:content-['']">
            <div className="flex items-center">
              <Logo className="mr-[89px]" />
              <nav className="text-white">
                <ul className="flex items-center gap-x-[20px] lg:gap-x-[44px]">
                  <li>
                    <NavLink to="tours" className="flex w-fit flex-col">
                      <span className="text-[20px] font-medium leading-[27px]">
                        Поиск туров
                      </span>
                      <span className="hidden text-[14px] leading-[19px] lg:block">
                        Найди свое приключение
                      </span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="directions" className="flex w-fit flex-col">
                      <span className="text-[20px] font-medium leading-[27px]">
                        Направления
                      </span>
                      <span className="text-[14px] leading-[19px]">
                        Список популярных направлений
                      </span>
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex items-center gap-x-[30px] text-white">
              <LangSwitcher />
              <Link
                to="contacts"
                className="grid w-fit grid-cols-[24px_1fr] items-center gap-x-[10px]"
              >
                <PhoneIcon className="h-auto w-full" />
                <span className="text-[20px] font-medium leading-[27px]">
                  Контакты
                </span>
              </Link>
              <Link
                to="tel:+77758503123"
                className="relative flex min-h-[44px] items-center justify-center rounded-[25px] px-[10px] text-[20px] font-medium leading-[27px] before:absolute before:inset-0 before:h-full before:w-full before:rounded-[25px] before:bg-white before:opacity-10"
              >
                +7(775)-850-31-23
              </Link>
              <Link
                to="/login"
                className="relative grid min-h-[44px] w-fit grid-cols-[24px_1fr] items-center gap-x-[10px] rounded-[25px] px-[10px] before:absolute before:inset-0 before:h-full before:w-full before:rounded-[25px] before:border before:border-white before:opacity-10 before:content-['']"
              >
                <LoginIcon className="h-auto w-full" />
                <span>Войти</span>
              </Link>
            </div>
          </div>
          <div className="relative">
            <ul className="flex items-center gap-x-[30px] pt-[30px] text-[16px] font-medium leading-[21px] text-white">
              <li>
                <Link
                  to="excursions"
                  className="grid w-fit grid-cols-[20px_1fr] items-center gap-x-[10px]"
                >
                  <LocationIcon className="h-auto w-full" />
                  <span>Экскурсии</span>
                </Link>
              </li>
              <li>
                <Link
                  to="flights"
                  className="grid w-fit grid-cols-[20px_1fr] items-center gap-x-[10px]"
                >
                  <AirplaneIcon className="h-auto w-full" />
                  <span>Авиабилеты</span>
                </Link>
              </li>
              <li>
                <Link
                  to="railway-tickets"
                  className="grid w-fit grid-cols-[20px_1fr] items-center gap-x-[10px]"
                >
                  <RailwayIcon className="h-auto w-full" />
                  <span>ЖД билеты</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/taxi"
                  className="grid w-fit grid-cols-[20px_1fr] items-center gap-x-[10px]"
                >
                  <TaxiIcon className="h-auto w-full" />
                  <span>Такси</span>
                </Link>
              </li>
            </ul>
            {location.pathname === "/" && (
              <img
                src={sponsorsImg}
                width={252}
                height={50}
                alt="Sponsors"
                className="absolute right-0 top-[40px] h-[50px] w-[252px]"
              />
            )}
          </div>
        </div>
      </Container>
    </header>
  );
};
