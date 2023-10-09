let insertEmail = prompt('Inserisci email?');

let usersEmail = ['francesco1@gmail.com', 'francesco2@gmail.com', 'francesco3@gmail.com', 'francesco4@gmail.com', 'francesco5@gmail.com'];

const lunghezzaArray = usersEmail.length;
console.log(lunghezzaArray);

let messageDom = document.getElementById('message');

for(i = 0; i < lunghezzaArray; i++){
  if(insertEmail == usersEmail[i]){
    messageDom.innerHTML = 'la tua mail si trova nel database';
  }
  else{
    messageDom.innerHTML = 'la tua mail non si trova nel database';
  }
}
