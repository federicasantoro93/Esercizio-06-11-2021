import {data} from './data.js';
import {q, render} from './functions.js';

document.addEventListener('DOMContentLoaded', () =>{

    const form = q('form');
    const input = q('form input');
    const list = q('ul');

    render(list, data);

input.addEventListener('keyup', (event) => {
    const value = input.value.toLowerCase();

    const searchResults = data.filter((element) =>
    element.name.toLocaleLowerCase().search(value) >-1 ||
    element.properties.toLocaleLowerCase().search(value) >-1 ||
    element.harvest.toLocaleLowerCase().search(value) >-1
    );

    render(list, searchResults);
    });

    //ADD A NEW CARD
    add.addEventListener('submit', (event) => {
        event.preventDefault();

        //INIZIALI IN MAIUSCOLO
        const uppercaseInitialName = event.target.name.value.split(" ");
        for (let i = 0; i < uppercaseInitialName.length; i++) {
            uppercaseInitialName[i] = uppercaseInitialName[i][0].toUpperCase() + uppercaseInitialName[i].substr(1);
        }

        //Era preferibile usare il metodo for each 
                
        //Il metodo substr() restituisce una parte della stringa, partendo dall'indice specificato 
        //e estendendosi successivamente per un determinato numero di caratteri.
        //Sintassi: substr(start) || substr(start, length)

        /*
        const newCard ={};
        newCard.name = uppercaseInitialName.join(" ");
        newCard.properties = properties.value;
        newCard.harvest = harvest.value;
        newCard.img = img.value;
        */

            const newCard ={
            //name: event.target.name.value,
            name: uppercaseInitialName.join(" "),
            properties: event.target.properties.value,  //l'elemento viene riconosciuto tramite l'attributo name="properties"
            harvest:event.target.harvest.value,
            img:event.target.img.value,
        };
        
            
        data.push(newCard); //faccio un push del nuovo oggetto dentro l'array data

        render(list, data) //inserisco nell'html la nuova lista 

        add.reset(); //pulisco il form tramite il metodo reset (proprio solo dei form)
        //event.target.reset() //In alternativa potevo selezionare la form in questo modo

    })
});


