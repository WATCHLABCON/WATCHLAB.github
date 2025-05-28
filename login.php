<?php
$conn = new mysqli("localhost", "root", "", "watchhub");

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

$username = $_POST['username'] ?? '';
$password = $_POST['password'] ?? '';

if (empty($username) || empty($password)) {
    die("Por favor complete todos los campos.");
}

$stmt = $conn->prepare("SELECT password FROM usuarios WHERE username = ?");
$stmt->bind_param("s", $username);
$stmt->execute();
$stmt->store_result();

if ($stmt->num_rows > 0) {
    $stmt->bind_result($hashedPassword);
    $stmt->fetch();

    if (password_verify($password, $hashedPassword)) {
        echo "success";
    } else {
        echo "Contraseña incorrecta.";
    }
} else {
    echo "Usuario no encontrado.";
}

$stmt->close();
$conn->close();
?>
