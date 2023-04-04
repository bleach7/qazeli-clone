import { PhoneIcon, WhatsAppIcon } from "@/assets/imgs/icons";
import { Link } from "react-router-dom";

export const FixedContacts = () => {
  return (
    <ul className="fixed bottom-[30px] right-[30px] z-20 flex flex-col gap-y-[31px]">
      <li>
        <Link
          to="tel:+77758503123"
          className="flex items-center justify-center rounded-full bg-[#31BDF8] p-[21px] text-white shadow-[0px_4px_40px_rgba(49,189,248,0.62)]"
        >
          <PhoneIcon className="h-auto w-[32px]" />
        </Link>
      </li>
      <li>
        <Link
          to="#whatsapp"
          className="flex items-center justify-center rounded-full bg-[#58D072] p-[21px] text-white shadow-[0px_4px_40px_#4ADB69]"
        >
          <WhatsAppIcon className="h-auto w-[32px]" />
        </Link>
      </li>
    </ul>
  );
};
