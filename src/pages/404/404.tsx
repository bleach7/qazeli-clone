import notFoundImg from "@/assets/imgs/404.jpg";
import { Container, Link } from "@/components/ui";

export const NotFound = () => {
  return (
    <section>
      <Container>
        <div className="flex flex-col items-center pb-[323px] pt-[151px]">
          <img
            src={notFoundImg}
            width={217}
            height={211}
            alt="Раздел не найден"
            className="mb-[31px] h-[211px] w-[217px]"
          />
          <h1 className="mb-[30px] text-[36px] font-medium leading-[48px]">
            Раздел не найден
          </h1>
          <Link to="/" appearance="button">
            Вернуться на главную
          </Link>
        </div>
      </Container>
    </section>
  );
};
