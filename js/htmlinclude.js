document.addEventListener("DOMContentLoaded", function () {
    let includes = document.getElementsByTagName("include");
    for (let i = 0; i < includes.length; i++) {
        let element = includes[i];
        let src = element.getAttribute("src");
        fetch(src)
            .then(res => res.text())
            .then(html => {
                element.insertAdjacentHTML("afterend", html);
                element.remove();
            });
    }
});