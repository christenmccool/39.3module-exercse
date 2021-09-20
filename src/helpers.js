/* Choose a random item from an array of items */
function choice(items) {
  const ind = Math.floor(Math.random() * items.length);
  return items[ind];
}

/** Remove an item from the copy of an array of items.
 * Returns the copy without the item.
 * Returns undefined if the item isn't found. 
 */  
function remove(items, item) {
  const ind = items.findIndex(ele => ele === item);
  if (ind) {
    return items.filter((ele, i) => i !== ind);
  }
}

export {choice, remove};