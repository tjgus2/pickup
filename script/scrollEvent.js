document.addEventListener("wheel", function (event) {
    event.preventDefault();
    window.scrollBy({
        top: event.deltaY * 0.8,
        behavior: "smooth"
    });
}, { passive: false });
