import underDevelopment from "@/assets/imgs/under-development.jpg";
import { Container, Link } from "@/components/ui";

export const UnderDevelopment = () => {
  return (
    <section>
      <Container>
        <div className="flex flex-col items-center pb-[291px] pt-[193px] text-[#26333D]">
          <img
            src={underDevelopment}
            width={185}
            height={174}
            alt="Раздел в разработке"
            className="mb-[26px] h-[174px] w-[185px]"
          />
          <h1 className="mb-[12px] text-[36px] font-medium leading-[48px]">
            Раздел в разработке
          </h1>
          <p className="mb-[30px] text-[16px] leading-[21px]">
            Данный раздел находится в разработке и будет скоро доступен
          </p>
          <Link to="/" appearance="button">
            Вернуться на главную
          </Link>
        </div>
      </Container>
    </section>
  );
};
