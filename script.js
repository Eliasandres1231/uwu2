// Definir los mensajes al inicio del archivo
const messages = [
    {
        title: "Tu Fortaleza",
        content: "Eres el roble que me da sombra, la montaña que me da fuerza. Cada día me inspiras a ser mejor persona. Tu fortaleza no solo está en tus músculos, sino en tu corazón inquebrantable."
    },
    {
        title: "Tu Sabiduría",
        content: "Cada consejo tuyo es un tesoro que guardo en mi corazón. No necesitas un título universitario para ser el profesor más sabio que he tenido en la vida. Tu experiencia y forma de ver la vida me han enseñado más que cualquier libro."
    },
    {
        title: "Tu Paciencia",
        content: "Gracias por cada momento que respiraste profundo, por cada vez que contaste hasta diez, por cada sonrisa que mantuviste cuando querías gritar. Tu paciencia infinita me ha enseñado que el amor verdadero sabe esperar."
    },
    {
        title: "Tu Sacrificio",
        content: "Sé que muchas veces te privaste de cosas para que a mí no me faltara nada. Cada hora extra de trabajo, cada sueño postergado... todo lo has hecho por nosotros. Tu sacrificio no ha pasado desapercibido."
    },
    {
        title: "Tu Ejemplo",
        content: "Cuando sea padre, quiero ser como tú. Quiero tener tu templanza, tu bondad, tu forma de amar sin condiciones. Has puesto el listón muy alto, pero me has dado las herramientas para alcanzarlo."
    }
];

// Obtener elementos del DOM correctamente
const startButton = document.getElementById('start-button');
const startScreen = document.getElementById('start-screen');
const messageContainer = document.getElementById('message-container');
const messageCard = document.querySelector('.message-card');
const nextButton = document.querySelector('.next-button');

let currentMessageIndex = 0;

// Evento del botón inicial
startButton.addEventListener('click', function() {
    startScreen.style.opacity = '0';
    startScreen.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        startScreen.classList.add('is-hidden');
        messageContainer.classList.remove('is-hidden');
        messageContainer.style.opacity = '1';
        showMessage(0);
    }, 500);
});

// Función para mostrar mensajes
function showMessage(index) {
    const messageCard = document.querySelector('.message-card');
    messageCard.style.opacity = '0';
    
    setTimeout(() => {
        messageCard.innerHTML = `
            <h2>${messages[index].title}</h2>
            <div class="message-circle">
                <div class="click-text">Presiona aquí</div>
                <p class="message-text is-hidden">${messages[index].content}</p>
            </div>
            <div class="progress-bar">
                <div class="progress"></div>
            </div>
            <button class="next-button is-hidden">Siguiente mensaje ❤️</button>
        `;

        // Actualizar la barra de progreso
        const progress = ((index + 1) / messages.length) * 100;
        document.querySelector('.progress').style.width = `${progress}%`;
        
        // Añadir evento al nuevo círculo
        const newCircle = messageCard.querySelector('.message-circle');
        const clickText = messageCard.querySelector('.click-text');
        const messageText = messageCard.querySelector('.message-text');
        
        newCircle.addEventListener('click', function() {
            clickText.style.opacity = '0';
            setTimeout(() => {
                clickText.style.display = 'none';
                messageText.classList.remove('is-hidden');
                messageText.style.opacity = '1';
                
                // Mostrar el botón siguiente
                const nextBtn = messageCard.querySelector('.next-button');
                nextBtn.classList.remove('is-hidden');
                nextBtn.classList.add('visible');
                
                // Añadir evento click al botón siguiente
                nextBtn.addEventListener('click', () => {
                    if (index + 1 < messages.length) {
                        showMessage(index + 1);
                    } else {
                        showFinalMessage();
                    }
                });
            }, 300);
        });
        
        messageCard.style.opacity = '1';
    }, 500);
}

// Función para mostrar el mensaje final
function showFinalMessage() {
    const messageCard = document.querySelector('.message-card');
    messageCard.style.opacity = '0';
    
    setTimeout(() => {
        messageCard.innerHTML = `
            <h2 class="final-title">Te Amo Papá</h2>
            <p class="final-text">Gracias por ser el mejor padre del mundo</p>
            <div class="heart-container">
                <div class="heart"></div>
            </div>
            <button onclick="restartJourney()" class="restart-button">Volver a empezar</button>
        `;
        messageCard.style.opacity = '1';
    }, 500);
}
// Función para reiniciar
function restartJourney() {
    currentMessageIndex = 0;
    messageContainer.classList.add('is-hidden');
    startScreen.classList.remove('is-hidden');
    startScreen.style.opacity = '1';
}
