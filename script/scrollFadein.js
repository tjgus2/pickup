document.addEventListener("DOMContentLoaded", () => {
    const targets = document.querySelectorAll(
        ".top_full_content, .new_full_content, .location_full_content"
    );

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                const ratio = entry.intersectionRatio;

                if (ratio >= 0.3) {
                    entry.target.classList.add("show");
                } 

                else if (ratio <= 0.8) {
                    entry.target.classList.remove("show");
                }
            });
        },
        {
            threshold: [0.1, 0.8] 
        }
    );

    targets.forEach(target => observer.observe(target));
});
