const inputText = document.getElementById("input_text");
const btn = document.querySelector(".search_icon");
btn.disabled = true;
btn.style.opacity = 0.3;

inputText.addEventListener("input", () => {
    if (inputText.value.trim() !== "") {
        btn.disabled = false;
        btn.style.opacity = 1;
    } else {
        btn.disabled = true;
        btn.style.opacity = 0.3;
    }
})

btn.addEventListener("click", () => {
    if (inputText.value.trim() !== "") {
        input();
    }
})

window.addEventListener("keyup", (e) => {
    if (e.key == "Enter" && document.activeElement == inputText && inputText.value.trim() !== "") {
        input();
    }
})

function input() {
    const query = encodeURIComponent(inputText.value.trim() + "미술관");
    window.open("https://www.google.co.kr/maps/search/" + query + "/data=!3m1!4b1");
}