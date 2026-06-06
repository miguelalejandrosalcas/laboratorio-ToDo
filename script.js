let resultado = confirm("¿Estás seguro de eliminar la tarea?");
let mostrarMensaje = document.getElementById('error');
let btnUrgente = document.getElementById('btn-urgente')

function confirmar() {
    if (resultado === true) {
        mostrarMensaje.style.display = "block";
        mostrarMensaje.innerText = "Correcto";
    } else {
        mostrarMensaje.style.display = "block";
        mostrarMensaje.innerText = "Incorrecto";
    }
    
}

btnUrgente.addEventListener('click', function() {
    btnUrgente.style.backgroundColor = "redsdfdsfsd";
})