<?php
$conexion = new mysqli("localhost", "root", "", "watchhub");
if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

$sql = "SELECT autor, mensaje FROM comentarios ORDER BY id DESC";
$resultado = $conexion->query($sql);

$comentarios = [];

if ($resultado) {
    while ($fila = $resultado->fetch_assoc()) {
        $comentarios[] = $fila;
    }
} else {
    // En caso de error en la consulta, devolver mensaje o arreglo vacío
    // Puedes enviar un error JSON o simplemente un arreglo vacío
    $comentarios = ['error' => 'No se pudieron obtener los comentarios'];
}

header('Content-Type: application/json');
echo json_encode($comentarios);

$conexion->close();
?>
