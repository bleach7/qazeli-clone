import {
  AgentUserIcon,
  CheckIcon,
  HotelIcon,
  KeyIcon,
  MailIcon,
  UserIcon,
} from "@/assets/imgs/icons";
import { Button, Container, Input, Link, MailingForm } from "@/components/ui";
import { RadioGroup } from "@headlessui/react";
import classNames from "classnames";
import { useState } from "react";

export const Login = () => {
  const [isRememberDevice, setIsRememberDevice] = useState(false);
  const [plan, setPlan] = useState("startup");

  const toggleRememberDevice = () => {
    setIsRememberDevice(!isRememberDevice);
  };

  return (
    <>
      <section>
        <Container>
          <div className="flex flex-col items-center pb-[289px] pt-[90px]">
            <h1 className="mb-[30px] text-[36px] font-medium leading-[48px]">
              Вход
            </h1>
            <form className="w-[755px] rounded-[25px] bg-[#EDF2F5] px-[55px] py-[40px]">
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
              <fieldset className="mb-[20px] flex flex-col gap-y-[10px]">
                <Input type="email" icon={MailIcon} placeholder="Email" />
                <Input hidePassword icon={KeyIcon} placeholder="Пароль" />
              </fieldset>
              <button
                type="button"
                aria-checked={isRememberDevice ? "true" : "false"}
                onClick={toggleRememberDevice}
                className="mb-[30px] grid w-fit grid-cols-[20px_1fr] items-center gap-x-[16px]"
              >
                <span
                  className={classNames(
                    "flex h-[20px] w-[20px] items-center justify-center rounded-[2px] border border-[#26333D] bg-white transition-colors duration-300 ease-in-out",
                    {
                      ["border-[#31BDF8]"]: isRememberDevice,
                    }
                  )}
                >
                  <CheckIcon
                    className={classNames(
                      "h-auto w-[16px] text-[#31BDF8] transition-all duration-300 ease-in-out",
                      {
                        ["opacity-0"]: !isRememberDevice,
                      }
                    )}
                  />
                </span>
                <span className="text-[14px] font-medium leading-[19px]">
                  Запомнить меня на этом устройстве
                </span>
              </button>
              <div className="flex items-center gap-x-[25px]">
                <Button type="submit">Войти</Button>
                <Link to="/sign-up" appearance="form-underline">
                  Зарегистрироваться
                </Link>
                <Link to="/forgot-password" appearance="form-underline">
                  Забыли пароль
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
