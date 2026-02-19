const toggle = document.getElementById("theme-toggle");

let mode = localStorage.getItem("theme") || "dark";

function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);

    if (theme === "dark") toggle.textContent = "🌙";
    else if (theme === "light") toggle.textContent = "☀️";
    else toggle.textContent = "🌓";
}

function detectSystemTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function setMode(newMode) {
    mode = newMode;
    localStorage.setItem("theme", mode);

    if (mode === "auto") {
        applyTheme(detectSystemTheme());
    } else {
        applyTheme(mode);
    }
}

if (mode === "auto") {
    applyTheme(detectSystemTheme());
} else {
    applyTheme(mode);
}

toggle.addEventListener("click", () => {
    if (mode === "dark") setMode("light");
    else if (mode === "light") setMode("auto");
    else setMode("dark");
});
