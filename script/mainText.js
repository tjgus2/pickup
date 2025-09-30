const mainTextContent = document.querySelector(".main_text_content");
const mainText = document.querySelectorAll(".text_line");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            mainText.forEach(content => {
                content.classList.add("word");
            });
        } else {
            mainText.forEach(content => {
                content.classList.remove("word");
            });
        }
    });
}, {
    threshold: 0.1
});

observer.observe(mainTextContent);

