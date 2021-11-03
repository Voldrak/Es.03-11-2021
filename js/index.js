
const render = (container, items) => {

    const elements = items.map((element) =>
        `<li> 
        <input type="checkbox" name="completed" class="completed">
        <label>${element.title}</label>
        ${element.completed}
        </li>`
    );
    const content = elements.join('');

    container.innerHTML = content;

    if (${element.completed} == true) {
        
    }


}

document.addEventListener('DOMContentLoaded', () => {
    const list = document.querySelector('ul');

    render(list, listT)
});

