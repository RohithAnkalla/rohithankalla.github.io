const toggle = document.getElementById("theme-toggle");

let mode = localStorage.getItem("theme") || "dark";

function detectSystemTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);

    if (mode === "dark") toggle.textContent = "🌙";
    else if (mode === "light") toggle.textContent = "☀️";
    else toggle.textContent = "🌓";
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

/* Initial load */
if (mode === "auto") {
    applyTheme(detectSystemTheme());
} else {
    applyTheme(mode);
}

/* Cycle: dark → light → auto → dark */
toggle.addEventListener("click", () => {
    if (mode === "dark") setMode("light");
    else if (mode === "light") setMode("auto");
    else setMode("dark");
});
