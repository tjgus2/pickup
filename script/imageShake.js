document.addEventListener('mousemove', (e) => {
    const images = document.querySelectorAll(".shake-img");
    
    images.forEach(img => {
        const speed = 10;
        const x = (window.innerWidth / 2 - e.clientX) / speed;
        const y = (window.innerHeight / 2 - e.clientY) / speed;

        img.style.transform = `translate(${x}px, ${y}px)`;
    })
})