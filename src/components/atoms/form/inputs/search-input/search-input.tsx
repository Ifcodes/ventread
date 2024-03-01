import { FormEvent, useState } from "react";
import { IInputProps, Input } from "../input/input";
import { BiSearch } from "react-icons/bi";

interface ISearchInputProps extends IInputProps {
  onSearch?: (e: FormEvent<HTMLFormElement>) => void;
}
export const SearchInput = ({ onSearch, ...props }: ISearchInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleToggleFocus = (type: string) => {
    if (type === "focus") {
      setIsFocused(true);
    } else {
      setIsFocused(false);
    }
  };

  return (
    <form onSubmit={onSearch}>
      <Input
        leftIcon={
          <BiSearch size={24} color="#575050" opacity={isFocused ? 1 : 0.5} />
        }
        type="text"
        placeholder="Search"
        onFocus={() => handleToggleFocus("focus")}
        onBlur={() => handleToggleFocus("blur")}
        {...props}
      />
    </form>
  );
};
