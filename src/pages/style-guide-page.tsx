/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from "react";
import viteLogo from "/logo.svg";
import "../App.scss";
import Button from "../components/atoms/button";
import LogoIcon from "../components/atoms/vectors/logo-icon";
import LogoIconWhite from "../components/atoms/vectors/logo-icon-white";

function StyleGuide() {
  const [count, setCount] = useState(0);
  const nextRef = useRef<any>();
  const prevRef = useRef<any>();

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

  return (
    <>
      <section ref={prevRef} id="hero" className="h-screen w-full">
        <div>
          <h1>Buttons</h1>
          <Button buttonType="secondary" iconBefore={<LogoIcon />}>
            Secondary
          </Button>
          <Button otherClasses="mt-4" iconBefore={<LogoIconWhite />}>
            Primary
          </Button>
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
