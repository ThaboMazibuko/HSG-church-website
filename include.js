document.addEventListener("DOMContentLoaded", () => {
    const includes = document.querySelectorAll('[data-include]');
    includes.forEach(async (el) => {
        const file = el.getAttribute("data-include");
        if (file) {
            try {
                const response = await fetch(file);
                if (!response.ok) throw new Error(`Could not load ${file}: ${response.statusText}`);
                const html = await response.text();
                el.innerHTML = html;
            } catch (err) {
                console.error(err);
            }
        }
    });
});
