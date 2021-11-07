const q = (selector) => document.querySelector(selector);

const render = (container, items) => {

    //SORT BY NAME
    items.sort((a, b) => {
        const nameA = a.name.toUpperCase(); // ignore upper and lowercase
        const nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
         return -1;
        }
        if (nameA > nameB) {
        return 1;
        }
  
        // names must be equal
        return 0;
    });

    console.log(items);

    const elements = items.map((element) =>
    `<li>
        <img class="img" src="${element.img}" alt="Sage">
        <h3>${element.name}</h3>
        <p><strong>Properties:</strong>${element.properties}</p>
        <p><strong>Harvest:</strong>${element.harvest}</p>
    </li>`
    );

    const content = elements.join('');
    
    container.innerHTML = content;
}

export{
    q,
    render
    }
    
