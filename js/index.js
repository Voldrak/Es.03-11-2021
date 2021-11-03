
const render = (container, items) => {

    const elements = items.map((element) => {
        if (element.completed === true) {
            return `<li> 
        <input type="checkbox" name="completed" class="completed" disabled value="completed" checked >
        <label>${element.title}</label>
        ${element.completed}
        </li>`
        } else {
            return `<li> 
        <input type="checkbox" name="completed" class="completed" value="completed" disabled>
        <label>${element.title}</label>
        ${element.completed}
        </li>`
        }



    });

    const poppete = document.querySelector(".popitem");
    poppete.addEventListener("click", () => {
        elements.pop();
        
        const content = elements.join('');

        container.innerHTML = content;
    }
    );

    const content = elements.join('');

    container.innerHTML = content;


}


document.addEventListener('DOMContentLoaded', () => {
    const list = document.querySelector('ul');

    render(list, listT)
});


