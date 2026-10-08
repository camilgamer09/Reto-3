// Obtener las referencias de los elementos HTML
const input = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const resultadoTextarea = document.querySelector("#resultadoTextarea");
const clearBtn = document.querySelector("#clearBtn");

// Escuchar los eventos de los botones
addBtn.addEventListener("click", addTask);
clearBtn.addEventListener("click", clearTasks);

function addTask() {
    const text = input.value.trim();
    if (!text) return; // Si la caja está vacía, no hace nada
    let contenidoActual = resultadoTextarea.value.trim();
    if (contenidoActual !== "") {
        contenidoActual += ", " + text;
    } else {
        contenidoActual = text;
    }
    const listaOrdenada = contenidoActual
        .split(", ")
        .sort((a, b) => a.localeCompare(b, 'es', { sensitivity: 'base' }))
        .join(", ");  

    resultadoTextarea.value = listaOrdenada;

    input.value = "";
    input.focus();
};

function clearTasks() {
    resultadoTextarea.value = "";
    input.value = "";
    input.focus();
};