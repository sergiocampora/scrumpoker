document.addEventListener("DOMContentLoaded", function () {
    const themeDisplay = document.getElementById("themeDisplay");

    // Lee el tema de debate almacenado en localStorage
    const debateTheme = localStorage.getItem("debateTheme");

    // Muestra el tema en la página de usuario
    if (debateTheme) {
        themeDisplay.textContent = `Tema de Debate: ${debateTheme}`;
    }
});
document.addEventListener("DOMContentLoaded", function () {
    // Array de valores para las cartas de votación
    const votingValues = ["0", "1", "2", "3", "5", "8", "13", "21", "?"];

    const userStoryElement = document.getElementById("userStory");
    const votingOptionsElement = document.getElementById("votingOptions");
    const voteButton = document.getElementById("voteButton");

    // Función para crear las cartas de votación
    function createVotingCards() {
        for (const value of votingValues) {
            const card = document.createElement("li");
            card.className = "card";
            card.textContent = value;

            // Agregar un evento de clic para seleccionar la carta
            card.addEventListener("click", function () {
                // Resaltar la carta seleccionada
                const selectedCard = document.querySelector(".selected-card");
                if (selectedCard) {
                    selectedCard.classList.remove("selected-card");
                }
                card.classList.add("selected-card");
            });

            votingOptionsElement.appendChild(card);
        }
    }

    // Llamar a la función para crear las cartas de votación
    createVotingCards();

    // Simulación de la selección de una historia de usuario
    const userStory = "Historia de usuario 1";
    userStoryElement.textContent = userStory;

    // Evento de clic para el botón de votar
    voteButton.addEventListener("click", function () {
        const selectedCard = document.querySelector(".selected-card");
        if (selectedCard) {
            const selectedValue = selectedCard.textContent;
            alert(`Has votado "${selectedValue}" para "${userStory}".`);
        } else {
            alert("Por favor, selecciona una carta antes de votar.");
        }
    });
});
const votingOptionsElement = document.getElementById("votingOptions");

votingOptionsElement.addEventListener("click", function (event) {
    const selectedValue = event.target.textContent;

    // Almacena la selección de voto en el localStorage
    localStorage.setItem("userVote", selectedValue);
});
