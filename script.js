// Função para gerar uma mensagem de notificação aleatória
function getRandomNotificationMessage() {
    const messages = [
        "Usuário 3...9 ganhou uma chuva grátis de 1000 na winner",
        "Usuário 1...0 ganhou 300% de bônus de boa vindas na placard",
        "Usuário1...8 ganhou 200%de bônus de boa vindas na olabet",
        "Usuário 10...7 ganhou de 200% na mega live",
        "Usuário 10...7 ganhou de 200% na mega live",
        "Usuário 8...6 ganhou de 200% na mega live"
    ];
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
}

// Função para exibir a notificação
function showNotification(message) {
    const notificationContainer = document.getElementById('notification-container');
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.innerText = message;

    // Adiciona a notificação ao container
    notificationContainer.appendChild(notification);

    // Aumenta a visibilidade da notificação com animação
    setTimeout(() => {
        notification.classList.add('notification-show');
    }, 100);

    // Depois de 5 segundos, esconda a notificação com animação
    setTimeout(() => {
        notification.classList.add('notification-hide');
    }, 5000);

    // Remove a notificação do DOM após ela desaparecer
    setTimeout(() => {
        notification.remove();
    }, 5500);
}

// Função para gerar notificações aleatórias em intervalos
function generateRandomNotifications() {
    setInterval(() => {
        const message = getRandomNotificationMessage();
        showNotification(message);
    }, 8000); // Intervalo de 8 segundos entre as notificações
}

// Chama a função para começar a gerar notificações aleatórias
generateRandomNotifications();

// Função para alternar as imagens
let currentIndex = 0;
const slides = document.querySelectorAll('.banner-slide');
const totalSlides = slides.length;

function changeSlide() {
    // Remove a classe 'active' de todas as imagens
    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    // Avança para a próxima imagem
    currentIndex = (currentIndex + 1) % totalSlides;

    // Adiciona a classe 'active' à próxima imagem
    slides[currentIndex].classList.add('active');
}

// Muda a imagem a cada 5 segundos (5000ms)
setInterval(changeSlide, 5000);

// Inicializa a primeira imagem
changeSlide();

