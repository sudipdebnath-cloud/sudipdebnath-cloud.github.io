document.addEventListener("DOMContentLoaded", function () {
    const includes = document.getElementsByTagName("include");
    let remaining = includes.length;

    if (remaining === 0) {
        document.dispatchEvent(new Event("includes-loaded"));
        return;
    }

    for (let i = 0; i < includes.length; i++) {
        const element = includes[i];
        const src = element.getAttribute("src");

        fetch(src)
            .then(res => res.text())
            .then(data => {
                element.insertAdjacentHTML("afterend", data);
                element.remove();
                remaining--;

                if (remaining === 0) {
                    // All includes are loaded
                    document.dispatchEvent(new Event("includes-loaded"));
                }
            });
    }
});
