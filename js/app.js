let insertEmail = prompt('Inserisci email?');

let usersEmail = ['francesco1@gmail.com', 'francesco2@gmail.com', 'francesco3@gmail.com', 'francesco4@gmail.com', 'francesco5@gmail.com'];

const lunghezzaArray = usersEmail.length;
console.log(lunghezzaArray);

let messageDom = document.getElementById('message');

let email = false;

for(i = 0; i < lunghezzaArray; i++){
  if(insertEmail == usersEmail[i]){
    email = true;
  }
}

if(email == true){
  messageDom.innerHTML = 'la tua mail si trova nel database';
}
else{
  messageDom.innerHTML = 'la tua mail non si trova nel database';
}

let user = Math.floor(Math.random() * 6) + 1;
let bot = Math.floor(Math.random() * 6) + 1;

console.log(user, bot);

if(user > bot){
  console.log('Hai vinto');
}
else if(bot > user){
  console.log('Il computer ha vinto');
}
else{
  console.log('avete pareggiato');
}
