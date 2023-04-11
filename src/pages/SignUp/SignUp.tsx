import {
  AgentUserIcon,
  HotelIcon,
  KeyIcon,
  MailIcon,
  PhoneIcon,
  UserIcon,
} from "@/assets/imgs/icons";
import { Button, Container, Link, MailingForm } from "@/components/ui";
import { RadioGroup } from "@headlessui/react";
import classNames from "classnames";
import { useState } from "react";

export const SignUp = () => {
  const [plan, setPlan] = useState("startup");

  return (
    <>
      <section>
        <Container>
          <div className="flex flex-col items-center gap-y-[30px] pb-[120px] pt-[90px]">
            <h1 className="text-[36px] font-medium leading-[48px]">
              Регистрация
            </h1>
            <form className="w-[755px] rounded-[25px] bg-[#EDF2F5] px-[55px] pb-[36px] pt-[40px]">
              <RadioGroup
                value={plan}
                onChange={setPlan}
                as="div"
                className="mb-[20px] flex items-center justify-between"
              >
                <RadioGroup.Option value="startup">
                  {({ checked }) => (
                    <button
                      type="button"
                      className={classNames(
                        "grid grid-cols-[20px_1fr] items-center gap-x-[10px] rounded-[25px] p-[20px] text-[16px] font-medium leading-[21px] transition-colors duration-300 ease-in-out",
                        {
                          ["bg-[#31BDF8] text-white"]: checked,
                          ["bg-white text-[#26333D]"]: !checked,
                        }
                      )}
                    >
                      <UserIcon className="h-auto w-full" />
                      <span>Для клиентов</span>
                    </button>
                  )}
                </RadioGroup.Option>
                <RadioGroup.Option value="business">
                  {({ checked }) => (
                    <button
                      type="button"
                      className={classNames(
                        "grid grid-cols-[20px_1fr] items-center gap-x-[10px] rounded-[25px] p-[20px] text-[16px] font-medium leading-[21px] transition-colors duration-300 ease-in-out",
                        {
                          ["bg-[#31BDF8] text-white"]: checked,
                          ["bg-white text-[#26333D]"]: !checked,
                        }
                      )}
                    >
                      <HotelIcon className="h-auto w-full" />
                      <span>Для владельца отеля</span>
                    </button>
                  )}
                </RadioGroup.Option>
                <RadioGroup.Option value="enterprise">
                  {({ checked }) => (
                    <button
                      type="button"
                      className={classNames(
                        "grid grid-cols-[20px_1fr] items-center gap-x-[10px] rounded-[25px] p-[20px] text-[16px] font-medium leading-[21px] transition-colors duration-300 ease-in-out",
                        {
                          ["bg-[#31BDF8] text-white"]: checked,
                          ["bg-white text-[#26333D]"]: !checked,
                        }
                      )}
                    >
                      <AgentUserIcon className="h-auto w-full" />
                      <span>Для агентств</span>
                    </button>
                  )}
                </RadioGroup.Option>
              </RadioGroup>
              <fieldset className="mb-[30px] flex flex-col gap-y-[10px]">
                <div>
                  <div className="relative text-[#26333D]">
                    <UserIcon className="absolute left-[15px] top-2/4 h-auto w-[17px] -translate-y-2/4" />
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      className="inline-block w-full rounded-[25px] bg-white py-[18px] pl-[43px] pr-[15px] text-[14px] font-medium leading-[19px] placeholder:text-[#26333D]"
                    />
                  </div>
                </div>
                <div>
                  <div className="relative text-[#26333D]">
                    <UserIcon className="absolute left-[15px] top-2/4 h-auto w-[17px] -translate-y-2/4" />
                    <input
                      type="text"
                      placeholder="Ваше фамилия"
                      className="inline-block w-full rounded-[25px] bg-white py-[18px] pl-[43px] pr-[15px] text-[14px] font-medium leading-[19px] placeholder:text-[#26333D]"
                    />
                  </div>
                </div>
                <div>
                  <div className="relative text-[#26333D]">
                    <MailIcon className="absolute left-[15px] top-2/4 h-auto w-[17px] -translate-y-2/4" />
                    <input
                      type="email"
                      placeholder="Email"
                      className="inline-block w-full rounded-[25px] bg-white py-[18px] pl-[43px] pr-[15px] text-[14px] font-medium leading-[19px] placeholder:text-[#26333D]"
                    />
                  </div>
                </div>
                <div>
                  <div className="relative text-[#26333D]">
                    <PhoneIcon className="absolute left-[15px] top-2/4 h-auto w-[17px] -translate-y-2/4" />
                    <input
                      type="text"
                      value="+7 (___) ___ __ __"
                      className="inline-block w-full rounded-[25px] bg-white py-[18px] pl-[43px] pr-[15px] text-[14px] font-medium leading-[19px] placeholder:text-[#26333D]"
                    />
                  </div>
                </div>
                <div>
                  <div className="relative text-[#26333D]">
                    <KeyIcon className="absolute left-[15px] top-2/4 h-auto w-[17px] -translate-y-2/4" />
                    <input
                      type="text"
                      placeholder="Пароль"
                      className="inline-block w-full rounded-[25px] bg-white py-[18px] pl-[43px] pr-[15px] text-[14px] font-medium leading-[19px] placeholder:text-[#26333D]"
                    />
                  </div>
                </div>
                <div>
                  <div className="relative text-[#26333D]">
                    <KeyIcon className="absolute left-[15px] top-2/4 h-auto w-[17px] -translate-y-2/4" />
                    <input
                      type="text"
                      placeholder="Повторите пароль"
                      className="inline-block w-full rounded-[25px] bg-white py-[18px] pl-[43px] pr-[15px] text-[14px] font-medium leading-[19px] placeholder:text-[#26333D]"
                    />
                  </div>
                </div>
              </fieldset>
              <div className="flex items-center gap-x-[25px]">
                <Button type="submit">Зарегистрироваться</Button>
                <Link to="/login" appearance="form-underline">
                  Войти
                </Link>
              </div>
            </form>
          </div>
        </Container>
      </section>
      <MailingForm />
    </>
  );
};
