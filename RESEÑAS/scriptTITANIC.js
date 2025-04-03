/// Función para reproducir el tráiler
function playTrailer() {
    let trailerContainer = document.getElementById("trailer-container");
    let trailerVideo = document.getElementById("trailer-video");

    // URL del tráiler en formato embebido
    let trailerURL = "https://www.youtube.com/embed/tA_qMdzvCvk?si=kNYpq0bjOjYlbk7K";

    trailerVideo.src = trailerURL;
    trailerContainer.style.display = "block";
}

// Función para buscar títulos
function searchTitles() {
    let query = document.getElementById("searchInput").value.trim();
    if (query !== "") {
        console.log("Buscando: " + query);
        // Aquí puedes añadir más lógica para realizar la búsqueda de títulos
    } else {
        alert("Por favor ingresa un título para buscar.");
    }
}



// Función para enviar y mostrar el comentario con persistencia
function submitComment() {
    let commentInput = document.getElementById("comment-input");
    let commentsList = document.getElementById("comments-list");
    
    let commentText = commentInput.value.trim();

    if (commentText !== "") {
        let newComment = document.createElement("div");
        newComment.classList.add("comment");
        newComment.innerHTML = `<p>${commentText}</p>`;
        
        commentsList.appendChild(newComment);

        // Guardar en localStorage
        saveComment(commentText);

        commentInput.value = "";
    } else {
        alert("Por favor escribe un comentario.");
    }
}

// Guardar comentarios en localStorage
function saveComment(comment) {
    let comments = JSON.parse(localStorage.getItem("comments")) || [];
    comments.push(comment);
    localStorage.setItem("comments", JSON.stringify(comments));
}

// Cargar comentarios guardados al cargar la página
function loadComments() {
    let commentsList = document.getElementById("comments-list");
    let comments = JSON.parse(localStorage.getItem("comments")) || [];
    comments.forEach(comment => {
        let newComment = document.createElement("div");
        newComment.classList.add("comment");
        newComment.innerHTML = `<p>${comment}</p>`;
        commentsList.appendChild(newComment);
    });
}

document.addEventListener("DOMContentLoaded", loadComments);

// Detectar cuando se presiona la tecla Enter en el campo de texto
function handleCommentKeyDown(event) {
    if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        submitComment();
    }
}

document.getElementById("comment-input").addEventListener("keydown", handleCommentKeyDown);
