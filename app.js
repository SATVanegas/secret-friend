// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let friends = [];


function addFriend() {
    if (document.getElementById('friend').value == '') {
        alert('Por favor, inserte un nombre');
   
    }else{
        friends.push(document.getElementById('friend').value);
    }
}