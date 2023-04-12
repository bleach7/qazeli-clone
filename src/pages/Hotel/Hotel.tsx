import {
  FoodIcon,
  LocationIcon,
  PoolIcon,
  StarIcon,
  WifiIcon,
} from "@/assets/imgs/icons";
import { Container, MailingForm } from "@/components/ui";
import { Tab } from "@headlessui/react";
import classNames from "classnames";
import { Link } from "react-router-dom";

export const Hotel = () => {
  return (
    <>
      <section>
        <Container>
          <div className="pb-[50px] pt-[40px]">
            <ul className="flex items-center gap-x-[30px] text-[14px] font-medium leading-[19px]">
              <li>
                <Link to="/">Главная</Link>
              </li>
              <li>
                <Link to="/">Поиск отелей</Link>
              </li>
              <li className="text-[#31BDF8]">SENATOR Hotel</li>
            </ul>
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <div className="mb-[80px] grid grid-cols-[363px_1fr] gap-x-[30px]">
            <aside>Sidebar</aside>
            <article>
              <header className="border-b border-[#EDF2F5] pb-[20px]">
                <div className="mb-[20px] flex items-center justify-between">
                  <div className="flex flex-col gap-y-[5px]">
                    <div className="flex items-center gap-x-[20px]">
                      <h1 className="text-[36px] font-medium leading-[48px]">
                        SENATOR Hotel
                      </h1>
                      <ul className="flex items-center gap-x-[10px] text-[#F1E230]">
                        <li>
                          <button type="button">
                            <StarIcon className="h-full w-[20px]" />
                          </button>
                        </li>
                        <li>
                          <button type="button">
                            <StarIcon className="h-full w-[20px]" />
                          </button>
                        </li>
                        <li>
                          <button type="button">
                            <StarIcon className="h-full w-[20px]" />
                          </button>
                        </li>
                        <li>
                          <button type="button">
                            <StarIcon className="h-full w-[20px]" />
                          </button>
                        </li>
                        <li>
                          <button type="button">
                            <StarIcon className="h-full w-[20px]" />
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="flex items-center gap-x-[10px]">
                      <LocationIcon className="h-auto w-[20px] text-[#31BDF8]" />
                      <p className="text-[16px] font-medium leading-[21px]">
                        Казахстан, Караганда, проспект Нурсултана Назарбаева,
                        33/4
                      </p>
                    </div>
                  </div>
                  <p className="rounded-[25px] bg-[#58D072] p-[20px] text-center text-[20px] font-medium leading-[27px] text-white">
                    Рейтинг: 5.0
                  </p>
                </div>
                <div className="flex items-center gap-x-[20px]">
                  <p className="text-[14px] font-medium leading-[19px] text-[#31BDF8]">
                    Отзывов (0)
                  </p>
                  <ul className="flex items-center gap-x-[15px] text-[#F1E230]">
                    <li>
                      <WifiIcon className="h-auto w-[24px]" />
                    </li>
                    <li>
                      <FoodIcon className="h-auto w-[24px]" />
                    </li>
                    <li>
                      <PoolIcon className="h-auto w-[24px]" />
                    </li>
                  </ul>
                </div>
              </header>
              <Tab.Group as="div">
                <Tab.List
                  as="div"
                  className="flex items-center gap-x-[30px] border-b border-[#EDF2F5] py-[15px] text-[16px] font-medium leading-[21px]"
                >
                  <Tab as="button" type="button">
                    {({ selected }) => (
                      <span
                        className={classNames({
                          ["text-[#31BDF8] transition-colors duration-300 ease-in-out"]:
                            selected,
                        })}
                      >
                        Общая информация
                      </span>
                    )}
                  </Tab>
                  <Tab as="button" type="button">
                    {({ selected }) => (
                      <span
                        className={classNames({
                          ["text-[#31BDF8] transition-colors duration-300 ease-in-out"]:
                            selected,
                        })}
                      >
                        Номера
                      </span>
                    )}
                  </Tab>
                  <Tab as="button" type="button">
                    {({ selected }) => (
                      <span
                        className={classNames({
                          ["text-[#31BDF8] transition-colors duration-300 ease-in-out"]:
                            selected,
                        })}
                      >
                        Расположение
                      </span>
                    )}
                  </Tab>
                  <Tab as="button" type="button">
                    {({ selected }) => (
                      <span
                        className={classNames({
                          ["text-[#31BDF8] transition-colors duration-300 ease-in-out"]:
                            selected,
                        })}
                      >
                        Отзывы
                      </span>
                    )}
                  </Tab>
                </Tab.List>
                <Tab.Panels as="main">
                  <Tab.Panel as="section">Content 1</Tab.Panel>
                  <Tab.Panel as="section">Content 2</Tab.Panel>
                  <Tab.Panel as="section">Content 3</Tab.Panel>
                  <Tab.Panel as="section">Content 4</Tab.Panel>
                </Tab.Panels>
              </Tab.Group>
            </article>
          </div>
        </Container>
      </section>
      <MailingForm />
    </>
  );
};
