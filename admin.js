document.addEventListener("DOMContentLoaded", function () {
    const themeSelect = document.getElementById("themeSelect");
    const setThemeButton = document.getElementById("setThemeButton");

    // Lee el tema de debate almacenado en localStorage (si existe)
    const savedTheme = localStorage.getItem("debateTheme");

    // Establece el valor del select en el tema guardado (si existe)
    if (savedTheme) {
        themeSelect.value = savedTheme;
    }

    // Función para guardar el tema de debate en localStorage
    function saveTheme() {
        const selectedTheme = themeSelect.value;

        // Almacena el tema en localStorage
        localStorage.setItem("debateTheme", selectedTheme);
    }

    // Evento para guardar el tema cuando el botón sea presionado
    setThemeButton.addEventListener("click", function () {
        saveTheme();
    });

    // Llama a la función para guardar el tema cuando se cambie la selección
    themeSelect.addEventListener("change", function () {
        saveTheme();
    });
});
