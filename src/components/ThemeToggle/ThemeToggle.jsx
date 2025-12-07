import { useEffect, useState } from "react";

const ThemeToggle = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <button
            className="btn btn-ghost text-xl"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
            {theme === "light" ? "🌙" : "☀️"}
        </button>
    );
};

export default ThemeToggle;
