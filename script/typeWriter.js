const newText = `See
what's new
in the art
scene this
week.`;

const speed = 50;

function typeWriter(targetId, text) {
    let i = 0;
    const element = document.getElementById(targetId);
    element.innerHTML = ""; 

    function typing() {
        if (i < text.length) {
            if (text.charAt(i) === "\n") {
                element.innerHTML += "<br>"; 
            } else {
                element.innerHTML += text.charAt(i);
            }
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}


window.onload = function () {
    const newContainer = document.querySelector(".new_text_content");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                typeWriter("new-typewriter", newText);
            } else {
                entry.target.classList.remove("visible");
                document.getElementById("new-typewriter").innerHTML = "";
            }
        });
    }, {
        threshold: 0.1
    });

    if (newContainer) observer.observe(newContainer);
}
