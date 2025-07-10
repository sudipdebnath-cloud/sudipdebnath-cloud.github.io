AOS.init(); // This stays here if you're triggering AOS before includes load

document.addEventListener("includes-loaded", () => {
    // Safe to access included content now
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Re-initialize AOS after includes are loaded
    if (typeof AOS !== 'undefined') {
        AOS.init();
    }

    // ========== Modal Open Logic ==========
    document.querySelectorAll('.project-item').forEach(item => {
        item.addEventListener('click', () => {
            const targetId = item.getAttribute('data-target');
            const modal = document.getElementById(targetId);
            if (modal) {
                modal.style.display = 'block';
            }
        });
    });

    // ========== Modal Close Logic ==========
    document.querySelectorAll('.project-modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target.classList.contains('project-modal') || e.target.hasAttribute('data-close')) {
                modal.style.display = 'none';
            }
        });
    });

    // ========== Skills Popup Logic ==========
    const allSkillsPopup = document.getElementById("allSkillsPopup");
    if (allSkillsPopup) {
        window.showAllSkills = () => {
            allSkillsPopup.classList.add("active");
        };

        window.closeSkillsPopup = () => {
            allSkillsPopup.classList.remove("active");
        };
    }

    // ======= Back to Top Button Logic =======
    const backToTopBtn = document.getElementById('backToTopBtn');

    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.style.display = 'block';
            } else {
                backToTopBtn.style.display = 'none';
            }
        });

        backToTopBtn.addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
