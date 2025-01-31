// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let friends = [];


function addFriend() {
    if (document.getElementById('friend').value === '') {
        alert('Por favor, inserte un nombre');
   
    }else{
        friends.push(document.getElementById('friend').value);
        document.getElementById('friend').value = '';
        listFriends();
    }
}

function listFriends() {
    let list = document.getElementById('listaAmigos');
    list.innerHTML = '';
    friends.forEach(friend => {
        let item = document.createElement('li');
        item.textContent = friend;
        list.appendChild(item);
    });
}

function cleanFriends() {
    let list = document.getElementById('listaAmigos');
    friends = [];
    list.innerHTML = '';

}

function circumventFriend(){

    if(friends.length === 0){
        alert('No hay amigos en la lista');
    }else{

        let sort = numberFriends();
        let name = friends[sort];
        console.log(sort);
        console.log(name);
        console.log(friends);
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `El amigo sorteado es ${name}`;
        cleanFriends();

    }
}

function numberFriends(){

    return parseInt(Math.floor(Math.random() * friends.length));

}

 
