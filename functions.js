const q = (selector) => document.querySelector(selector);

const render = (container, items) => {

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
    
