AOS.init(); // This stays here if you're triggering AOS before includes load

document.addEventListener("includes-loaded", () => {
  // Safe to access included content now
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Re-initialize AOS after includes are loaded
  if (typeof AOS !== "undefined") {
    AOS.init();
  }

  // ========== Fix In-Page Anchor Links on Subpages ==========
  // The header's "Portfolio" (#projects) and "Contact" (#contact) links
  // only make sense where those sections actually exist.
  const currentFile = window.location.pathname.split("/").pop();
  const isHomePage = currentFile === "" || currentFile === "index.html";
  const isPluginPage = currentFile === "wp-plugins.html";

  if (isPluginPage) {
    // The plugins page has its own #contact section, so only the
    // "Portfolio" link needs to point back to the homepage.
    const portfolioLink = document.querySelector('#mainNav a[href="#projects"]');
    if (portfolioLink) {
      portfolioLink.setAttribute("href", "https://sudipdebnath-cloud.github.io/");
    }
  } else if (!isHomePage) {
    // Any other subpage (e.g. resume.html) has neither section, so both
    // links get prefixed with "index.html" to take you home first.
    document.querySelectorAll('#mainNav a[href^="#"]').forEach((link) => {
      const hash = link.getAttribute("href");
      link.setAttribute("href", "index.html" + hash);
    });
  }

  // ========== Mobile Nav Toggle Logic ==========
  const navToggle = document.getElementById("navToggle");
  const mainNav = document.getElementById("mainNav");
  const navOverlay = document.getElementById("navOverlay");

  if (navToggle && mainNav && navOverlay) {
    const openNav = () => {
      navToggle.classList.add("active");
      mainNav.classList.add("active");
      navOverlay.classList.add("active");
      navToggle.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
    };

    const closeNav = () => {
      navToggle.classList.remove("active");
      mainNav.classList.remove("active");
      navOverlay.classList.remove("active");
      navToggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    };

    navToggle.addEventListener("click", () => {
      if (mainNav.classList.contains("active")) {
        closeNav();
      } else {
        openNav();
      }
    });

    navOverlay.addEventListener("click", closeNav);

    mainNav.querySelectorAll(".nav-link, a").forEach((link) => {
      link.addEventListener("click", closeNav);
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeNav();
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 767) closeNav();
    });
  }

  // ========== Modal Open Logic ==========
  document.querySelectorAll(".project-item").forEach((item) => {
    item.addEventListener("click", () => {
      const targetId = item.getAttribute("data-target");
      const modal = document.getElementById(targetId);
      if (modal) {
        modal.style.display = "block";
      }
    });
  });

  // ========== Modal Close Logic ==========
  document.querySelectorAll(".project-modal").forEach((modal) => {
    modal.addEventListener("click", (e) => {
      if (
        e.target.classList.contains("project-modal") ||
        e.target.hasAttribute("data-close")
      ) {
        modal.style.display = "none";
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
  const backToTopBtn = document.getElementById("backToTopBtn");

  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTopBtn.style.display = "block";
      } else {
        backToTopBtn.style.display = "none";
      }
    });

    backToTopBtn.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
