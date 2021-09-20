import {choice, remove} from './helpers';
import fruits from './foods.js';

const fruit = choice(fruits);
console.log(`I'd like one ${fruit} please.`)
console.log(`Here you go: ${fruit}`)
console.log(`Delicious! May I have another?`)
const newFruits = remove(fruits, fruit);
console.log(newFruits);
console.log(`“I’m sorry, we’re all out. We have ${newFruits.length} left.`)
