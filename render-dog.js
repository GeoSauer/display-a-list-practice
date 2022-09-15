export function renderDog(dog) {
    const li = document.createElement('li');

    const headerEl = document.createElement('h2');
    headerEl.textContent = dog.name;

    const pEl = document.createElement('p');
    pEl.textContent = dog.size + ' ' + dog.fur;
    li.append(headerEl, pEl);

    return li;
}
