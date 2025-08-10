const tabButtons = document.querySelectorAll(".tab-button");
const contentAreas = document.querySelectorAll(".content_box");

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tab = button.getAttribute('data-tab');

        tabButtons.forEach(btn => btn.classList.remove('active'));
        contentAreas.forEach(area => area.classList.remove('active'));

        button.classList.add('active');
        document.getElementById(tab).classList.add('active');
    })
})