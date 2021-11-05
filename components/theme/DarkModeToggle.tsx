import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon, MoonIcon } from "@heroicons/react/solid";
import { useTheme } from "next-themes";

interface DarkModeOption {
  name: string;
  value: string;
}

const options = [
  { name: "Dark", value: "dark" },
  { name: "Light", value: "light" },
];

const DarkModeToggle = () => {
  const [selected, setSelected] = useState(options[0]);
  const { theme, setTheme } = useTheme();
  const setDarkMode = (option: DarkModeOption) => {
    setSelected(option);
    setTheme(option.value);
  };
  return (
    <div className="w-36">
      <Listbox value={selected} onChange={setDarkMode}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full py-2 pl-10 pr-10 text-left text-white bg-gray-900 rounded-lg shadow-md cursor-default dark:bg-white dark:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
              <MoonIcon className="w-5 h-5" aria-hidden="true" />
            </span>
            <span className="block truncate">{selected.name}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <SelectorIcon
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg bottom-10 max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {options.map((option, key) => (
                <Listbox.Option
                  key={key}
                  className={() =>
                    `${
                      option.value === theme
                        ? "text-yellow-900 bg-yellow-100"
                        : "text-gray-900"
                    }
                          cursor-default select-none relative py-2 pl-10 pr-4`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`${
                          selected ? "font-medium" : "font-normal"
                        } block truncate`}
                      >
                        {option.name}
                      </span>
                      {selected ? (
                        <span
                          className={`${
                            option.value === theme
                              ? "text-yellow-600"
                              : "text-yellow-600"
                          }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                        >
                          <CheckIcon className="w-5 h-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default DarkModeToggle;
