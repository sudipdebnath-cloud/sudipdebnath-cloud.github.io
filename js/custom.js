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

/*const popup = document.querySelector('.popup-content');
let isDragging = false;
let offsetX = 0;
let offsetY = 0;

popup.addEventListener('mousedown', function (e) {
  isDragging = true;
  offsetX = e.clientX - popup.offsetLeft;
  offsetY = e.clientY - popup.offsetTop;
  popup.style.position = 'absolute';
  popup.style.margin = 0; // Remove margin for free movement
  popup.style.zIndex = 10000;
});

document.addEventListener('mouseup', function () {
  isDragging = false;
});

document.addEventListener('mousemove', function (e) {
  if (isDragging) {
    popup.style.left = e.clientX - offsetX + 'px';
    popup.style.top = e.clientY - offsetY + 'px';
  }
});*/
