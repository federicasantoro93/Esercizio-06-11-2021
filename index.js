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
});


