// import functions and grab DOM elements
import { dogs } from './dogs-data.js';
import { renderDog } from './render-dog.js';
import { cats } from './cats-data.js';
import { renderCat } from './render-cat.js';
import { creatures } from './creatures-data.js';
import { renderCreature } from './render-creature.js';

const dogList = document.getElementById('dog-list');
const catList = document.getElementById('cat-list');
const creatureList = document.getElementById('creature-list');

function displayDogs() {
    dogList.innerHTML = '';

    for (let dog of dogs) {
        const dogEl = renderDog(dog);
        dogList.append(dogEl);
    }
}

function displayCats() {
    catList.innerHTML = '';

    for (let cat of cats) {
        const catEl = renderCat(cat);
        catList.append(catEl);
    }
}

function displayCreatures() {
    creatureList.innerHTML = '';

    for (let creature of creatures) {
        const creatureEl = renderCreature(creature);
        creatureList.append(creatureEl);
    }
}

displayDogs();
displayCats();
displayCreatures();
