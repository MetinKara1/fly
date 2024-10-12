import React, { ReactElement, useMemo, useState, useEffect } from "react";
import { useController } from "react-hook-form";
import { cn } from "@/utils/tailwind-merge";
import { Popper } from "./Popper";

export interface SelectProps extends React.HTMLAttributes<HTMLElement> {
  control: any;
  name: string;
  options?: { value: string; label: string }[];
  className?: string;
  placeholder: string;
  icon?: ReactElement<any, any>;
  optionIcon?: ReactElement<any, any>;
  id?: string;
}

const Select = React.forwardRef<HTMLElement, SelectProps>(
  (
    {
      options = [],
      className,
      placeholder,
      icon,
      optionIcon,
      control,
      name,
      id,
    },
    ref
  ) => {
    const { field } = useController({ control, name });
    const [visible, setVisible] = useState<boolean>(false);
    const [selectOption, setSelectOption] = useState<string>("");
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [filteredOptions, setFilteredOptions] = useState(options);

    useEffect(() => {
      setFilteredOptions(
        options.filter((option) =>
          option.label.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }, [searchTerm, options]);

    const onSelectOption = (option: { value: string; label: string }) => {
      setSelectOption(option.label);
      field.onChange(option.value);
      setVisible(false);
    };

    const referenceElement = useMemo(
      () => (
        <div
          className={cn(
            "relative flex bg-white justify-center items-center h-full",
            className
          )}
        >
          {icon && <div className="mx-2">{icon}</div>}

          <input
            id={id}
            name={name}
            type="text"
            className="focus:outline-none"
            placeholder={placeholder}
            onClick={() => setVisible(true)}
            value={selectOption}
          />
        </div>
      ),
      [placeholder, field, name, className, icon, selectOption]
    );

    const popperElement = useMemo(
      () => (
        <div className="bg-white border-t w-[250px] h-full mt-2 border-0 rounded-md p-2">
          <input
            type="text"
            className="w-full p-2 mb-2 border border-gray-300 rounded-md focus:outline-none"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {filteredOptions.length > 0 ? (
            filteredOptions.map((item: { value: string; label: string }) => (
              <div
                key={item.value}
                className="select-option flex hover:bg-main-blue-background hover:cursor-pointer py-1 px-1 hover:rounded-md"
                onClick={() => onSelectOption(item)}
              >
                {optionIcon && <div className="mx-2">{optionIcon}</div>}
                <span className="pl-1">{item.label}</span>
              </div>
            ))
          ) : (
            <div className="p-2 text-gray-500">No options found</div>
          )}
        </div>
      ),
      [filteredOptions, searchTerm, optionIcon]
    );

    return (
      <div className="relative">
        <Popper
          visible={visible}
          setVisible={setVisible}
          referenceElement={referenceElement}
          popperElement={popperElement}
        />
      </div>
    );
  }
);
Select.displayName = "Select";

export default Select;
