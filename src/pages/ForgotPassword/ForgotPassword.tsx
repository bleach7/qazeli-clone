import { MailIcon } from "@/assets/imgs/icons";
import { Button, Container, Input, Link, MailingForm } from "@/components/ui";

export const ForgotPassword = () => {
  return (
    <>
      <section>
        <Container>
          <div className="flex flex-col items-center pb-[453px] pt-[90px]">
            <h1 className="mb-[30px] text-[36px] font-medium leading-[48px]">
              Восстановление пароля
            </h1>
            <form className="w-[755px] rounded-[25px] bg-[#EDF2F5] px-[55px] py-[40px]">
              <Input
                icon={MailIcon}
                type="email"
                placeholder="Email"
                className="mb-[20px]"
              />
              <div className="mb-[30px] flex flex-col gap-y-[20px] text-[14px] font-medium leading-[19px]">
                <p>
                  На вашу почту будет отправлено письмо для восстановления
                  пароля.
                </p>
                <p>
                  Если у вас возникли вопросы, вы можете написать нам на почту{" "}
                  <Link to="mailto:qazeli@info.kz" className="text-[#31BDF8]">
                    qazeli@info.kz
                  </Link>{" "}
                  или связаться с нами в разделе{" "}
                  <Link to="/contacts" className="text-[#31BDF8]">
                    контакты
                  </Link>
                  .
                </p>
              </div>
              <div className="flex items-center gap-x-[25px]">
                <Button type="submit">Отправить</Button>
                <Link to="/" appearance="form-underline">
                  На главную
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
