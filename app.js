let listadoNombreAmigos = [];

function agregarAmigo(){
    document.getElementById("amigo").value === ""
    ? alert("Debe ingresar un nombre") 
    : listadoNombreAmigos.push(nuevoNombre);

    listarAmigos();
    return;
}

function listarAmigos(){
    document.getElementById("listaAmigos").innerHTML = 
    listadoNombreAmigos.map( amigo => 
        `<li>${amigo}</li>`).join("\n"
    ); 

    return;
}

function sortearAmigo(){       
    document.getElementById("resultado").innerHTML = `<li>${listadoNombreAmigos[Math.floor(Math.random() * listadoNombreAmigos.length)]}</li>`;
    
    return;
}