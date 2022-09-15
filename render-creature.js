export function renderCreature(creature) {
    const li = document.createElement('li');

    const headerEl = document.createElement('h2');
    headerEl.textContent = creature.name;

    const pEl = document.createElement('p');
    pEl.textContent = creature.alignment + ' ' + creature.class;
    li.append(headerEl, pEl);

    return li;
}
