import { useState, useEffect } from "react";

export default function ThemeSwitchBtn() {
  useEffect(() => {
    judgeTheme();
  }, []);
  const [mode, setMode] = useState("");

  function setTheme() {
    if (document.documentElement.classList.contains("dark")) {
      // darkクラスが含まれているならライトモードに変更
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setMode("light");
    } else {
      // darkクラスが含まれていないならダークモードに変更
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setMode("dark");
    }
  }
  function judgeTheme() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setMode("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setMode("light");
    }
  }

  return (
    <>
      <label className="inline-flex cursor-pointer items-center">
        <input type="checkbox" value="" className="peer sr-only" onChange={setTheme} checked={mode === "dark"}/>
        <div className="peer relative h-[calc(1.5rem+2px)] w-11 rounded-full border-2 border-gray-400  after:absolute after:start-[1px] after:top-[1.5px] after:h-[calc(1.25rem-1px)] after:w-[calc(1.25rem-1px)]
        after:rounded-full after:border-2  after:border-gray-400  peer-checked:after:b after:transition-all after:content-[''] peer-checked:bg-BaseColorbrightest
         peer-checked:after:translate-x-full 
         rtl:peer-checked:after:-translate-x-full"></div>
        <p className="text-sm text-TextColor/60 ml-2 lg:inline sm: hidden">
          {mode} mode
          <p className="lg:hidden sm:inline"> 

          </p>
        </p>
      </label>
    </>
  );
}
