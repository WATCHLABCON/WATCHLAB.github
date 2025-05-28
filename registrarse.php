<?php
$conn = new mysqli("localhost", "root", "", "watchhub");

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

$username = $_POST['username'];
$email = $_POST['email'];
$password = password_hash($_POST['password'], PASSWORD_DEFAULT);

$stmt = $conn->prepare("SELECT id_usuario FROM usuarios WHERE username = ?");
$stmt->bind_param("s", $username);
$stmt->execute();
$stmt->store_result();

if ($stmt->num_rows > 0) {
    echo "Usuario ya registrado.";
} else {
    $stmt = $conn->prepare("INSERT INTO usuarios (username, email, password) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $username, $email, $password);
    if ($stmt->execute()) {
        echo "Registro exitoso.";
    } else {
        echo "Error al registrar.";
    }
}

$conn->close();
?>