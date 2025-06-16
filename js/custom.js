document.addEventListener("includes-loaded", () => {
    // Now safe to access included content
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Re-initialize AOS after includes are loaded
    if (typeof AOS !== 'undefined') {
        AOS.init();
    }

});

AOS.init();

function showAllSkills() {
    document.getElementById("allSkillsPopup").classList.add("active");
}

function closeSkillsPopup() {
    document.getElementById("allSkillsPopup").classList.remove("active");
}