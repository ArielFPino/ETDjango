<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario con Validaciones</title>
    <style>
        /* Estilos CSS */
        .error {
            color: red;
        }
    </style>
</head>
<body>
    <h1>Formulario con Validaciones</h1>
    
    <form id="formulario" action="#" method="POST">
        <div>
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required>
            <span id="error-nombre" class="error"></span>
        </div>
        <div>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            <span id="error-email" class="error"></span>
        </div>
        <div>
            <label for="telefono">Teléfono:</label>
            <input type="tel" id="telefono" name="telefono" pattern="[0-9]*" maxlength="9">
            <span id="error-telefono" class="error"></span>
        </div>
        <div>
            <label for="contrasena">Contraseña:</label>
            <input type="password" id="contrasena" name="contrasena" minlength="8" required>
            <span id="error-contrasena" class="error"></span>
        </div>
        <div>
            <button type="submit">Enviar</button>
        </div>
    </form>

    <script>
        const formulario = document.getElementById('formulario');
        const nombreInput = document.getElementById('nombre');
        const emailInput = document.getElementById('email');
        const telefonoInput = document.getElementById('telefono');
        const contrasenaInput = document.getElementById('contrasena');
        
        formulario.addEventListener('submit', function(event) {
            let valid = true;
            
        }
        
        function setErrorFor(input, message) {
            const errorSpan = document.getElementById(`error-${input.id}`);
            errorSpan.innerText = message;
            input.classList.add('error');
        }
        
        function setSuccessFor(input) {
            const errorSpan = document.getElementById(`error-${input.id}`);
            errorSpan.innerText = '';
            input.classList.remove('error');
        }
        
        function isEmail(email) {
            return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
        }
        
        function isTelefono(telefono) {
            return /^[0-9]*$/.test(telefono);
        }
    </script>
</body>
</html>