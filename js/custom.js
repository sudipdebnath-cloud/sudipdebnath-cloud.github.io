document.addEventListener("includes-loaded", () => {
    // Now safe to access included content
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
