// Selecciona el elemento del DOM que tenga el id="year"
// getElementById devuelve el primer elemento que coincida con ese id.
// Luego accedemos a su propiedad textContent para cambiar el texto interno.
document.getElementById("year").textContent = new Date().getFullYear();
// new Date() crea un objeto fecha con la fecha y hora actual.
// getFullYear() extrae el año en formato de 4 dígitos (ej: 2026).
// Resultado: el elemento con id="year" mostrará automáticamente el año actual.


// Busca en el documento el primer elemento que tenga la clase "capa-estrellita".
// querySelector devuelve el primer elemento que coincida con el selector CSS.
// Si no encuentra ninguno, devuelve null.
const layer = document.querySelector(".capa-estrellita");


// Verificamos que el elemento exista antes de continuar.
// Esto evita errores si el HTML no contiene esa clase.
if (layer) {

    // Variable para guardar el último momento (en milisegundos)
    // en que se creó una estrellita.
    let last = 0;

    // Añadimos un "event listener" al objeto window.
    // "pointermove" se dispara cada vez que el puntero se mueve
    // (funciona tanto para mouse como para pantallas táctiles).
    window.addEventListener("pointermove", (e) => {

        // performance.now() devuelve el tiempo en milisegundos
        // desde que se cargó la página.
        const now = performance.now();

        // Control de frecuencia (throttling):
        // Si no han pasado al menos 30ms desde la última estrellita,
        // salimos de la función para no saturar el DOM.
        // Esto mejora el rendimiento.
        if (now - last < 30) return;

        // Actualizamos el tiempo del último evento permitido.
        last = now;

        // Creamos un nuevo elemento <div> dinámicamente.
        const s = document.createElement("div");

        // Le asignamos la clase "estrellita"
        // (probablemente definida en CSS para animación o estilo).
        s.className = "estrellita";

        // Insertamos el emoji de estrella como contenido del div.
        s.textContent = "✨";

        // Añadimos la nueva estrellita como hijo del elemento "layer".
        // Esto hace que aparezca visualmente en la página.
        layer.appendChild(s);

    });

}