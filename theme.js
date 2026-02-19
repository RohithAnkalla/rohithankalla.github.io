const toggle = document.getElementById("theme-toggle");

let mode = localStorage.getItem("theme") || "auto";

function applyTheme(mode) {
    document.documentElement.setAttribute("data-theme", mode);
    localStorage.setItem("theme", mode);

    if (mode === "light") toggle.textContent = "☀️";
    else if (mode === "dark") toggle.textContent = "🌙";
    else toggle.textContent = "🌓";
}

function detectSystemTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

if (mode === "auto") {
    applyTheme(detectSystemTheme());
} else {
    applyTheme(mode);
}

toggle.addEventListener("click", () => {
    if (mode === "auto") mode = "light";
    else if (mode === "light") mode = "dark";
    else mode = "auto";

    if (mode === "auto") applyTheme(detectSystemTheme());
    else applyTheme(mode);
});
