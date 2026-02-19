const toggle = document.getElementById("theme-toggle");

let mode = localStorage.getItem("theme") || "dark";

function detectSystemTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme() {
    if (mode === "auto") {
        document.documentElement.setAttribute("data-theme", detectSystemTheme());
    } else {
        document.documentElement.setAttribute("data-theme", mode);
    }

    if (mode === "dark") toggle.textContent = "🌙";
    else if (mode === "light") toggle.textContent = "☀️";
    else toggle.textContent = "🌓";
}

toggle.addEventListener("click", () => {
    if (mode === "dark") mode = "light";
    else if (mode === "light") mode = "auto";
    else mode = "dark";

    localStorage.setItem("theme", mode);
    applyTheme();
});

applyTheme();
