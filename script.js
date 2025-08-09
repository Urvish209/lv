document.getElementById('surpriseBtn').addEventListener('click', () => {
    document.querySelector('.start-screen').classList.add('hidden');
    document.querySelector('.surprise-content').classList.remove('hidden');
    startFloatingHearts();
    startMessageCycle();
});

// Floating Hearts
function startFloatingHearts() {
    const container = document.querySelector('.hearts-container');
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart-float');
        heart.textContent = '💜';
        heart.style.left = Math.random() > 0.5 ? '-30px' : '100%';
        heart.style.top = Math.random() * 80 + 'vh';
        heart.style.fontSize = Math.random() * 20 + 20 + 'px';
        heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
        heart.style.color = '#b065d9';
        heart.style.transform = heart.style.left === '-30px' ? 'rotate(-15deg)' : 'rotate(15deg)';
        container.appendChild(heart);
        setTimeout(() => heart.remove(), 6000);
    }, 500);
}

// Messages Cycle
const messages = [
    "I love you 💜",
    "I miss you 💜",
    "You are my sunshine 💜",
    "Forever & Always 💜",
    "You mean the world to me 💜"
];

let msgIndex = 0;
function startMessageCycle() {
    const msgElement = document.getElementById('message');
    setInterval(() => {
        msgIndex = (msgIndex + 1) % messages.length;
        msgElement.textContent = messages[msgIndex];
    }, 2000);
}
