import { FormEvent } from "react";
import { IInputProps, Input } from "../input/input";
import { BiSearch } from "react-icons/bi";

interface ISearchInputProps extends IInputProps {
  onSearch?: (e: FormEvent<HTMLFormElement>) => void;
}
export const SearchInput = ({ onSearch, ...props }: ISearchInputProps) => {
  return (
    <form onSubmit={onSearch}>
      <Input
        leftIcon={<BiSearch size={24} color="#575050" />}
        type="text"
        placeholder="Search"
        {...props}
      />
    </form>
  );
};
