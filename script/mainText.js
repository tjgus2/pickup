const line1Word = ["instantly,"];
const line2Word = ["smartly,"];
const line3Word = ["effortlessly,"];
const line4Word = ["Find popups"];

function animateLine(lineId, words, delayOffset) {
    const line = document.getElementById(lineId);
    words.forEach((word, index) => {
        const span = document.createElement('span');
        span.className = 'word';
        span.textContent = word;
        span.style.animationDelay = `${(index + delayOffset) * 0.3}s`;
        line.appendChild(span);
    })
}

function playAnimation() {
    animateLine('line1', line1Word, 0);
    animateLine('line2', line2Word, line1Word.length);
    animateLine('line3', line3Word, line1Word.length + line2Word.length);
    animateLine('line4', line4Word, line1Word.length + line2Word.length + line3Word.length);
}

const textContent = document.getElementById("main_text_content");
function resetAnimation() {
    document.getElementById('line1').innerHTML = '';
    document.getElementById('line2').innerHTML = '';
    document.getElementById('line3').innerHTML = '';
    document.getElementById('line4').innerHTML = '';
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            playAnimation();
        } else  {
            resetAnimation();
        }
    })
}, {
    threshold: 0.5
})

observer.observe(textContent);

