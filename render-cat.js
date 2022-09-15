export function renderCat(cat) {
    const li = document.createElement('li');

    const headerEl = document.createElement('h2');
    headerEl.textContent = cat.name;

    const pEl = document.createElement('p');
    pEl.textContent = cat.temperament + ' ' + cat.feel;
    li.append(headerEl, pEl);

    return li;
}
