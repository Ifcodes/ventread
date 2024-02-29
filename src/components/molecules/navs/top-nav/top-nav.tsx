import { Avatar } from "@mui/material";
import SearchInput from "../../../atoms/form/inputs/search-input";
import "./top-nav-styles.scss";
import LogoImage from "../../../../../public/logo.svg";

export const TopNav = () => {
  return (
    <nav>
      <img src={LogoImage} className="h-[4em] w-[8em]" />
      <div className="search-avatar-container">
        <SearchInput />
        <Avatar />
      </div>
    </nav>
  );
};
