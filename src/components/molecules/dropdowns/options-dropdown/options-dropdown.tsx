import { ReactNode, useRef } from "react";

import { useClickAway } from "react-use";

import "./options-dropdown-styles.scss";

export const OptionsDropdown = ({
  children,
  icon,
  showDropdown,
  setShowDropdown,
}: {
  children: ReactNode;
  icon?: ReactNode;
  showDropdown: boolean;
  setShowDropdown: (val: boolean) => void;
}) => {
  const clickRef = useRef(null);

  useClickAway(clickRef, () => setShowDropdown(false));

  return (
    <div ref={clickRef} className={"dropdownWrapper"}>
      {icon && (
        <div className={"icon"} onClick={() => setShowDropdown(!showDropdown)}>
          {icon}
        </div>
      )}
      <div className={`${"dropdownContent"} ${showDropdown && "showDropDown"}`}>
        {children}
      </div>
    </div>
  );
};
