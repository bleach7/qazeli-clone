import { ArrowDownIcon } from "@/assets/imgs/icons";
import { Listbox, Transition } from "@headlessui/react";
import classNames from "classnames";
import { Fragment, useState } from "react";
import { ILangSwitcher } from "./LangSwitcher.interface";

const LANGS = ["RU", "KZ"];

export const LangSwitcher = ({ className }: ILangSwitcher) => {
  const [selectedLang, setSelectedLang] = useState(LANGS[0]);

  return (
    <Listbox
      value={selectedLang}
      onChange={setSelectedLang}
      as="div"
      className={classNames(
        "relative text-[20px] font-medium leading-[27px] text-white",
        className
      )}
    >
      {({ open }) => (
        <>
          <Listbox.Button
            as="button"
            type="button"
            className="relative grid min-h-[44px] w-[90px] grid-cols-[1fr_24px] items-center gap-x-[10px] rounded-[25px] px-[11px] before:absolute before:inset-0 before:rounded-[25px] before:border before:border-white before:opacity-10 before:content-['']"
          >
            <span>{selectedLang}</span>
            <ArrowDownIcon
              className={classNames(
                "h-auto w-full transition-transform duration-300 ease-in-out",
                {
                  ["rotate-180"]: open,
                }
              )}
            />
          </Listbox.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Listbox.Options
              as="ul"
              className="absolute z-10 w-full translate-y-[10px]"
            >
              {LANGS.map((lang) => (
                <Listbox.Option
                  key={lang}
                  value={lang}
                  as="li"
                  className="group"
                >
                  {({ active, selected }) => (
                    <button
                      type="button"
                      className={classNames(
                        "inline-block w-full bg-white px-[13px] py-[10px] text-start text-[#26333D] transition-colors duration-300 ease-in-out group-first:rounded-[25px_25px_0_0] group-last:rounded-[0_0_25px_25px]",
                        {
                          ["text-[#F1E230]"]: active,
                          ["text-[#31BDF8]"]: selected,
                        }
                      )}
                    >
                      {lang}
                    </button>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </>
      )}
    </Listbox>
  );
};
