const mySafeString = myS => {
  myS = myS.toLowerCase().replace(' ', '-');
  return myS;
};

// Clear Inner HTML
const clearContent = elementID => {
  const parent = document.getElementById(elementID);
  while (parent.firstChild) {
    parent.firstChild.remove();
  }
};

//  Delete from array
const deleteValue = (arr, index) => {
  arr.splice(index, 1);
  const filtered = arr.filter((el) => el != null);
  return filtered;
};


export { mySafeString, clearContent, deleteValue };