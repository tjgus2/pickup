const mainTextContent = document.querySelector(".main_text_content");
const mainText = document.querySelectorAll(".text_line");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // 요소가 보일 때 실행
            mainText.forEach(content => {
                content.classList.add("word");
            });
        } else {
            // 요소가 안 보일 때 실행 (다시 올라가면 초기화)
            mainText.forEach(content => {
                content.classList.remove("word");
            });
        }
    });
}, {
    threshold: 0.1 // 요소가 10% 이상 보이면 트리거
});

// mainTextContent 요소 관찰 시작
observer.observe(mainTextContent);

