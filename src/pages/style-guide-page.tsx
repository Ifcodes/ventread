/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from "react";
import viteLogo from "/logo.svg";
import Button from "../components/atoms/buttons";
import LogoIcon from "../components/atoms/vectors/logo-icon";
import LogoIconWhite from "../components/atoms/vectors/logo-icon-white";
import { useTheme } from "../hooks/useTheme";
import SearchInput from "../components/atoms/form/inputs/search-input";
import { Avatar } from "@mui/material";

function StyleGuide() {
  const [count, setCount] = useState(0);
  const nextRef = useRef<any>();
  const prevRef = useRef<any>();
  const { setTheme } = useTheme();

  const goToNext = () => {
    if (nextRef) {
      return nextRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const goToPrev = () => {
    if (nextRef) {
      return prevRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const handleSystemTheme = () => {
    localStorage.removeItem("theme");
    setTheme(null);
  };

  return (
    <>
      <section ref={prevRef} id="hero" className="h-screen w-full">
        <div className="my-4">
          <h1>Buttons</h1>
          <Button
            buttonType="secondary"
            otherClasses="my-4"
            iconBefore={<LogoIcon />}
            onClick={() => setTheme("dark")}
          >
            Dark
          </Button>
          <Button
            buttonType="secondary"
            iconBefore={<LogoIcon />}
            onClick={() => handleSystemTheme()}
          >
            System Theme
          </Button>
          <Button
            otherClasses="mt-4"
            iconBefore={<LogoIconWhite />}
            onClick={() => setTheme("light")}
          >
            Light
          </Button>
        </div>
        <hr />
        <div>
          <h1>Inputs</h1>
          <div className="mt-4">
            <SearchInput />
          </div>
        </div>
        <div>
          <h1>Avatar</h1>
          <Avatar
            src={viteLogo}
            sx={{
              height: "8rem",
              width: "8rem",
              border: "1px solid rgba(0,0,0,0.1)",
            }}
          />
        </div>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          {/* <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a> */}
        </div>
        <a>
          <button onClick={goToNext}>Go to next</button>
        </a>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/StyleGuide.tsx</code> and save to test HMR
          </p>
        </div>
        <p className=" text-red-600">
          Click on the Vite and React logos to learn more
        </p>
        <Button buttonType="secondary" iconBefore={<LogoIcon />}>
          Test
        </Button>
      </section>
      <section ref={nextRef} id="next" className="h-screen w-screen bg-red-400">
        <a>
          <button onClick={goToPrev}>Go to first</button>
        </a>
      </section>
    </>
  );
}

export default StyleGuide;
