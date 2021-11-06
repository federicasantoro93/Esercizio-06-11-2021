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

    add.addEventListener('submit', (event) => {
        event.preventDefault();

        const newCard ={
            name: event.target.name.value,
            properties: event.target.properties.value,  //l'elemento viene riconosciuto tramite l'attributo name="properties"
            harvest:event.target.harvest.value,
            img:event.target.img.value,
        };

        data.push(newCard); //faccio un push del nuovo oggetto dentro l'array data

        render(list, data) //inserisco nell'html la nuova lista 

        add.reset(); //pulisco il form tramite il metodo reset(proprio solo dei form)


    })
});


