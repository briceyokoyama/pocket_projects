
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
  const newP = document.createElement('p');
  newP.innerText = string;
  const children = Array(...htmlElement.children);
  children.forEach(child => child.remove());
  htmlElement.appendChild(newP);
};

htmlGenerator('I <3 JS.', partyHeader);