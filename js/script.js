//Mail
//Chiedi all’utente la sua email,
//controlla che sia nella lista di chi può accedere,
//  se non fosse corretta richiedila/se email corretta
//stampa un messaggio appropriato sull’esito del controllo.
//Gioco dei dadi
//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
//chi ha il numero piu alto vince.


//Prima di partire a scrivere codice poniamoci qualche domanda:
//Che ci sia un array da qualche parte?
//Se dobbiamo confrontare qualcosa che "cosa" ci serve?
//Consigli del giorno:
//1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
//2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
//3. si ma noi cosa vogliamo fare?
//4. torniamo a scrivere in italiano
//5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
//Bonus
//Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina.
  
let app = document.querySelector('.app')

const emailUtente = ["gian@gmail.com", "lorenzo@hotmail.it", "fabio@hotmail.it"];
const button = document.getElementsByTagName('button'); //tag nel html button
console.log(button);
button[0].addEventListener('click', controlla);
function controlla(){
    const userEmail = document.getElementById('email').value;

    let emailValid = false;

    for(let i = 0; i < emailUtente.length; i++){
        if(emailUtente[i] === userEmail){
            emailValid = true;
        }
    }
    if(emailValid){
        let textP = "Benvenuto l'email è corretta";
        document.getElementById("risposta").innerHTML = textP;

        


    }else{
        let textN = "l'email inserita non  è corretta, riprovare ";
        document.getElementById("risposta").innerHTML = textN;
    }
}



button[1].addEventListener('click', play);
function play(){
    let scoreUser = (Math.floor(Math.random() * 6) + 1);
    console.log(scoreUser);
    document.getElementById("utente").innerHTML = scoreUser;

    let scoreCpu = (Math.floor(Math.random() * 6) + 1);
    console.log(scoreCpu);
    document.getElementById("cpu").innerHTML = scoreCpu;
    if(scoreUser > scoreCpu){
        document.getElementById("vincitore").innerHTML = "utente";
    
    }else{
        document.getElementById("vincitore").innerHTML = "cpu";
    
    }

}










