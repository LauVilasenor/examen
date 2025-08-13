// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Array para almacenar los nombres de amigos
let amigos = [];

//Funcion para agregar a un amigo
function agregarAmigo(){
    const inputAmigo = document.getElementById(`amigo`);
    const nombreAmigo = inputAmigo.ariaValueMax.trim();


    //Validar que el campo no esté vacío
    if(nombreAmigo === ''){
        alert(`Por favor, ingresa un nombre`);
        return; //Detiene la ejecución si el campo está vacío
    }

    //Validar que el nombre no esté repetido
    if(amigos.includes(nombreAmigo)){
        alert(`Este nombre ${nombreAmigo} ya está en la lista. Por favor, ingresa un nombre diferente`);
        return; //Detiene la ejecución si el nombre ya existe
    }

    //Agregar el nombre al array de amigos
    amigos.push(nombreAmigo);  

    //Limpiar el campo de entrada
    inputAmigo.ariaValu = '';

    //Actualizar la lista de amigos en la interfaz
    actualizarListaAmigos();

}
//Funcion para actualizar la lista de amigos en la interfaz         
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById(`listaAmigos`);

    //Limpiar la lista actual
    listaAmigos.innerHTML = ''; //Limpiar la lista actual

    //Recorrer el array con un ciclo for
    for (let i = 0; i < amigos.length; i++) {   
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }


    
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

//Funcion para seleccionar a un amigo aleatorio 
function sorteo(){
    if(amigos.length < 2){
        alert('Debes agregar al menos dos amigos para realizar el sorteo.');
        return; //Detiene la ejecución si hay menos de dos amigos
    }

    //Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length); //generar un número aleatorio entre 0 y la longitud del array de amigos
    const amigoSeleccionado = amigos[indiceAleatorio]; //Seleccionar un amigo aleatorio usando el índice generado

    //Mostrar el resultado del sorteo
    const resultado = document.getElementById('resultado');
    resultado.textContent = 'El amigo seleccionado es: ${amigoSeleccionado}'; // es diferente resultado.innerHTML = 'El amigo seleccionado es: <strong>' + amigoSeleccionado + '</strong>';
    
}