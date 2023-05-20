const domande = document.getElementsByClassName("domande");
const button = document.getElementById("button");
let risultato = document.getElementById("risultato");

let gruppiRisposte = [];
//individuare le risposte
for(let i = 0 ; i < domande.length ; i++){
    const gruppoRisposta = document.getElementsByClassName(i);
    gruppiRisposte.push(gruppoRisposta);
}

//trovare le risposte dell'utente
let validificazioni = [];//lista di true e false, dove true è la risposta scelta
for(let i = 0 ; i < domande.length ; i++){
    let gruppoValidificazioni = [];
    for(let j = 0 ; j < gruppiRisposte[i].length ; j++){
        gruppoValidificazioni.push(false);
    }
    validificazioni.push(gruppoValidificazioni);
}

//click di una risposta
for(let i = 0 ; i < gruppiRisposte.length ; i++){//per il numero di domande
    for(let j = 0 ; j < gruppiRisposte[i].length ; j++){//per le 4 risposte
        gruppiRisposte[i][j].addEventListener("click",()=>{//aggiunta della funzione alla risposta
            for(let l = 0 ; l < gruppiRisposte[i].length ; l++){//si resettano alla normalità tutte le risposte
                gruppiRisposte[i][l].style.backgroundColor = "white";
                gruppiRisposte[i][l].style.color = "black";
                validificazioni[i][l] = false;
            }
            //cambio di colore della risposta clickata
            gruppiRisposte[i][j].style.backgroundColor = "black";
            gruppiRisposte[i][j].style.color = "white";
            validificazioni[i][j] = true;
        })
    }
}

//validificazione
button.addEventListener("click",()=>{
    let valore = 0;
    for(let i = 0 ; i < gruppiRisposte.length ; i++){
        for(let j = 0 ; j < gruppiRisposte[i].length ; j++){
            if(gruppiRisposte[i][j].value == "1"){
                gruppiRisposte[i][j].style.backgroundColor = "green";
                gruppiRisposte[i][j].style.color = "white";
            }
            if(validificazioni[i][j]){//se la risposta è stata scelta
                valore += parseInt(gruppiRisposte[i][j].value);
                //per cambiare colore alla risposta se è giusta o sbagliata
                if(gruppiRisposte[i][j].value == "1"){
                    gruppiRisposte[i][j].style.backgroundColor = "green";
                }
                else{
                    gruppiRisposte[i][j].style.backgroundColor = "red";
                }
            }
        }
    }
    let percentuale = (valore / domande.length)*100;
    if(percentuale >= 60){
        risultato.style.color = "green";
    }
    risultato.textContent = `Risultato: ${percentuale}%`;
})