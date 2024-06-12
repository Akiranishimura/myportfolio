import { useState, useEffect} from "react";

export default function ThemeSwitchBtn() {
  useEffect(() => {
    judgeTheme();
    }, []);
  const [mode, setMode] = useState('');

  function setTheme() {
    if (document.documentElement.classList.contains("dark")) {
      // darkクラスが含まれているならライトモードに変更
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setMode("light mode");
    } else {
      // darkクラスが含まれていないならダークモードに変更
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setMode("dark mode");
    }
  }
  function judgeTheme() {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      setMode("dark mode");
    } else {
      document.documentElement.classList.remove('dark')
      setMode("light mode");
    }
  }

  return (
    <>
      <button className="px-2 py-0.5 border border-TextColor rounded bg-BaseColorbrightest" aria-label="Toggle Dark Mode" onClick={setTheme}>
        {mode}
      </button>
    </>
  );
}
