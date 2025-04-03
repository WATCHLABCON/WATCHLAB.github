// Función para reproducir el tráiler
function playTrailer() {
    const trailerContainer = document.getElementById('trailer-container');
    const trailerVideo = document.getElementById('trailer-video');
    
    trailerVideo.src = "https://www.youtube.com/embed/3y-6iaveY6c?autoplay=1";
    trailerContainer.style.display = "block";
}

// Función para buscar títulos
function searchTitles() {
    let query = document.getElementById("searchInput").value;
    alert("Buscando: " + query);
    // Aquí puedes añadir más lógica para realizar la búsqueda de títulos
}

// Función para enviar y mostrar el comentario
function submitComment() {
    let commentInput = document.getElementById("comment-input");
    let commentsList = document.getElementById("comments-list");

    // Obtener el comentario
    let commentText = commentInput.value.trim();

    if (commentText !== "") {
        // Crear el nuevo div para el comentario
        let newComment = document.createElement("div");
        newComment.classList.add("comment");
        newComment.innerHTML = `<p>${commentText}</p>`;

        // Agregar el comentario a la lista
        commentsList.appendChild(newComment);

        // Limpiar el campo de texto
        commentInput.value = "";
    } else {
        alert("Por favor escribe un comentario.");
    }
}
// Detectar cuando se presiona la tecla Enter en el campo de texto
document.getElementById("comment-input").addEventListener("keydown", function(event) {
    if (event.key === "Enter" && !event.shiftKey) {  // Si se presiona Enter (sin Shift)
        event.preventDefault(); // Prevenir el salto de línea
        submitComment();  // Llamar a la función para enviar el comentario
    }
});